import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';


export function LeadingIconButtons() {
    function gotoDashboard() {
        window.location.href = '/dashboard';
    }

    return (
        <button
            type="button"
            className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors duration-200 ease-in-out shadow-md mr-4"
            onClick={gotoDashboard}
        >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
        </button>
    );
}

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const [amount, setAmount] = useState(0);
    const [successMessage, setSuccessMessage] = useState(null);

    const initiateTransfer = async () => {
        try {
            await axios.post(
                'http://localhost:3000/api/v1/account/transfer',
                {
                    to: id,
                    amount,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                }
            );
            setSuccessMessage(`Successfully transferred Rs ${amount} to ${name}`);
        } catch (error) {
            console.log(error.message);
            setSuccessMessage('Failed to transfer money');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    {successMessage && (
                        <div className="p-6">
                            <div className="text-green-600 font-semibold">{successMessage}</div>
                        </div>
                    )}
                    {!successMessage && (
                        <div className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                    <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                                </div>
                                <h3 className="text-2xl font-semibold">{name}</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="amount"
                                    >
                                        Amount (in Rs)
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setAmount(e.target.value);
                                        }}
                                        type="number"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        id="amount"
                                        placeholder="Enter amount"
                                    />
                                </div>
                                <button
                                    onClick={initiateTransfer}
                                    className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white hover:bg-green-600"
                                >
                                    Initiate Transfer
                                </button>
                            </div>
                        </div>
                    )}
                    <div className=" flex items-center justify-center space-x-4 font-bold ">
                        <LeadingIconButtons />
                    </div>
                </div>
            </div>
        </div>
    );
};

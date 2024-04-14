import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Appbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleLogout = async () => {
        try {
            await axios.delete("http://localhost:3000/api/v1/user/logout", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            localStorage.removeItem("token");
            window.location.href = "/signup";
        } catch (error) {
            console.error(error.message);
        }
        console.log('User logged out');
    };

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="relative">
                    <div 
                        className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer" 
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <div className="flex flex-col justify-center h-full text-xl">
                            U
                        </div>
                    </div>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                            <div className="py-1">
                                <a 
                                    href="#" 
                                    className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
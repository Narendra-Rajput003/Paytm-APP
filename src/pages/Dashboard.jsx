import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"
import axios from "axios";

export const Dashboard = () => {

    // Replace with backend call
    
    const  [balance, setBalance] = useState(0)

    useEffect(() => {

        try {
            axios.get("http://localhost:3000/api/v1/account/balance",{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }

            }).then(response => {
                setBalance(Math.floor(response.data.data.balance));
            }).catch(error => {
                console.error(error.response.data)
            })
        } catch (error) {
            console.error(error.message)  
        }

    }, [balance]);

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}
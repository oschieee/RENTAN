import React, { useState, useEffect, useContext } from "react";
import PaymentSpin from "../components/PaymentSpin";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { AuthContext } from "../AuthContext";

const Payment = () => {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(token);
                const response = await axios.get('http://localhost:3000/api/transaction', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };

        if (token) {
        fetchData();
        }
        const timer = setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 3000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [token]);

    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center h-screen">
            {loading && <PaymentSpin />}
            {!loading && success && (
                <div className="payment-success">
                    <h1 className="text-4xl font-bold mb-4">Payment Successful</h1>
                    <p>Your payment was processed successfully. Thank you!</p>
                </div>
            )}
        </div>
        </>
    );
};

export default Payment;

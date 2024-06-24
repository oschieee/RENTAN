import React, { useState, useEffect } from "react";
import PaymentSpin from "../components/PaymentSpin";
import Navbar from "../components/Navbar";

const Payment = () => {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 3000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

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

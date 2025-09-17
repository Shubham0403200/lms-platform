import React from "react";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg">Thank you for your purchase. Your transaction has been completed successfully.</p>
      <a href="/" className="mt-4 text-blue-500 underline">Go back to home</a>
    </div>
  );
};

export default SuccessPage;

import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Welcome!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          Thank you for signing up! Please check your email to verify your
          account.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          If you don't see the email, please check your spam folder.
        </p>
      </div>
    </section>
  );
};

export default Welcome;

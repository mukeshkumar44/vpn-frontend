import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices"
      ]
    },
    {
      name: "Standard Plan",
      price: "$9/mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere"
      ]
    },
    {
      name: "Premium Plan",
      price: "$12/mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features"
      ],
      
    }
  ];

  return (
    <section className="py px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Let's choose the package that is best for you and explore it happily and cheerfully.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg p-8 flex flex-col items-center border ${plan.recommended ? 'border-red-500' : 'border-gray-200'}`}
          >
            <img src="/images/Free@2x.png" alt={plan.name} className="mb-6 h-24" />
            <h3 className="font-bold text-xl mb-6">{plan.name}</h3>
            
            <ul className="text-left mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-3">
                  <img src="/images/Group@2x.png" alt="Check" className="mr-2 h-5 w-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="font-bold text-xl mb-6">{plan.price}</div>
            
            <button 
              className={`px-12 py-2 rounded-full font-medium transition-colors duration-300 ${
                plan.recommended 
                  ? 'bg-red-500 text-white' 
                  : 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
              }`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Basic calendar management',
        'Limited AI assistance',
        'Up to 50 events per month',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: '$9.99',
      features: [
        'Advanced calendar features',
        'Unlimited AI assistance',
        'Unlimited events',
        'Priority support',
        'Custom event categories',
        'Calendar analytics'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        'Custom AI training',
        'API access',
        'Dedicated support',
        'Team management',
        'Advanced security'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-[var(--color-card)] rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
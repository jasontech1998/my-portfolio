"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('annual');

  const pricingPlans = [
    {
      name: 'Basic',
      price: 2.67,
      features: [
        'Small reply boost',
        'Encrypted direct messages',
        'Bookmark folders',
        'Highlights tab',
        'Edit post',
        'Post longer videos',
        'Longer posts'
      ]
    },
    {
      name: 'Premium',
      price: 7,
      features: [
        'Half Ads in For You and Following',
        'Larger reply boost',
        'Get paid to post',
        'Checkmark',
        'Early Access',
        'Analytics, Media Studio',
        'Creator Subscriptions'
      ]
    },
    {
      name: 'Premium+',
      price: 14,
      features: [
        'No Ads in For You and Following',
        'Largest reply boost',
        'Write Articles'
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Upgrade to Premium</h1>
      <p className="mb-8">Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</p>
      
      <div className="flex justify-center items-center space-x-4 mb-8">
        <span className={`${billingCycle === 'annual' ? 'text-blue-400' : ''}`}>Annual</span>
        <Switch 
          checked={billingCycle === 'monthly'}
          onCheckedChange={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
        />
        <span className={`${billingCycle === 'monthly' ? 'text-blue-400' : ''}`}>Monthly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`
              ${plan.name === 'Premium+' ? 'bg-blue-600 text-gray-900' : 'bg-gray-800 text-white'} 
              shadow-lg hover:shadow-xl transition-shadow duration-300 border-0
            `}
          >
            <CardHeader>
              <CardTitle className={plan.name === 'Premium+' ? 'text-gray-900' : 'text-white'}>
                {plan.name}
              </CardTitle>
              <div className="text-3xl font-bold">
                ${plan.price} <span className="text-sm font-normal">/ month</span>
              </div>
              <div className="text-sm">Billed {billingCycle === 'annual' ? 'annually' : 'monthly'}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg 
                      className={`w-4 h-4 mr-2 ${plan.name === 'Premium+' ? 'text-green-800' : 'text-green-400'}`} 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
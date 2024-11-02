import React from 'react';
import { Calendar as CalendarIcon, Bot, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">About Calsense</h1>
      
      <p className="text-gray-300 mb-8">
        Calsense is an innovative calendar application that combines intelligent scheduling 
        with AI assistance to help you manage your time effectively.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[var(--color-card)] p-6 rounded-lg">
          <CalendarIcon className="w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold mb-2">Smart Scheduling</h3>
          <p className="text-gray-300">
            Intelligent event management with intuitive controls and seamless navigation.
          </p>
        </div>

        <div className="bg-[var(--color-card)] p-6 rounded-lg">
          <Bot className="w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold mb-2">AI Assistant</h3>
          <p className="text-gray-300">
            Natural language processing for effortless calendar management and scheduling.
          </p>
        </div>

        <div className="bg-[var(--color-card)] p-6 rounded-lg">
          <Clock className="w-8 h-8 mb-4" />
          <h3 className="text-lg font-bold mb-2">Time Management</h3>
          <p className="text-gray-300">
            Optimize your schedule with smart suggestions and conflict resolution.
          </p>
        </div>
      </div>

      <div className="bg-[var(--color-card)] p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-300">
          At Calsense, we're committed to revolutionizing how people manage their time. 
          By combining cutting-edge AI technology with intuitive design, we're making 
          calendar management more efficient and enjoyable than ever before.
        </p>
      </div>
    </div>
  );
}
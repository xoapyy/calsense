import React from 'react';

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">How to Use Calsense</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">1. Adding Events</h2>
          <p className="text-gray-300 mb-2">Click the "New Event" button to create a calendar event:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Enter the event title</li>
            <li>Select the date</li>
            <li>Optionally add a time and description</li>
            <li>Click Save to add your event</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. AI Assistant</h2>
          <p className="text-gray-300 mb-2">Use our AI assistant to manage your calendar:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Ask to create, modify, or delete events</li>
            <li>Get schedule recommendations</li>
            <li>Natural language processing for easy interaction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Navigation</h2>
          <p className="text-gray-300 mb-2">Navigate through your calendar:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Use arrow buttons to change months</li>
            <li>Click on any day to view events</li>
            <li>Delete events using the trash icon</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
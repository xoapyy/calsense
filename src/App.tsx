import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import Calendar from './components/Calendar';
import HowToUse from './pages/HowToUse';
import About from './pages/About';
import Pricing from './pages/Pricing';

function Home() {
  const [selectedDate] = useState(new Date());

  return (
    <main className="flex p-4 gap-4 h-[calc(100vh-8rem)]">
      <div className="w-[300px]">
        <ChatInterface />
      </div>
      <div className="flex-1">
        <Calendar selectedDate={selectedDate} />
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <footer className="fixed bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-400">
        Calsense 2024 | Built using Ollama API | For any Inquiries please contact Calsense@gmail.com
      </footer>
    </div>
  );
}

export default App;
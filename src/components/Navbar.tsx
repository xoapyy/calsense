import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
        Calsense
      </div>
      <div className="flex items-center gap-8">
        <button 
          onClick={() => navigate('/how-to-use')}
          className="text-white hover:text-gray-300 transition-colors"
        >
          How To Use
        </button>
        <button 
          onClick={() => navigate('/about')}
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => navigate('/pricing')}
          className="text-white hover:text-gray-300 transition-colors"
        >
          Pricing
        </button>
        <button 
          onClick={() => navigate('/profile')}
          className="bg-[var(--color-card)] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#3C3C3C] transition-colors"
        >
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}
import React from 'react';
import { X } from 'lucide-react';
import { EventFormData } from '../types/Event';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EventFormData) => void;
  initialData?: EventFormData;
}

export default function EventModal({ isOpen, onClose, onSubmit, initialData }: EventModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: EventFormData = {
      title: formData.get('title') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      description: formData.get('description') as string,
    };
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[var(--color-card)] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Event</h2>
          <button onClick={onClose} className="hover:bg-[var(--color-bg)] p-1 rounded">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={initialData?.title}
              className="w-full bg-[var(--color-bg)] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
              type="date"
              name="date"
              defaultValue={initialData?.date}
              className="w-full bg-[var(--color-bg)] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1">Time (optional)</label>
            <input
              type="time"
              name="time"
              defaultValue={initialData?.time}
              className="w-full bg-[var(--color-bg)] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1">Description (optional)</label>
            <textarea
              name="description"
              defaultValue={initialData?.description}
              className="w-full bg-[var(--color-bg)] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              rows={3}
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded hover:bg-[var(--color-bg)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
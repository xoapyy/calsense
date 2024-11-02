import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import { Event } from '../types/Event';
import EventModal from './EventModal';

interface CalendarProps {
  selectedDate: Date;
}

export default function Calendar({ selectedDate: initialDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const currentMonth = format(currentDate, 'MMMM yyyy');
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleAddEvent = (formData: any) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: formData.title,
      date: new Date(formData.date),
      time: formData.time,
      description: formData.description,
    };
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <div className="bg-[var(--color-card)] flex-1 rounded-lg p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">Calendar</h2>
          <div className="flex items-center gap-2">
            <button onClick={handlePrevMonth} className="p-1 hover:bg-[var(--color-bg)] rounded transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-mono">{currentMonth}</span>
            <button onClick={handleNextMonth} className="p-1 hover:bg-[var(--color-bg)] rounded transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-4 py-1.5 rounded-md text-sm hover:bg-gray-100 transition-colors"
        >
          New Event
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-gray-400 py-2">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          const dayEvents = events.filter(event => isSameDay(event.date, day));
          return (
            <div
              key={i}
              className="aspect-square p-1 hover:bg-[var(--color-bg)] rounded cursor-pointer transition-colors"
            >
              <div className="text-sm mb-1">{format(day, 'd')}</div>
              {dayEvents.map(event => (
                <div
                  key={event.id}
                  className="text-xs bg-white text-black rounded px-1 py-0.5 mb-1 flex justify-between items-center"
                >
                  <span className="truncate">{event.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteEvent(event.id);
                    }}
                    className="ml-1 hover:text-red-600"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        onSubmit={handleAddEvent}
        initialData={selectedEvent ? {
          title: selectedEvent.title,
          date: format(selectedEvent.date, 'yyyy-MM-dd'),
          time: selectedEvent.time,
          description: selectedEvent.description,
        } : undefined}
      />
    </div>
  );
}
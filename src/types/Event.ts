export interface Event {
  id: string;
  title: string;
  date: Date;
  description?: string;
  time?: string;
}

export type EventFormData = Omit<Event, 'id' | 'date'> & {
  date: string;
};

export interface AIEventSuggestion {
  title: string;
  date: string;
  time?: string;
  description?: string;
}
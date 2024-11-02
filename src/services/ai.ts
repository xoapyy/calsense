import { Event } from '../types/Event';

export interface AIResponse {
  message: string;
  suggestedEvents?: Event[];
}

export async function sendMessageToAI(message: string): Promise<AIResponse> {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral', // or your preferred Ollama model
        prompt: `You are a calendar assistant. Help manage calendar events and scheduling.
                User message: ${message}
                
                Respond in JSON format with:
                {
                  "message": "your response message",
                  "suggestedEvents": [] // array of suggested calendar events if applicable
                }`,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Parse the Ollama response
    try {
      const parsedResponse = JSON.parse(data.response);
      return {
        message: parsedResponse.message,
        suggestedEvents: parsedResponse.suggestedEvents || [],
      };
    } catch (parseError) {
      // Fallback if the response isn't valid JSON
      return {
        message: data.response,
        suggestedEvents: [],
      };
    }
  } catch (error) {
    console.error('Error calling Ollama API:', error);
    return {
      message:
        "I'm sorry, I encountered an error while processing your request. Please try again.",
      suggestedEvents: [],
    };
  }
}

// Example usage:
/*
const response = await sendMessageToAI("Schedule a team meeting for next week");
console.log(response.message);
console.log(response.suggestedEvents);
*/

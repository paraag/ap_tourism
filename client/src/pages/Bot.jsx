import React, { useState } from 'react';
import { tripPlannerService } from '../../apiService'; // Import the service

const AIChatBot = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous state
    setResponse('');
    setError(null);
    setIsLoading(true);

    try {
      const result = await tripPlannerService.getPlanTrip(prompt);
      setResponse(result.response);
    } catch (err) {
      // Error handling
      setError(err.message || 'An unknown error occurred');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Andhra Pradesh Travel Planner</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your travel plans for Andhra Pradesh..."
          className="w-full p-2 border rounded mb-2 min-h-[100px]"
          required
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Planning...' : 'Get Trip Plan'}
        </button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center text-gray-500">Generating your trip plan...</div>
      )}

      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Your Trip Plan</h2>
          <div 
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }}
          />
        </div>
      )}
    </div>
  );
};

export default AIChatBot;
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MapPin, Plane, Send, Compass } from 'lucide-react';
import { tripPlannerService } from '../../apiService';

const AIChatBot = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(textarea.scrollHeight, 100)}px`;
    }
  }, [prompt]);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 flex items-center">
          <MapPin className="mr-3 w-10 h-10" />
          <div>
            <h1 className="text-2xl font-bold">Andhra Pradesh Travel Planner</h1>
            <p className="text-sm text-white/80">Your AI-powered travel companion</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Input Section */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              <textarea 
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your dream trip to Andhra Pradesh... (e.g., 'I want to explore historical sites and beaches')"
                className="w-full p-4 pr-12 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-300 focus:outline-none resize-none min-h-[150px] transition-all duration-300 ease-in-out"
                required
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50 transition-all duration-300 ease-in-out"
              >
                {isLoading ? <Compass className="animate-spin" /> : <Send />}
              </button>
            </div>
          </form>

          {/* Error Handling */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700">
              <p className="font-semibold">Oops! Something went wrong</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center space-x-3 text-blue-500">
              <Plane className="animate-bounce" />
              <span>Generating your personalized trip plan...</span>
            </div>
          )}

          {/* Response Section */}
          {response && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Compass className="mr-3 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-800">Your Customized Trip Plan</h2>
              </div>
              <div className="prose max-w-full text-gray-700">
                <ReactMarkdown 
                  components={{
                    h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-blue-700 mt-4 mb-2" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-blue-600 mt-3 mb-2" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside pl-2 space-y-1" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside pl-2 space-y-1" {...props} />,
                    li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-blue-800" {...props} />,
                    a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />
                  }}
                >
                  {response}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIChatBot;
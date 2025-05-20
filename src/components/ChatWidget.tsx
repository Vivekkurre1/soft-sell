import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { create } from 'zustand';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

type ChatStore = {
  isOpen: boolean;
  messages: Message[];
  setIsOpen: (isOpen: boolean) => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
};

const useChatStore = create<ChatStore>((set) => ({
  isOpen: false,
  messages: [],
  setIsOpen: (isOpen) => set({ isOpen }),
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { ...message, id: Math.random().toString(), timestamp: new Date() },
      ],
    })),
  clearMessages: () => set({ messages: [] }),
}));

// Simulated AI responses
const mockResponses: Record<string, string> = {
  default: "I'm here to help you sell your software licenses. What would you like to know?",
  'how do i sell my license': 'Selling your license is easy! Just follow these steps:\n1. Fill out our valuation form above\n2. Receive an instant quote\n3. Accept the offer and get paid within 48 hours',
  'what licenses do you accept': 'We accept licenses from major software providers including:\n- Microsoft Office\n- Adobe Creative Cloud\n- Autodesk Suite\n- SAP\n- Oracle\n- Salesforce\nAnd many more!',
  'how long does it take': 'The entire process typically takes 2-3 business days:\n- Instant quote generation\n- 24-48 hours for payment processing\n- License transfer completed within 1 business day',
  'is it legal': 'Yes, selling unused software licenses is completely legal! We ensure all transfers comply with software vendors\' terms of service and licensing agreements.',
};

const findBestResponse = (input: string): string => {
  const normalizedInput = input.toLowerCase().trim();
  
  // Check for exact matches first
  if (mockResponses[normalizedInput]) {
    return mockResponses[normalizedInput];
  }
  
  // Check for partial matches
  for (const [key, response] of Object.entries(mockResponses)) {
    if (normalizedInput.includes(key)) {
      return response;
    }
  }
  
  return mockResponses.default;
};

const ChatWidget: React.FC = () => {
  const { isOpen, messages, setIsOpen, addMessage } = useChatStore();
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    addMessage({ text: inputValue, isBot: false });
    setInputValue('');
    setIsTyping(true);
    
    // Simulate API delay
    setTimeout(() => {
      const response = findBestResponse(inputValue);
      addMessage({ text: response, isBot: true });
      setIsTyping(false);
    }, 1000);
  };
  
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }
  
  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <h3 className="font-semibold">Chat with SoftSell</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-blue-600 text-white'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Loader2 className="w-5 h-5 animate-spin text-gray-600" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
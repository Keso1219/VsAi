// src/components/Chat.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
}

interface ChatProps {
  toolName?: string;
}

const WEBHOOK_URL = 'http://localhost:5678/webhook/f4534e85-d391-4fa6-80cf-863a69d884d3';

const Chat: React.FC<ChatProps> = ({ toolName }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Ref to the scrollable messages container
  const containerRef = useRef<HTMLDivElement>(null);

  // Manually scroll the container rather than the page
  const scrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log('Posting to:', WEBHOOK_URL);
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input, toolContext: toolName }),
      });
      console.log('Status:', response.status);

      const raw = await response.text();
      console.log('Raw response:', raw);

      let data: any = {};
      try {
        data = JSON.parse(raw);
      } catch {
        console.warn('Could not parse JSON, using raw text');
      }

      // Extract nested output if present
      let replyText = '';
      if (data && typeof data === 'object') {
        const keys = Object.keys(data);
        if (keys.length === 1) {
          const nested = data[keys[0]];
          if (nested && typeof nested.output === 'string') replyText = nested.output;
        }
      }
      replyText = replyText || data.response || data.reply || raw || 'Sorry, I could not process your request.';
      replyText = replyText.trim();

      const botMessage: Message = {
        id: Date.now().toString(),
        content: replyText,
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: 'Sorry, there was an error processing your request.',
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-dark-card rounded-lg shadow-card overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-lg font-semibold">AI Assistant</h3>
      </div>

      {/* Scrollable messages area */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${
                msg.sender === 'user' ? 'bg-primary text-white' : 'bg-dark-bg text-white'
              }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-dark-bg text-white rounded-lg p-3">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about AI tools..."
            className="flex-1 bg-dark-bg border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;

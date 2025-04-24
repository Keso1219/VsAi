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

const WEBHOOK_URL = 'https://kevins.app.n8n.cloud/webhook-test/d2c8c122-0c6d-4df0-803c-8b572199c8c2';

const Chat: React.FC<ChatProps> = ({ toolName }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Push the user's message
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
      console.log('Sending to webhook:', WEBHOOK_URL, { query: input, toolContext: toolName });
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: input,
          toolContext: toolName,
        }),
      });
      console.log('HTTP status:', response.status);

      // 2. Read raw text so we can inspect exactly what we get back
      const raw = await response.text();
      console.log('Raw webhook response text:', raw);

      // 3. Parse JSON if possible
      let data: any = {};
      try {
        data = JSON.parse(raw);
        console.log('Parsed JSON:', data);
      } catch (err) {
        console.warn('Could not parse JSON, falling back to raw text');
      }

      // 4. Pick the correct field (adjust these falls-backs to match your webhook shape)
      const replyText =
        data.response ??
        data.reply ??
        data.result ??
        raw ??
        'Sorry, I could not process your request.';

      const botMessage: Message = {
        id: Date.now().toString(),
        content: replyText,
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Send message error:', err);
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

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.sender === 'user' ? 'bg-primary text-white' : 'bg-dark-bg text-white'
              }`}
            >
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

        <div ref={messagesEndRef} />
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

import React, { useState } from 'react';

const demoQA = [
  { q: 'How to control pests in wheat?', a: 'Use recommended pesticides and rotate crops to reduce pest buildup.' },
  { q: 'Best time to irrigate rice?', a: 'Irrigate during early morning or late evening to minimize evaporation.' },
  { q: 'How to improve soil fertility?', a: 'Add organic manure and practice crop rotation.' },
  { q: 'What is the MSP for wheat?', a: 'The MSP for wheat is ₹2,125/quintal for 2024-25.' },
];

import { Bot, User } from "lucide-react";

const AdvisoryChatbot = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const chatRef = React.useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      const found = demoQA.find((qa) => input.toLowerCase().includes(qa.q.split(' ')[0].toLowerCase()));
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: found ? found.a : 'Sorry, I do not have an answer for that yet (demo).' },
      ]);
    }, 800);
    setInput('');
  };

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow p-4 border flex flex-col">
      <div className="font-bold text-green-700 mb-2 flex items-center gap-2"><Bot className="h-4 w-4" /> Advisory Chatbot</div>
      <div ref={chatRef} className="h-56 overflow-y-auto bg-green-50 p-3 mb-3 rounded flex flex-col gap-2">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center mt-8">Ask a question about farming, pests, or prices…</div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end gap-2 ${msg.from === 'user' ? '' : ''}`}>
              {msg.from === 'bot' && <Bot className="h-4 w-4 text-green-600 mb-0.5" />}
              <span className={`px-3 py-2 rounded-2xl text-sm shadow ${msg.from === 'user' ? 'bg-green-200 text-green-900' : 'bg-white border text-green-800'}`}>{msg.text}</span>
              {msg.from === 'user' && <User className="h-4 w-4 text-green-700 mb-0.5" />}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          className="flex-1 border-2 border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
        />
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AdvisoryChatbot;

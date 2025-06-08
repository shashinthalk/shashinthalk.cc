import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

export default function FAQChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") {
      // Could add user feedback here
      return;
    }
    if (input.trim().length < 10) {
      // Could add user feedback: "Please enter at least 10 characters"
      return;
    }
    setIsActive(false);
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    setInput("");
  
    const url = 'https://api.shashinthalk.cc/get-answer';
    const data = { message: input };
  
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      setResponse(result);
      setMessages(prev => [...prev, { text: result.reply, sender: "receiver" }]);
  
    } catch (error) {
        console.log(response);
        console.error('Error:', error);
    }
  };

  const handleCloseChat = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  return (
    <div className="fixed bottom-1 md:bottom-2 right-2 w-[96%] md:w-[80%] max-w-xl bg-background shadow-2xl rounded-2xl border border-border-color z-50">
        {messages.length > 0 && (
        <div className={`messagebox p-4 max-h-[70vh] overflow-y-auto space-y-2 bg-background rounded-2xl ${isActive ? 'hidden' : ''}`}>
            {messages.slice(-4).map((msg, index) => (
            <div
                key={index}
                className={`text-sm md:text-xl  px-4 py-2 rounded-xl max-w-[70%] break-words w-fit ${
                msg.sender === "user"
                    ? "bg-button-bg text-background ml-auto text-right"
                    : "bg-black-900 text-white text-left"
                }`}
            >
              {msg.sender === "user" ? (
                msg.text
              ) : (
                ((index === 1 && messages.length < 3) || (index === 3 && messages.length > 3)) ? (
                  <Typewriter
                    words={[msg.text]}
                    typeSpeed={70}
                    delaySpeed={1000}
                  />
                ) : (
                  msg.text
                )
              )}
            </div>
            ))}
            <div className="flex justify-center w-full">
              <button onClick={handleCloseChat} className="rounded-full text-white underline"> close </button>
            </div>
        </div>
        )}

      <div className="flex items-center gap-2 p-3 bg-background rounded-2xl rainbow-border">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask something about me..."
            className="pl-10 bg-background text-heading-text pr-4 py-2 w-full text-base rounded-full border border-border-color focus:outline-none focus:ring-2 focus:ring-border-color"
          />
        </div>
        <button
          onClick={handleSend}
          className="text-heading-text font-semibold hover:text-white-700 text-sm"
        >
          Ask Me
        </button>
      </div>
    </div>
  );
}

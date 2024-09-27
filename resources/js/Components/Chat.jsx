import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate admin response (in a real application, this would be from the server)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Admin response', sender: 'admin' },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    // Mengirim pesan saat Enter ditekan tanpa Shift
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Chat dengan Admin</h2>
      <div className="p-2 overflow-auto border-b h-60 dark:border-gray-700">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs p-2 rounded-lg ${
                msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
              style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }} // Memastikan spasi dan new line ditampilkan
            >
              {msg.text}
            </div>
            {/* Menampilkan waktu */}
            <span className="ml-2 text-xs text-gray-500">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>{' '}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex mt-4">
        <textarea
          className="flex-grow p-2 border rounded-lg resize-none dark:bg-gray-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tulis pesan..."
          rows={2} // Mengatur ukuran awal dari textarea
        />
        <button type="submit" className="p-2 ml-2 text-white bg-blue-500 rounded-lg">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Chat;

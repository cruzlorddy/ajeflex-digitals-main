import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, CheckCircle } from 'lucide-react';

const StreamlinedChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! Welcome to Ajeflex Digitals. I'm Sarah, your virtual assistant.",
      sender: "support",
      time: "Just now",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      text: "Before we begin, may I know your name please? 😊",
      sender: "support",
      time: "Just now",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [chatStage, setChatStage] = useState('askName');
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "💻 Web Development",
    "📱 Mobile App Development",
    "🎨 UI/UX Design",
    "🔍 SEO & Marketing",
    "💰 Get Quote",
    "📞 Schedule Call"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (messageText = inputMessage) => {
    if (!messageText.trim()) return;
    const userMsg = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      handleResponse(messageText);
    }, 1200);
  };

  const handleResponse = (msg) => {
    let response = "";
    const lower = msg.toLowerCase();

    if (chatStage === 'askName' && !userName) {
      const name = msg.split(" ")[0].replace(/[^a-zA-Z]/g, '');
      setUserName(name);
      setChatStage('askEmail');
      response = `Thanks ${name}! Can you also provide your email so we can reach out if needed? ✉️`;
    } else if (chatStage === 'askEmail' && !userEmail) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (emailRegex.test(msg)) {
        setUserEmail(msg);
        setChatStage('showServices');
        setShowQuickReplies(true);
        response = `Got it, ${userName}! 📧 We'll keep that email safe. Now, how can we help you today?`;
      } else {
        response = `Hmm... that doesn't look like a valid email. Could you double-check it? ✉️`;
      }
    } else {
      response = getContextualResponse(lower);
    }

    const supportMsg = {
      id: messages.length + 2,
      text: response,
      sender: 'support',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
    };
    setMessages(prev => [...prev, supportMsg]);
  };

  const getContextualResponse = (msg) => {
    const name = userName || 'there';

    if (msg.includes("web"))
      return `Sure thing, ${name}! 🌐 Our web solutions include e-commerce, landing pages, and full-stack platforms. Would you like to book a demo or share your project goals?`;
    if (msg.includes("mobile"))
      return `Absolutely, ${name}! 📱 We build sleek and scalable iOS/Android apps. Could you tell me the core feature or idea you're planning?`;
    if (msg.includes("ui") || msg.includes("design"))
      return `Awesome, ${name}! 🎨 Our design team specializes in user-first interfaces. What kind of design are you thinking of?`;
    if (msg.includes("seo") || msg.includes("marketing"))
      return `You're in good hands, ${name}! 🔍 We help brands grow organically through smart SEO & content marketing. Do you already have a website or landing page?`;
    if (msg.includes("quote") || msg.includes("budget"))
      return `Great! 💰 To give you an accurate quote, I’ll need a rough overview of your idea or feature list. Want to begin?`;
    if (msg.includes("call") || msg.includes("meeting"))
      return `Perfect, ${name}. 📞 Please share your time zone and preferred call time. We'll align a session with our strategist.`;

    return `Thanks for that, ${name}! Could you please clarify a bit more about what you're looking for? 😊 I'm here to guide you step by step.`;
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 p-2 text-sm text-gray-500">
      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format" alt="avatar" className="w-5 h-5 rounded-full" />
      <span>Sarah is typing...</span>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center relative hover:scale-105 transition-transform"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        {!isOpen && <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-xs flex items-center justify-center rounded-full">2</div>}
      </button>

      {isOpen && (
        <div className="w-96 h-[500px] bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format" className="w-8 h-8 rounded-full" alt="avatar" />
              <div>
                <div className="font-semibold text-sm">Sarah • Ajeflex Assistant</div>
                <div className="text-xs flex items-center"><CheckCircle size={10} className="mr-1" />Live AI Agent</div>
              </div>
            </div>
            <X size={18} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border'} p-2 rounded-lg text-sm`}>
                  {msg.text}
                  <div className="text-xs mt-1 opacity-60">{msg.time}</div>
                </div>
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {showQuickReplies && (
            <div className="p-3 bg-white border-t">
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      sendMessage(reply);
                      setShowQuickReplies(false);
                    }}
                    className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded hover:bg-blue-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-3 border-t flex items-center space-x-2">
            <input
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder={chatStage === 'askName' ? "Enter your name..." : chatStage === 'askEmail' ? "Enter your email..." : "Type your message..."}
              className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim()}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StreamlinedChatWidget;

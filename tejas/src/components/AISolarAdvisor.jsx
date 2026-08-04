import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, HelpCircle, Check, Loader2 } from 'lucide-react';

const SAMPLE_QA = [
  {
    question: "Which solar system is right for me?",
    answer: "The right solar system depends on your monthly power consumption. Generally, a **3 kW system** is standard for typical double-bedroom homes (AC, fridge, lights). For smaller homes, **2 kW** works great, while businesses or homes with EV chargers require **5 kW to 10 kW**+ setups. Let's calculate your needs using our Solar Savings Calculator!"
  },
  {
    question: "How much subsidy will I get?",
    answer: "Under the government **PM Surya Ghar Muft Bijli Yojana**, direct subsidies are:\n- **1 kW System**: ₹30,000\n- **2 kW System**: ₹60,000\n- **3 kW to 10 kW System**: ₹78,000 (Maximum Slab limit)\n\nAs an empanelled partner under NREDCAP, Teja Solar directly coordinates state inspections and bank subsidies for you!"
  },
  {
    question: "On-grid or Hybrid?",
    answer: "**On-grid systems** are connected directly to the AP state grid via a net meter. They are highly affordable and ideal if you want to slash your bill and have stable power. \n\n**Hybrid systems** include battery backups. They are slightly costlier but insulate your home or farm fields completely from power cuts by providing silent emergency backup."
  },
  {
    question: "How many panels do I need?",
    answer: "A standard panel is roughly 540W to 590W. \n- A **2 kW system** requires **4 panels**.\n- A **3 kW system** requires **6 panels**.\n- A **5 kW system** requires **9-10 panels**.\n\nEach panel requires about 60-80 sq. ft. of shade-free shadowless roof or field space."
  },
  {
    question: "How much money can I save?",
    answer: "On average, a 3 kW solar system generates around **360-400 units monthly**, which translates to immediate savings of **₹3,000 - ₹4,000 per month** (approx. ₹45,000 annually). Over a panel's 25-year lifetime, this yields over **₹12,00,000** in net cumulative utility savings!"
  }
];

export default function AISolarAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Namaste! 🙏 I am your Teja Solar Advisor. How can I help you switch to clean energy and slash your electricity bills today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate Advisor Reply
    setTimeout(() => {
      setIsTyping(false);
      // Check if match in sample questions
      const match = SAMPLE_QA.find(qa => qa.question.toLowerCase().includes(textToSend.toLowerCase()) || textToSend.toLowerCase().includes(qa.question.toLowerCase()));
      
      let botReplyText = "";
      if (match) {
        botReplyText = match.answer;
      } else {
        botReplyText = "That's a great question! Teja Solar Solutions provides tailored solar engineering across Andhra Pradesh. A technical advisor can review your roof dimensions and dispatch a certified team for a 100% free site survey. Let's schedule a call or contact us directly on WhatsApp!";
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReplyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Floating Sparkly Chat Toggle Button */}
      <div className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[9998]">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="w-14 h-14 bg-gradient-to-br from-accent to-orange-500 hover:from-accent-hover hover:to-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative group"
          aria-label="Open AI Solar Advisor Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-spin-once" />
          ) : (
            <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          )}
          {/* Animated notification dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36FB04] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#36FB04] border-2 border-white dark:border-[#0a1426] flex items-center justify-center text-[8px] font-black text-black">1</span>
          </span>
          {/* Hover premium tooltip */}
          <span className="absolute right-16 bg-[#0a1426] text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-border-color/10">
            ⚡ AI Solar Advisor
          </span>
        </button>
      </div>

      {/* Advisor Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-40 right-6 w-[340px] sm:w-[380px] h-[500px] sm:h-[550px] bg-white/95 dark:bg-[#0a1426]/95 backdrop-blur-lg border border-border-color dark:border-dark-border/40 rounded-3xl shadow-2xl z-[9997] overflow-hidden flex flex-col font-sans"
          >
            {/* Modal Header */}
            <div className="p-4 bg-gradient-to-r from-accent/10 to-orange-500/10 border-b border-border-color dark:border-dark-border/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center text-white shadow-sm">
                  <Bot className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-text-main dark:text-white flex items-center gap-1.5">
                    AI Solar Advisor
                    <span className="inline-block w-2 h-2 rounded-full bg-[#36FB04] animate-pulse"></span>
                  </h4>
                  <span className="text-[10px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">
                    Powered by Teja Solar
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted dark:text-dark-text-muted hover:bg-gray-100 dark:hover:bg-dark-primary/30 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body messages area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-sm font-medium ${
                      msg.sender === 'user'
                        ? 'bg-accent text-text-main rounded-tr-none'
                        : 'bg-bg-secondary dark:bg-[#0a1426] border border-border-color dark:border-dark-border/30 text-text-main dark:text-white rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="block text-[9px] text-text-muted/65 dark:text-dark-text-muted/65 mt-1.5 text-right font-bold">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing State animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-bg-secondary dark:bg-[#0a1426] border border-border-color dark:border-dark-border/30 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    <span className="text-xs text-text-muted dark:text-dark-text-muted font-bold tracking-wide">Advisor is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Helper Chip selections */}
            <div className="p-3 bg-bg-secondary/45 dark:bg-[#0a1426]/30 border-t border-border-color dark:border-dark-border/20 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth">
              {SAMPLE_QA.map((qa, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(qa.question)}
                  className="px-3 py-1.5 bg-white dark:bg-[#0a1426] hover:border-accent border border-border-color dark:border-dark-border/40 text-text-main dark:text-white rounded-full text-[10px] sm:text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer hover:bg-accent-light dark:hover:bg-accent/15"
                >
                  {qa.question}
                </button>
              ))}
            </div>

            {/* Message Input controls */}
            <div className="p-3 bg-white dark:bg-[#0a1426] border-t border-border-color dark:border-dark-border/30 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about subsidy, panels, savings..."
                className="flex-grow px-4 py-2.5 bg-bg-secondary dark:bg-[#060c18] border border-border-color dark:border-dark-border text-text-main dark:text-white rounded-xl focus:outline-none focus:border-accent text-xs font-medium"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="w-10 h-10 shrink-0 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer shadow-sm hover:shadow"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

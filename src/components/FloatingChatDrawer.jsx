import { useEffect, useState, useCallback } from "react";
import { FiMessageSquare } from "react-icons/fi"; // Lightweight SVG icon

const FloatingChatDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadIframe, setLoadIframe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const [previewMessage, setPreviewMessage] = useState("");
  const [typingGreeting, setTypingGreeting] = useState(""); // AI typing simulation

  const greetingOptions = [
    "boost your leads?",
    "get more luxury listings?",
    "build an AI-powered realtor website?",
    "automate client follow-ups?",
  ];

  // ✅ Detect Mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Tooltip + Preview Bubble
  useEffect(() => {
    const hiTimer = setTimeout(() => {
      setShowHi(true);
      setPreviewMessage("💬 Hi there! Need help boosting your leads?");
    }, 3000);

    const hideTimer = setTimeout(() => {
      setPreviewMessage("");
    }, 10000);

    return () => {
      clearTimeout(hiTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // ✅ Exit Intent (Desktop only)
  useEffect(() => {
    if (!isMobile) {
      const handleExitIntent = (e) => {
        if (e.clientY < 0 && !isOpen) openChat();
      };
      document.addEventListener("mouseleave", handleExitIntent);
      return () => document.removeEventListener("mouseleave", handleExitIntent);
    }
  }, [isMobile, isOpen]);

  // ✅ Open Chat + AI Typing Simulation
  const openChat = useCallback(() => {
    setIsOpen(true);
    setShowHi(false);
    setPreviewMessage("");
    setTypingGreeting(""); // reset greeting
    setTimeout(() => setLoadIframe(true), 200);

    // Pick a random greeting variation
    const randomGreeting =
      greetingOptions[Math.floor(Math.random() * greetingOptions.length)];

    const fullMessage = `Hi 👋, I’m PropLux AI! Need help to ${randomGreeting}`;
    let idx = 0;
    const typeInterval = setInterval(() => {
      setTypingGreeting((prev) => prev + fullMessage[idx]);
      idx++;
      if (idx >= fullMessage.length) clearInterval(typeInterval);
    }, 40); // typing speed
  }, []);

  // ✅ Close Chat
  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-5 right-5 z-50 bg-emerald-500 hover:bg-emerald-600 p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
          title="Ask PropLux AI"
        >
          <FiMessageSquare className="w-6 h-6 text-white" />
        </button>
      )}

      {/* 👋 Tooltip */}
      {showHi && !isOpen && (
        <div
          onClick={openChat}
          className="fixed bottom-20 right-6 bg-white text-black text-xs md:text-sm px-4 py-2 rounded-xl shadow-md z-50 cursor-pointer animate-bounce"
        >
          👋 Need help?
        </div>
      )}

      {/* 💬 Preview Bubble */}
      {previewMessage && !isOpen && (
        <div
          onClick={openChat}
          className="fixed bottom-24 right-16 max-w-[220px] bg-slate-900 text-white text-xs md:text-sm px-4 py-3 rounded-xl shadow-xl z-50 cursor-pointer border border-white/10 animate-fade-in"
        >
          {previewMessage}
        </div>
      )}

      {/* Chat Drawer (Overlay + Drawer) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={closeChat} // Click overlay to close
        >
          <div
            className={`relative transform transition-all duration-300 ${
              isMobile
                ? "w-[95vw] h-[85vh] mt-auto mx-auto rounded-2xl"
                : "w-[92vw] max-w-md h-[520px] mb-24 mr-4 rounded-2xl"
            } bg-slate-950/95 border border-white/10 shadow-2xl`}
            onClick={(e) => e.stopPropagation()} // Prevent close on click inside
          >
            {/* Close Button */}
            <button
              onClick={closeChat}
              className="absolute top-3 right-4 text-white text-2xl hover:text-emerald-400"
            >
              ×
            </button>

            {/* AI Greeting + Chat Content */}
            <div className="flex flex-col h-full">
              {/* Typing Greeting (Shown above iframe briefly) */}
              {typingGreeting && !loadIframe && (
                <div className="p-4 text-sm text-emerald-400 font-mono border-b border-white/10">
                  <span className="opacity-80">PropLux AI is typing...</span>
                  <div className="mt-1">{typingGreeting}</div>
                </div>
              )}

              {/* Chat Content */}
              <div className="flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                {loadIframe ? (
                  <iframe
                    src="https://www.chatbase.co/chatbot-iframe/yueK6RDb9lRUIqmZR347U"
                    width="100%"
                    height="100%"
                    title="PropLux AI Assistant"
                    loading="lazy"
                    style={{ border: "none" }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                    Loading AI Assistant...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in { animation: fade-in 0.4s ease-in-out; }
      `}</style>
    </>
  );
};

export default FloatingChatDrawer;

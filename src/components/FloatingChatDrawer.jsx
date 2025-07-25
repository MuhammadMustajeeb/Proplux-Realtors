import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Chat iframe wrapper
const ChatContent = () => (
  <div className="rounded-2xl h-[420px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 shadow-inner overflow-hidden">
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/yueK6RDb9lRUIqmZR347U"
      width="100%"
      height="100%"
      style={{ border: "none" }}
      title="PropLux AI Chatbot"
      loading="lazy"
    ></iframe>
  </div>
);

const FloatingChatDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpenedOnce) setShowHi(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasOpenedOnce]);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (!isMobile && e.clientY < 0 && !hasOpenedOnce) {
        setIsOpen(true);
        setHasOpenedOnce(true);
        setShowHi(false);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasOpenedOnce, isMobile]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasOpenedOnce(true);
    setShowHi(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="fixed bottom-5 right-5 z-50 bg-emerald-500 hover:bg-emerald-600 p-3 rounded-full shadow-2xl transition-all duration-200"
          title="Ask PropLux AI"
        >
          <img src="/ai-avatar.webp" alt="Chat AI" className="w-8 h-8" />
        </button>
      )}

      {/* Tooltip Hi 👋 */}
      {showHi && !isOpen && (
        <div
          onClick={handleOpenChat}
          className="fixed bottom-20 right-6 bg-white text-black text-sm px-4 py-2 rounded-xl shadow-xl z-50 cursor-pointer animate-bounce hover:scale-105 transition"
        >
          👋 Need help?
        </div>
      )}

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-24 right-4 w-[92vw] max-w-md z-50 bg-slate-950/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-white/10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-white text-2xl hover:text-emerald-400 transition"
              title="Close"
            >
              ×
            </button>
            <Suspense fallback={<div className="text-center text-sm py-10 text-slate-400">Loading AI Assistant...</div>}>
              <ChatContent />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatDrawer;

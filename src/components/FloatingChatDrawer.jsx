import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots } from "react-icons/fa";

const ChatWidgetDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  // Auto open on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY / scrollHeight > 0.5 && !hasOpenedOnce) {
        setIsOpen(true);
        setHasOpenedOnce(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasOpenedOnce]);

  // Auto open on exit intent
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 0 && !hasOpenedOnce) {
        setIsOpen(true);
        setHasOpenedOnce(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasOpenedOnce]);

  return (
    <>
      {/* Floating Chat Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 z-50"
      >
        <FaCommentDots size={24} />
      </button>

      {/* Animated Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 right-6 w-[360px] max-w-[95%] h-[550px] bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-4 px-4 pt-4 pb-2 bg-slate-800 border-b border-slate-700">
              <img
                 // Place this in your /public folder
                        alt="AI Assistant"
                        className="w-10 h-10 rounded-full"
                        src="/ai-avatar.webp"
                        loading="lazy"
                        />
                        <div>
                        <p className="text-white font-semibold text-sm">PropLux AI</p>
                        <p className="text-slate-400 text-xs">Your 24/7 Real Estate Assistant</p>
                        </div>
                      </div>

                      {/* Welcome Message */}
            <div className="px-4 pb-2 pt-1 text-white text-sm bg-slate-800">
              👋 How can I help you today?
            </div>

            {/* Chat iframe */}
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/yueK6RDb9lRUIqmZR347U"
              title="AI Assistant"
              width="100%"
              height="100%"
              style={{ border: "none", flexGrow: 1 }}
              className="flex-grow"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidgetDrawer;

// ready to move on to Performance Optimization, SEO, or a final launch checklist?
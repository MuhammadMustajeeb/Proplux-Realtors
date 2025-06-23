const ChatWidget = () => (
  <section className="bg-slate-950 py-16 px-6 text-white text-center">
    <h2 className="text-3xl font-bold mb-6">Ask Our AI Assistant</h2>
    <p className="text-slate-400 mb-10">Got questions? The PropLux AI agent is here to help you 24/7.</p>
    <div className="max-w-3xl mx-auto h-[500px] rounded-lg overflow-hidden border border-slate-700 shadow-xl">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/yueK6RDb9lRUIqmZR347U"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="PropLux AI Chatbot"
      ></iframe>
    </div>
  </section>
);

export default ChatWidget;
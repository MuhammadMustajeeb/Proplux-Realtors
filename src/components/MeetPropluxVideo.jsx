import videoThumb from '../assets/video-thumb.webp';


const MeetPropLuxVideo = () => (
    <section className="py-16 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
            🎥 Meet PropLux in 60 Seconds
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Discover how we help luxury realtors get 5–10 more leads per week using stunning AI-powered websites.
        </p>
        <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg relative group">
            <img
                src={videoThumb}
                alt="PropLux Video Thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition">
                <a
                    href="https://app.heygen.com/share/697a3327b8b14b1893dfb5b56ee79cc4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transition"
                >
                    ▶️ Watch Video
                </a>
            </div>
        </div>
    </section>
);

export default MeetPropLuxVideo;

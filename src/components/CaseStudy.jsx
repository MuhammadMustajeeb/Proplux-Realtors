import beforeAfterImg from '../assets/before-after.jpg';

const CaseStudy = () => (
    <section className="bg-white py-20 px-6 text-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-8">📈 Real Results</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">See how we transformed a Miami Realtor’s website from outdated to fully booked with our AI + Design system.</p>
        <img src={beforeAfterImg} alt="Before and After Real Estate Website" className="mx-auto rounded-xl shadow-xl" />
    </section>
);
export default CaseStudy;
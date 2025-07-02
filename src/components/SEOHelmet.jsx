import { Helmet } from "react-helmet";

const SEOHelmet = ({
  title = "PropLux – AI-Powered Realtor Websites",
  description = "Launch your AI-powered real estate website in 7 days. 3D design, smart chatbot, CRM & more. Perfect for luxury agents.",
  image = "https://proplux-realtors.vercel.app/og-image.jpg", // Upload to your public folder or use a real image URL
  url = "https://proplux-realtors.vercel.app"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#10b981" />
    </Helmet>
  );
};

export default SEOHelmet;

import { Helmet } from "react-helmet";

export default function MetaTagManager( {title, description} ) {
    return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        <meta property="og:title" content="About Us - Eco Safari" />
        <meta property="og:description" content="Learn more about our eco-friendly safari experience." />
        <meta property="og:image" content="https://example.com/images/about-preview.jpg" />
        <meta property="og:url" content="https://example.com/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Eco Safari" />
        <meta name="twitter:description" content="Learn more about our eco-friendly safari experience." />
        <meta name="twitter:image" content="https://example.com/images/about-preview.jpg" />
      </Helmet>
    </>
  );
}
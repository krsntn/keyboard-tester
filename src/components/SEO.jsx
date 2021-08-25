import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import siteImg from '../../static/images/site_img.png';

const SEO = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const displayDescription = description || site.siteMetadata.description;
  const displayTitle = title || site.siteMetadata?.title;

  return (
    <Helmet>
      {/* General tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={displayDescription} />
      <meta name="image" content={siteImg} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={site.siteMetadata?.siteUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDescription} />
      <meta property="og:image" content={siteImg} />
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDescription} />
      <meta name="twitter:image" content={siteImg} />
    </Helmet>
  );
};

export default SEO;

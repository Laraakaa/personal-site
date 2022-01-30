import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import { Helmet } from 'react-helmet';

import Header from './Header';

import '../style/index.scss';

setTimeout(() => {
  window.twemoji.parse(document.body, 
    { folder: 'svg', ext: '.svg' } // This is to specify to Twemoji to use SVGs and not PNGs
  );
}, 200);

export default ({ showHeader, pageTitle, children, showBackgroundImage }) => {
  const data = useStaticQuery(
    graphql`
      query {
        img1: file(relativePath: { eq: "kimi-no-na-wa-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        img2: file(relativePath: { eq: "kimi-no-na-wa-2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        img3: file(relativePath: { eq: "kimi-no-na-wa-3.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img4: file(relativePath: { eq: "kimi-no-na-wa-4.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img5: file(relativePath: { eq: "kimi-no-na-wa-5.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img6: file(relativePath: { eq: "kimi-no-na-wa-6.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img7: file(relativePath: { eq: "kimi-no-na-wa-7.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageList = Object.values(data);
  const randomImageData = imageList[Math.floor(Math.random() * imageList.length)].childImageSharp.fluid;

  return (
    <div>
      <Helmet>
        <title>Lara Bärtschi - Personal Site - {pageTitle}</title>
        <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></script>
      </Helmet>
      <div className="container">
        {showHeader && <Header />}
        <div className="content">
          <main>
            {children}
          </main>
        </div>
        {showBackgroundImage && <div className="background">
          <div className="background__dimmer" />
          <BackgroundImage
            className="background__img"
            fluid={randomImageData}
          />
        </div>}
      </div>
    </div>
  );
}
import * as React from "react"
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import BackgroundImage from 'gatsby-background-image'

import '../style/index.scss';

setTimeout(() => {
  window.twemoji.parse(document.body, 
    { folder: 'svg', ext: '.svg' } // This is to specify to Twemoji to use SVGs and not PNGs
  );
}, 200);

const IndexPage = ({data}) => {
  const imageList = Object.values(data);
  const randomImageData = imageList[Math.floor(Math.random() * imageList.length)].childImageSharp.fluid;

  return (
    <div>
      <Helmet>
        <title>Lara Bärtschi - Personal Site</title>
        <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></script>
      </Helmet>
      <div className="container">
        <header className="header">
          <span className="header__inner">
            <div className="logo">
              <span>{"> lara@lara.ninja:/#"}</span>
              <span className="header__cursor" />
            </div>
          </span>
        </header>
        <div className="content">
          <main>
            <div>
              <h1>Lara Bärtschi</h1>
              <p>Production <a href="https://twitter.com/ESLSwiss" target="_blank" rel="noopener">@ESLSwiss</a>, Member <a href="https://twitter.com/RCVolus" target="_blank" rel="noopener">@RCVolus</a>, Conversational AI <a href="https://swisscom.ch" target="_blank" rel="noopener">@Swisscom</a>, League of Legends Observer</p>
              <p> 🏳️‍⚧️ 🏳️‍🌈 she/her</p>
              <div className="socials">
                <a href="https://github.com/Laraakaa" target="_blank" rel="noopener" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> &nbsp;&nbsp; <a href="https://twitter.com/Laraakaa" target="_blank" rel="noopener" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
              </div>
            </div>
          </main>
        </div>
        <div className="background">
          <div className="background__dimmer" />
          <BackgroundImage
            className="background__img"
            fluid={randomImageData}
          />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
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

export default IndexPage

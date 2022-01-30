import React from 'react'

import PageLayout from '../components/PageLayout';

const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home" showHeader showBackgroundImage>
      <div>
        <h1>Lara Bärtschi</h1>
        <p>Production <a href="https://twitter.com/ESLSwiss" target="_blank" rel="noreferrer">@ESLSwiss</a>, Member <a href="https://twitter.com/RCVolus" target="_blank" rel="noreferrer">@RCVolus</a>, Conversational AI <a href="https://swisscom.ch" target="_blank" rel="noreferrer">@Swisscom</a>, League of Legends Observer</p>
        <p> 🏳️‍⚧️ 🏳️‍🌈 she/her</p>
        <div className="socials">
          <a aria-label="Github" href="https://github.com/Laraakaa" target="_blank" rel="noreferrer" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>&nbsp;&nbsp;
          <a aria-label="Twitter" href="https://twitter.com/Laraakaa" target="_blank" rel="noreferrer" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>&nbsp;&nbsp;
          <a aria-label="Email" href='mailt&#111;&#58;inf%6&#70;&#64;&#108;a&#114;&#97;&#46;ni&#110;%6Aa' target="_blank" rel="noreferrer" title="Email"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg></a>
        </div>
      </div>
    </PageLayout>
  )
}

export default IndexPage

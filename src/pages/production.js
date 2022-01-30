import React from 'react'

import PageLayout from '../components/PageLayout';

const ProductionPage = () => {
  return (
    <PageLayout pageTitle="Home" showHeader showBackgroundImage>
      <div>
        <h1>Broadcast Production</h1>
        <p>Producing live TV broadcasts with passion - mainly experienced in esports shows</p>
        <h2>Experience</h2>
        <ul>
          <li>ESL Swiss National Championship - Season 1
            <ul>
              <li>Studio Network planning & setup</li>
              <li>Studio Hardware planning & setup</li>
            </ul>
          </li>
          <li>Swisscom Hero League powered by ESL - Season 6 finals
            <ul>
              <li>vMix preset setup for game production</li>
              <li>League of Legends: pick-ban trough own tool, LED stage player banner view</li>
              <li>Player cameras, changing based on what player is shown</li>
            </ul>
          </li>
          <li>Other experience
            <ul>
              <li>Observing League of Legends games since 2019 (LEC Shadowing, RedBull Itemania, RedBull SoloQ, RedBull unEversE, Postfinance Gaming Cup, Swisscom Hero League)</li>
              <li>Developing a custom pick-ban tool for League of Legends, that can be styled using web technologies: <a href="https://github.com/RCVolus/lol-pick-ban-ui" target="_blank">github.com/RCVolus/lol-pick-ban-ui</a></li>
              <li>Developing a custom multi-purpose production toolkit for League of Legends and VALORANT: <a href="https://github.com/RCVolus/league-prod-toolkit" target="_blank">github.com/RCVolus/league-prod-toolkit</a></li>
              <li>Developing a custom SRT streaming distribution server: <a href="https://github.com/RCVolus/srt-advanced-server" target="_blank">github.com/RCVolus/srt-advanced-server</a></li>
              <li>Web Graphics development, custom scripts (vMix, etc.) and applications</li>
            </ul>
          </li>
        </ul>
        <h2>Offered Services</h2>
        <ul>
          <li>Observing League of Legends (all of Switzerland, Europe when covering travel cost, outside Europe after discussion)</li>
          <li>Replay Ops and/or ingame director (experience in League of Legends, CS:GO, and VALORANT using vMix Replay)</li>
          <li>Video Switching (experienced with vMix, OBS, Black Magic ATEM), including preset setup</li>
          <li>Further production assistance</li>
          <li>Tool and automation development</li>
        </ul>
        <h2>Interested in working together?</h2>
        Contact me! <a href='mailt&#111;&#58;inf%6&#70;&#64;&#108;a&#114;&#97;&#46;ni&#110;%6Aa'>i&#110;fo&#64;lara&#46;nin&#106;a</a>
      </div>
    </PageLayout>
  )
}

export default ProductionPage
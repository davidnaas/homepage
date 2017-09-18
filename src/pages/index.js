import React from 'react'

const IndexPage = () => (
  <div className="va-wrapper">
    <div className="content-wrapper">
      <img className="portrait" src="http://davidnaas.se/portrait.jpg" />
      <div className="text-wrapper">
        <p className="greeting">Hi there, my name is David.</p>
        <p>I'm a web developer and a musician from Sweden living in Berlin.</p>
        <p>My passion lies within the intersection of music and technology, where the line between art and science starts to blur.</p>
        <p>I'm currently working at <a href="https://idagio.com" target="_blank">IDAGIO</a> where we are
        building the best streaming service for classical music lovers.</p>
        <div className="links-wrapper">
          <a className="link" href="mailto:mail@davidnaas.se">contact</a>
          <span className="separator-1"> / </span>
          <a className="link" href="https://gameoflife.bandcamp.com/track/john-stoic-iii" target="_blank">music</a>
          <span className="separator-2"> / </span>
          <a className="link" href="https://github.com/davidnaas" target="_blank">github</a>
          <span className="separator-3"> / </span>
          <a className="link" href="https://twitter.com/david_naas" target="_blank">twitter</a>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

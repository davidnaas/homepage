import React from 'react'

const boldStyle = { fontWeight: 'bold' };
const blockStyle = { display: 'block' };

const renderImageInfo = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }} className="image-info-wrapper">
    <img style={{ height: '250px'} } src="http://davidnaas.se/portrait-cv.jpg"/>
    <div style={{ marginLeft: '16px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="contact-details">
      <h3 style={{ marginTop: 0 }}>David Nääs</h3>
      <p>Ueckermünder Straße 9 <br/> 10439 Berlin</p>
      <p style={{ marginBottom: 0 }}>
        <span style={blockStyle}>
          <span style={boldStyle}>Tel: </span>01575-9611789
        </span>
        <span style={blockStyle}>
          <span style={boldStyle}>Email: </span>mail@davidnaas.se
        </span>
        <span style={blockStyle}>
          <span style={boldStyle}>Website: </span>www.davidnaas.com
        </span>
        <span style={blockStyle}>
          <span style={boldStyle}>Twitter: </span>@david_naas
        </span>
        <span style={blockStyle}>
          <span style={boldStyle}>Github: </span>@davidnaas
        </span>
      </p>
    </div>
  </div>
);


const paragraphStyle = { textAlign: 'left', margin: 'auto', maxWidth: '800px' };

const renderSummary = () => (
  <div style={paragraphStyle}>
    <h2>Summary</h2>
    <p>
      I’m a developer and a musician from Sweden living in Berlin. I’m currently working at IDAGIO, where we are trying to build the best streaming platform for classical music. I have three years of experience working in fast moving startups with a modern tech stack. While my expertise lies in front-end, I also have experience working on back-end services.    </p>
    <p>
      I also have formal training in practical, theoretical and technological parts of music. This combination has given me a good understanding of how music translates to theoretical concepts such as acoustics, electronics, sampling etc.    </p>
  </div>
);

 const experiences = [
  {
    companyName: 'IDAGIO',
    timeFrame: 'January 2016 - now',
    text: 'IDAGIO is striving to be the best music streaming service for classical music lovers. I’m currently developing the IDAGIO web app, and soon building the IDAGIO desktop app together with a fellow front end developer. We work in small self organised teams with a cross functional approach, cooperating and helping over the team boundaries.'
  },
  {
    companyName: 'ZenMate',
    timeFrame: 'June 2015 - January 2016',
    text: 'ZenMate is an internet security company in Berlin that offers a VPN in different forms. I was part of  the team developing their browser plugins and internal applications such as a b2b system and a crm tool. Some of the engineers working there were the best developers I’ve ever met and I learned a ton from them.'
  },
  {
    companyName: 'Me Analytics AB',
    timeFrame: 'November 2014 - May 2015',
    text: 'I worked  on a project called LoopMe which is aimed towards the Swedish educational system with the goal of bringing schools up to date with the kids attending them by connecting their education with social media. This was my first job in a startup and I learned some valuable lessons, both technical and non-technical.'
  }
];

const renderExperience = () => (
  <div style={paragraphStyle}>
    <h2>Experience</h2>
    {(() => experiences.map(({ companyName, timeFrame, text }, i) => (
      <div key={i}>
        <div>
          <span style={boldStyle}>&#9650; {companyName}</span><span style={{ marginLeft: '16px', fontStyle: 'italic' }}>{timeFrame}</span>
        </div>
        <p style={{ marginTop: '8px' }}>{text}</p>
      </div>
    )))()}
  </div>
);

const educations = [
  {
    school: 'Chalmers University of Technology',
    timeFrame: '2012 - 2015',
    type: 'Bachelor in Software Engineering'
  },
  {
    school: 'Helsjöns folkhögskola',
    timeFrame: '2010 - 2011',
    type: 'Musiklinjen (jazz)'
  },
  {
    school: 'University of Gothenburg',
    timeFrame: '2009 - 2010',
    type: 'Bachelor in History (not finished)'
  }
];

const renderEducation = () => (
  <div style={paragraphStyle}>
    <h2>Education</h2>
    {(() => educations.map(({ school, timeFrame, type }, i) => (
      <div key={i}>
        <div>
          <span style={boldStyle}>&#9632; {school}</span><span style={{ marginLeft: '16px', fontStyle: 'italic' }}>{timeFrame}</span>
        </div>
        <p style={{ marginTop: '2px' }}>{type}</p>
      </div>
    )))()}
  </div>
);

const languages = [
  {
    language: 'Swedish',
    level: '(native tongue)'
  },
  {
    language: 'English',
    level: '(fluent)'
  },
  {
    language: 'German',
    level: '(B1)'
  }
];

const renderLanguages = () => (
  <div style={paragraphStyle}>
    <h2>Languages</h2>
    {(() => languages.map(({ language, level, }, i) => (
      <div key={i}>
        <div>
          <span style={boldStyle}>&#9679; {language}</span><span style={{ marginLeft: '16px', fontStyle: 'italic' }}>{level}</span>
        </div>
      </div>
    )))()}
  </div>
);

const skills = [
  {
    topic: 'JavaScript Flavors',
    list: ['ES6', 'CoffeeScript']
  },
  {
    topic: 'Front-end Frameworks',
    list: ['React']
  },
  {
    topic: 'State Management',
    list: ['Redux', 'Bacon.js']
  },
  {
    topic: 'Testing Frameworks',
    list: ['Mocha', 'Jest']
  },
  {
    topic: 'CSS Tools',
    list: ['Sass/Scss', 'BEM', 'PostCSS', 'CSS Modules']
  },
  {
    topic: 'Build Tools',
    list: ['Webpack', 'Gulp', 'Browserify']
  },
  {
    topic: 'JS set free',
    list: ['Web Audio', 'Node.js', 'Electron']
  },
  {
    topic: 'Miscellaneous',
    list: ['Git', 'Music theory', 'Audio engineering']
  },
  {
    topic: 'TODO',
    list: ['ClojureScript', 'ReasonML', 'GraphQL']
  }
];

const renderSkillList = (list) => list.map(skill => (
  <div>{skill}</div>
));

const renderSkills = () => (
  <div style={paragraphStyle}>
    <h2>Skills</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {(() => skills.map(({ topic, list }, i) => (
        <div key={i} style={{ marginRight: '16px', marginBottom: '16px', minWidth: '180px' }}>
          <div>
            <div style={boldStyle}>{topic}</div>
            {renderSkillList(list)}
          </div>
        </div>
      )))()}
    </div>
  </div>
);


const CVPage = () => (
  <div style={{ textAlign: 'center', margin: '16px' }} className="cv-wrapper">
    <h1 style={{ textTransform: 'uppercase' }}>Curriculum Vitae</h1>
    { renderImageInfo() }
    { renderSummary() }
    { renderSkills() }
    { renderExperience() }
    { renderEducation() }
    { renderLanguages() }
  </div>
)

export default CVPage

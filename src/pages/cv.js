import React from 'react'
import Layout from '../components/layout'
const boldStyle = { fontWeight: 'bold' };
const blockStyle = { display: 'block' };

const renderImageInfo = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }} className="image-info-wrapper">
    <img style={{ height: '250px', marginRight: '16px'} } src="/portrait.jpg"/>
    <div style={{ marginLeft: '16px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="contact-details">
      <h3 style={{ marginTop: 0 }}>David Nääs</h3>
      <p>Ueckermünder Straße 9 <br/> 10439 Berlin</p>
      <p style={{ marginBottom: 0 }}>
        <span style={blockStyle}>
          <span style={boldStyle}>Tel: </span>01575-9611789
        </span>
        <span style={blockStyle}>
          <span style={boldStyle}>Email: </span>hello@davidnaas.com
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
      I’m a developer and a musician from Sweden living in Berlin. Since early 2016 I've been working at IDAGIO, a streaming service for classical music, where I'm currently leading its front end team. This role involves both managerial tasks and and purely technical ones, luckily I find both stimulating! During my years here I've had the privilege of working with a wide variety of projects and technologies, spanning everything from partnerships with world renowned musicians to integrating our product with external hardware such as sonos.
    </p>
    <p>
      Even if I like to board the front end hype-train every now and then, I do believe that work environment is more important to the success of an engineering team than using bleeding edge technology. As a team lead, I see my most important role as being someone who enables team members to do their best work. This can be such things as improving communication structures, acting as a first point of contact with other departments, making sure they are comfortable with their current situation etc. I believe that this is the foundation of a great product.
    </p>
  </div>
);

 const experiences = [
  {
    companyName: 'IDAGIO',
    timeFrame: 'October 2019 - now',
    position: 'Team lead',
    text: 'After almost four years I was asked to take over and lead the front end team. It was not something I had been interested in before but I figured it would be a new and different kind of challenge to what I was used to. So far it has taught me a lot, most notably that the hardest problems usually aren\'t the technical ones.'
  },
  {
    companyName: 'IDAGIO',
    timeFrame: 'January 2016 - September 2019',
    position: 'Front end developer',
    text: 'I joined IDAGIO, a company striving to be the best music streaming service for classical music, because I wanted to work on a product I believed in. As one of the earliest employees in the engineering team, I\'ve been blessed with seeing (and partaking in) the immense progress we\'ve made since. Some personal engineering highlights include: lossless audio, audio decryption with service workers, porting our app to electron, sonos websocket integration, automating our localization pipeline and adding static typing to our code base.'
  },
  {
    companyName: 'ZenMate',
    timeFrame: 'June 2015 - January 2016',
    position: 'Front end developer (Junior)',
    text: 'ZenMate is an internet security company in Berlin that offers a VPN in different forms. I was part of the team developing their browser based VPN and some internal applications such as a b2b system and a crm tool. The engineers working there at the time were some of the brightest people I\'ve ever met and also eager to mentor. This is where I first started to get into reactive and functional programming by using react and a stream based library'
  },
  {
    companyName: 'Me Analytics AB',
    timeFrame: 'November 2014 - May 2015',
    position: 'Front end developer (Junior)',
    text: 'I worked  on a project called LoopMe which was aimed towards the Swedish educational system with the goal of bringing schools up to date with the students attending them by connecting their education with social media. It was built using AngularJS and node. This was my first job as a developer and was a good stepping stone.'
  }
];

const renderExperience = () => (
  <div style={paragraphStyle}>
    <h2>Experience</h2>
    {(() => experiences.map(({ companyName, timeFrame, position, text }, i) => (
      <div key={i} style={{ marginBottom: '32px' }}>
        <div>
          <span style={boldStyle}>&#9650; {companyName}</span><span style={{ marginLeft: '8px', fontSize: 14 }}>{position}</span>
        <br/><span style={{fontStyle: 'italic' }}>{timeFrame}</span>
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
    type: 'Historical Studies'
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
    level: '(native language)'
  },
  {
    language: 'English',
    level: '(fluent)'
  },
  {
    language: 'German',
    level: '(intermediate)'
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
    topic: 'Concepts & Paradigms',
    list: [
      'Declarative front ends',
      'Predictable state management',
      'Functional programming',
      'Automation & CI',
      'Testing',
      'Static typing',
    ]
  },
  {
    topic: 'Technologies',
    list: [
      'React',
      'Redux',
      'Node.js',
      'Electron',
      'ReasonML',
      'Flow Type',
      'CSS Modules',
      'Styled Components',
      'Web Audio',
      'Service Workers',
      'Webpack',
      'Git'
    ]
  },
  {
    topic: 'Methodologies',
    list: [
      'Shape Up (basecamp)',
      'Async communication',
      'Remote work',
      'Mentoring',
    ]
  },
  {
    topic: 'TODO',
    list: [
      'GraphQL',
      'ClojureScript',
      'Rust'
    ]
  },
  {
    topic: 'Random',
    list: [
      'Electric Guitar',
      'Origami',
      'Modular Synthesis',
      'Model building',
    ]
  }
];

const renderSkillList = (list) => list.map(skill => (
  <div>{skill}</div>
));

const renderSkills = () => (
  <div style={paragraphStyle}>
    <h2>Skills</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
  <Layout>
    <div style={{ textAlign: 'center', margin: '16px' }} className="cv-wrapper">
      <h1 style={{ textTransform: 'uppercase' }}>Curriculum Vitae</h1>
      { renderImageInfo() }
      { renderSummary() }
      { renderSkills() }
      { renderExperience() }
      { renderEducation() }
      { renderLanguages() }
    </div>
  </Layout>
)

export default CVPage

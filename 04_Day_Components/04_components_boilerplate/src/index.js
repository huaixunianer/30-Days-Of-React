// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import useImg from './img/img.jpg'
import cssLogo from './img/css_logo.png'
import htmlLogo from './img/html_logo.png'
import jsLogo from './img/js_logo.png'
import reactLogo from './img/react_logo.png'

const SkillLogo = () =>{
  const logoList = [cssLogo,htmlLogo,jsLogo,reactLogo]
  const logoImg = logoList.map((url)=><img key={url} src={url}/>)
  return logoImg
}
const Btncomponent = ()=>{
  return (
    <div className='level3-wrapper'>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to recelve news and updates</p>
      <div className='input-wrapper'>
      <input placeholder='First name'></input>
      <input placeholder='Last name'></input>
      <input placeholder='Email name'></input>
      </div>
      <button>Subscribe</button>
    </div>
  )
}
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  console.log(color);
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '100%',
    backgroundColor: bgColor
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => {
  const authorData = {
    img:useImg,
    name:'槐序廿二',
    level:'Promary development,China',
    skills:['HTML','CSS','JS','VUE','REACT'],
    time:'Jan 04, 2023'
  }
  const skill = authorData.skills.map((item)=><div key={item}>{item}</div>)
  return (
    <div className='author-wrapper'>
        <div className='img-wrapper'><img src={authorData.img}/></div>
        <h5>{authorData.name}</h5>
        <p>{authorData.level}</p>
        <h5>SKILLS</h5>
        <div className='slill-wrapper'>{skill}</div>
        <p>{authorData.time}</p>
    </div>
  )
}

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <div className='img-wrapper'><SkillLogo/></div>
      <Btncomponent/>
      <div>
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
      <UserCard />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)

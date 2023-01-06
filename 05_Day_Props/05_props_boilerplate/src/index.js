import React from 'react'
import ReactDOM from 'react-dom'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'
import useImg from './images/img.jpg'

// 定义header组件
const Header =({
  data:{
    welcome,title,subtitle,
    author:{firstName,lastName},
    date
  }
})=>{
  return(
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{date}</small>
      </div>
    </header>
  )
}
// 定义techList组件
const TechList = ({techs}) =>{
  const techList = techs.map((tech)=><li key={tech}>{tech}</li>)
  return techList
}
// 定义imgList组件
const ImgList = ({imgs})=>{
  const imgList = imgs.map((src)=><img key={src} src={src}/>)
  return <div className='img-wrapper'>{imgList}</div>
}
// 定义subscribe组件
const SubComponent = ()=>{
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
// 定义随机颜色组件
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '5px auto',
    borderRadius: '20px',
    width: '100%',
    backgroundColor: bgColor
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}
// 定义user组件
const Skill = ({skills})=>{
  const skill = skills.map((item)=><div key={item}>{item}</div>)
  return <div className='slill-wrapper'>{skill}</div>
}
// 定义author组件
const UserCard = ({data:{img,name,level,skills,time}})=>(
  <div className='author-wrapper'>
    <div className='img-wrapper'><img src={img}/></div>
    <h5>{name}</h5>
    <p>{level}</p>
    <h5>SKILLS</h5>
    <Skill skills={skills}/>
    <p>{time}</p>
  </div>
)
// 定义main组件
const Main =({techs,imgs,authorData})=>(
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs}/>
        <ImgList imgs={imgs}/>
        <SubComponent/>
        <HexaColor/>
        <HexaColor/>
        <UserCard data={authorData}/>
      </ul>
    </div>
  </main>
)
// 定义footer组件
const Footer =({copyRight})=>(
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)
// 定义button组件
const Button = (props)=> <button onClick={props.onClick}>{props.text}</button>
const App = () => {
  const headerData = {
    welcome:'Welcome to 30 days of react',
    title:'Getting started react',
    subtitle:'JavaScript library',
    author:{
      firstName:'槐序',
      lastName:'廿二'
    },
    date: 'Jan 06 2023',
  }
  const techs = ['HTML','CSS','JavaScript']
  const imgs = [cssLogo,htmlLogo,jsLogo,reactLogo]
  const authorData = {
    img:useImg,
    name:'槐序廿二',
    level:'Promary development,China',
    skills:['HTML','CSS','JS','VUE','REACT'],
    time:'Jan 06, 2023'
  }
  const date = new Date()
  const greetPelple = () =>{
    console.log('Welcome to 30 days of react challenge, 2023');
  }
  return(
    <div className='app'>
      <Header data={headerData}/>
      <Main techs={techs} imgs={imgs} authorData={authorData}/>
      <Button text='greet people' onClick={greetPelple}/>
      <Button text='show time' onClick={()=>console.log(new Date())}/>
      <Footer copyRight={date}/>
    </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

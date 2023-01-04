import React from 'react'
import ReactDOM from 'react-dom'
import cssImg from './img/css_logo.png'
import htmlImg from './img/html_logo.png'
import reactImg from './img/react_logo.png'
import useImg from './img/img.jpg'
// jsx header data
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: '槐序',
  lastName: '廿二',
}
const date = 'Jan 4, 2023'

// jsx header
const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{author.firstName} {author.lastName}</p>
            <small>{date}</small>
        </div>
    </header>
)
// jsx main data
const techs = ['HTML','CSS','JavaScript']
const techsFormatted = techs.map((tech)=><li key={tech}>{tech}</li>)
// jsx main
const infoData ={
    name:'槐序廿二',
    age:27,
    country:'china',
    title:'web engineer',
    gender:'女',
    email:'**********@emial.com',
    phone:'100-0000-0000',
}
const info =(
    <div className='info-style'>
        <h2>{infoData.name}</h2>    
        <table>
            <thead>
                <tr>
                    <th>age</th>    
                    <th>country</th>  
                    <th>title</th>    
                    <th>gender</th>   
                    <th>email</th>   
                    <th>phone</th>   
                </tr>    
            </thead>
            <tbody>
                <tr>
                    <td>{infoData.age}</td>
                    <td>{infoData.country}</td>
                    <td>{infoData.title}</td>
                    <td>{infoData.gender}</td>
                    <td>{infoData.email}</td>
                    <td>{infoData.phone}</td>
                </tr>
            </tbody>
        </table>
    </div>
)
// jsx img level2
const imgList = [htmlImg,cssImg,reactImg]
const img = imgList.map((url)=><img key={url} src={url}/>)
// jsx level3
const level3 =(
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
const authorData ={
    img:useImg,
    name:'槐序廿二',
    level:'Promary development,China',
    skills:['HTML','CSS','JS','VUE','REACT'],
    time:'Jan 04, 2023'
}
const skill = authorData.skills.map((item)=><div key={item}>{item}</div>)
const authorInfo =(
    <div className='author-wrapper'>
        <div className='img-wrapper'><img src={authorData.img}/></div>
        <h5>{authorData.name}</h5>
        <p>{authorData.level}</p>
        <h5>SKILLS</h5>
        <div className='slill-wrapper'>{skill}</div>
        <p>{authorData.time}</p>
    </div>
)
//jsx main
const main = (
    <main>
        <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>{techsFormatted}</ul>
            {info}
            <div className='img-wrapper'>{img}</div>
            {level3}
            {authorInfo}
      </div>
    </main>
)

// jsx footer
const footer = (
    <footer>
        <div className='footer-wrapper'><p>Copyright 2023</p></div>
    </footer>
)
// jsx app
const app = (
    <div className='app'>
      {header}
      {main}
      {footer}
    </div>
)
const rootEle = document.getElementById('root') 

ReactDOM.render(app,rootEle)
import React from 'react'
import ReactDOM from 'react-dom'
// style
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}
// Header
class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}
// TechList
class TechList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {techs} = this.props
    const techsFormetted = techs.map((tech)=> <li key={tech}>{tech}</li>)
    return techsFormetted
  }
}
// Button
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)
// Main
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <TechList techs={this.props.techs}/>
          <Button 
            text='Greet People'
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text='Show Time'
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    )
  }
}
class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer>
        <div className='footer-wrapper'>
          <p>CopyRight {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
// App
class App extends React.Component{
  greetPeople = ()=>{
    console.log('Welcome to 30 Days Of React Challenge, 2023');
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  handleTime = () => {
    console.log(this.showDate(new Date()))
  }
  render(){
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: '槐序',
        lastName: '廿二',
      },
      date: 'Jan 10, 2023',
    }
    const techs = ['HTML','CSS','JavaScript']
    
  return(
    <div className='app'>
      <Header data={data}/>
      <Main
        techs={techs}
        greetPeople={this.greetPeople}
        handleTime={this.handleTime}
      />
      <Footer date={new Date()}/>
    </div>
  )
  }
}
const rootEle = document.getElementById('root')
ReactDOM.render(<App/>,rootEle)
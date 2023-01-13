// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
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

const Message = ({ message }) => (
  <div><h1>{message}</h1></div>
)
const Login = () => (
  <div><h3>Please Login</h3></div>
)
const Welcome = () => (
  <div><h1>Welcome to 30 Days Of React</h1></div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// TechList Component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
class Main extends React.Component {
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
      date,loginText
    } = this.props

    const status = loggedIn ? <Welcome /> : <Login />
    const month = date.getMonth() + 1
    let season =''
    let time = ''
    switch(month){
      case 1:
      case 2:
      case 3:
        season ='春天'
      break;
      case 4:
      case 5:
      case 6:
        season ='夏天'
      break;
      case 7:
      case 8:
      case 9:
        season ='秋天'
      break;
      case 10:
      case 11:
      case 12:
        season ='冬天'
      break;
      default: season ='ERROR'
    }
    const hour = date.getHours()
    if(hour<6){
      time = '凌晨'
    }else if(hour<12 && hour>6){
      time = '上午'
    }else if(hour === 12){
      time = '中午'
    }else if(hour>12 && hour<18){
      time = '下午'
    }else if(hour > 18 && hour<24){
      time = '晚上'
    }
    return (
      <main>
        <div className='main-wrapper'>
          <h3>现在的季节：{season}  {month}月</h3>
          <h3>现在的是一天中的：{time}  {hour}点</h3>
          <p>Prerequisite to get started react.js:</p>
          <ul><TechList techs={this.props.techs} /></ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />{' '}
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            />
            {/* &&判断 */}
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loginText}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// Footer Component
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    loginText:'Login',
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or Greet people to change me',
  }
  handleLogin = () => {
    if(this.state.loggedIn){
      this.setState({
        loggedIn: !this.state.loggedIn,
      })
      this.setState({loginText:'Login'})
    }else{
      this.setState({loginText:'landing'})
      setTimeout(()=>{
        this.setState({
          loggedIn: !this.state.loggedIn,
        })
        this.setState({loginText:'Logout'})
      },2000)
    }
    
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
    const month = months[time.getMonth()]
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
  }
  handleTime = () => {
    let message = this.showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    
    return (
      <div className='app'>
        <Header data={data} />
        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          loginText={this.state.loginText}
          handleLogin={this.handleLogin}
          message={this.state.message}
          date={new Date()}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

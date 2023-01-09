import React from 'react'
import ReactDOM from 'react-dom'


// importing data

import { tenMostHighestPopulations } from './data/ten_most_highest_populations'
import { numberList } from './data/numbers'

// 普通数组
const Numbers = ({numbers})=>{
  const list = numbers.map((number)=> <li key={number}>{number}</li>)
  return list
}
// 嵌套数组
const skills = [
  ['HTML',10],
  ['CSS',7],
  ['JavaScript',9],
  ['React',9],
]
const Skill = ({skill:[tech,level]})=>(
  <li>
    {tech}  {level}
  </li>
)
const Skills = ({skills})=>{
  const skillsList = skills.map((skill) => <Skill key={skill} skill={skill}/>)
  return <ul>{skillsList}</ul>
}
// 对象数组
const Number = ({number:{num,type}})=>{
  function setColor(type){
    let color = ''
    switch(type){
      case 'odds':
        color = '#fddb3a'
      break;
      case 'evens':
        color = '#21bf73'
      break;
      case 'prime':
        color = '#fd5e53'
      break;
      default: 
        color = 'none'
    }
    return color
  } 
  const numStyle = {
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    fontSize: '26px',
    backgroundColor: setColor(type),
    color:'#fff',
    textAlign: 'center'
  }
  return <div style={numStyle}>{num}</div>
}
const NumberList = ({numberlist})=>{
  const numbers = numberlist.map((number)=>
    <Number key={number.num}  number={number}/>
  )
  return <div className='level-item'>{numbers}</div>
}
// 生成随机色
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const HexaColor = ()=>{
  let bgc = hexaColor()
  const setStyle = {
    width: '98px',
    height: '98px',
    lineHeight: '100px',
    fontSize: '26px',
    backgroundColor: bgc,
    color:'#fff',
    textAlign: 'center',
    borderRadius: '5px',
    margin: 1,
  }
  return <div style={setStyle}>{bgc}</div>
}
const Hexas = ({numbers})=>{
  const hexas = numbers.map(number => <HexaColor key={number.num}/>)
  return <div className='level-item'>{hexas}</div>
}
// 世界人口
const Pop =({pop:{country,population}})=>{
  const width = (population / 7696165599 * 100).toFixed(0)
  const popIBox = {
    display: 'flex',
    textAlign:'left',
    lineHeight:'26px'
  }
  const popPCT ={
    width:'600px',
    margin:'5px'
  }
  const setPopStyle ={
    width:width +'%',
    backgroundColor:'#ffa500',
    height:'20px'
  }
  const pop = <div style={popIBox}>
    <p style={{display:'block',width:'150px',textTransform:'uppercase'}}>{country}</p>
    <div style={popPCT}>
      <div style={setPopStyle}></div>
    </div>
    <p>{population}</p>
  </div>
  return pop
}
const Pops = ({popList})=>{
  const pops = popList.map(pop => <Pop key={pop.country} pop={pop}/>)
  return <div>{pops}</div>
}
// The App, or the parent or the container component
// Functional Component
const App = () => {
  const numbers1 = [1,2,3,4,5]
  return (
    <div className='app'>
      <div>
        <h1>Array Map</h1>
        <ul><Numbers numbers={numbers1}/></ul>
        <Skills skills={skills}/>
        <div className='level-wrapper'>
          <h2>Number Generator</h2>
          <NumberList numberlist={numberList}/>
        </div>
        <div className='level-wrapper'>
          <h2>Hexadecimal Colors</h2>
          <Hexas numbers={numberList}/>
        </div>
        <div className='level-wrapper'>
          <h2>World population</h2>
          <Pops popList={tenMostHighestPopulations}/>
        </div>
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

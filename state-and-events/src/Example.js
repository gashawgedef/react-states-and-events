import React, { Component } from 'react'

const message=[
  "Learn for React *",
  "Apply for jobs",
  "Invest your new income"
]
export class Example extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       step:1
    }
  }
  

  render() {
    function handlePrevious(){
      alert("Previous")
    }
    function handleNext(){
      this.setState({
        count: this.state.step + 1,
      });
    }
    return (
      <div className='steps'>
        <div className='numbers'>
          <div className={`${this.state.step>=1?"active":""}`}>1</div>
          <div className={`${this.state.step>=2?"active":""}`}>2</div>
          <div className={`${this.state.step>=3?"active":""}`}>3</div>
        </div>
        <p className='message'>Step {this.state.step}:{message[this.state.step-1]}</p>
        <div className='buttons'>
          <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={handlePrevious}>Previous</button>
          <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={this.handleNext}>Next</button>
        </div>

      </div>
    )
  }
}

export default Example

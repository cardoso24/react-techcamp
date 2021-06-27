import React, { Component } from 'react'
  
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
         bodyColor: 'grey',
         headingColor: 'white',
         colorName: 'Green',
    }
}

// Function to create random rgb values
generateRGBColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let val = `rgb(${r}, ${g}, ${b})`;
    return val;
}
nameColorRed(){
  let red ='Red'
  return red;
}

componentDidMount(){
    this.interval = setInterval(() => {
         this.setState({
              bodyColor: this.generateRGBColor(),
              headingColor: this.generateRGBColor(),
              colorName: this.nameColorRed(),
         })
    }, 5000);
}

// unmounting for preventing memory leakes.
componentWillUnmount(){
    clearInterval(this.interval);
}

render(){

    return(
         <div className="Home" style={{backgroundColor: this.state.bodyColor}}>
              <h1 style={{color: this.state.headingColor}}>{ this.state.colorName}</h1>
         </div>
    )
}
}
  
export default App;

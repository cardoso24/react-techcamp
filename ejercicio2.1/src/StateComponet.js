import React, { Component } from 'react'
  
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
         bodyColor: 'grey',
         headingColor: 'white',
         colorName: 'Red',
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
nameColorGreen(){
  let green ='Green'
  return green;
}

componentDidMount(){
    this.interval = setInterval(() => {
         this.setState({
              bodyColor: this.generateRGBColor(),
              headingColor: this.generateRGBColor(),
              colorName: this.nameColorGreen(),
         })
    }, 5000);
}

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

import React, { Component } from 'react'
import './App.css'
import * as styles from './styles'
class App extends Component
{
  name = "Akansha"; //property of class
  render()
  {
    const age = 18;

    return (
      <div>
        < div className="App" >
          React
        {this.name}
          {age}
          <button>Button Demo</button>
        </div>

        <div style={styles.property1}>
          Styling
      </div>
      </div>
    );
  }
}
const Appinstance = new App();
console.log(Appinstance.name)

export default App;

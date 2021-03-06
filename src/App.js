import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss'

const tempArr = [
  {
    fName: 'Anna',
    lName: 'Vihrog',
    email: 'bla@test.co'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
        </section>
      </div>
    );
  }
}

export default App;

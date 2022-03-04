import React from 'react';
import './App.css';
import Home from './component/Home';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // console.log('GGGGGG', this.props);
  }

  render() {
    return (
      <React.Fragment>
        <Home
          name="111"
        />
      </React.Fragment>
    )
  }
}

export default App;

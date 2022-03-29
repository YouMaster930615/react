import React from 'react';
import './App.css';
import Home from './component/Home';
import OrderList from './component/OrderList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  onUnload(event) { 
    alert('页面刷新')
  }

  componentDidMount() {
    console.log('GGGGGG', this.props);
  }

  componentWillUnmount() {
    alert('xiezai')
  }

  render() {
    return (
      <React.Fragment>
        <Home
          name="111"
        />
        <OrderList />
      </React.Fragment>
    )
  }
}

export default App;

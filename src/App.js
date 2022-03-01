import React from 'react';
import Home from './component/Home';
import {connect} from 'react-redux';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('GGGGGG', this.props);
  }

  render() {
    const { totalNumber, increateTotal, decreateTotal } = this.props;
    return (
      <React.Fragment>
        <Home
          totalNumber={totalNumber}
          increateTotal={increateTotal}
          decreateTotal={decreateTotal}
        />
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    totalNumber: state.handleOrderList.totalNumber, // handleOrderList  某一个模块的名字 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increateTotal: () => dispatch({type: 'INCREATE_NUMBER'}),
    decreateTotal: () => dispatch({type: 'DECREATE_NUMBER'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

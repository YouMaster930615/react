import React from 'react'
import { connect } from 'react-redux';
import {
  increateNumber,
  decreateNumber
} from '../actions/home'

const Home = ({dispatch, totalNumber}) => {
  return (
    <React.Fragment>
      <h2>哈哈{totalNumber}</h2>
      <button onClick={() => dispatch(increateNumber(Math.random() * 20))}>x 3</button>
      <button onClick={() => dispatch(decreateNumber(Math.random() * 100))}>- 3</button>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    totalNumber: state.handleOrderList.totalNumber
  }
}

export default connect(mapStateToProps)(Home);



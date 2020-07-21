import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
// import { robots } from './robots';
import SearchBox from "../components/SearchBox";
import ErrorBoundry from '../components/ErrorBoundry';

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error

    
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())
  }
  
}


class App extends React.Component {
  

  componentDidMount() {
    this.props.onRequestRobots()
  };

  // onSearchChange = (event) => {
  //   this.setState({
  //     searchField: event.target.value,
  //   });
  // };

  render() {

    
    const {searchField,onSearchChange,robots,isPending }=this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // console.log("render");
    if (isPending) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
          <h1 className="f1">ROBOFRIENDS</h1>
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

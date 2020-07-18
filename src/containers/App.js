import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
// import { robots } from './robots';
import SearchBox from "../components/SearchBox";
import ErrorBoundry from '../components/ErrorBoundry';

import {setSearchField} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
    
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchChange:(event)=>dispatch(setSearchField(event.target.value))
  }
  
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
      // searchField: "",
    };

    // console.log("constructor");
  };

  componentDidMount() {
    // console.log('store',this.props.store.getState())
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // console.log("componentDidMount");
  };

  // onSearchChange = (event) => {
  //   this.setState({
  //     searchField: event.target.value,
  //   });
  // };

  render() {

    const {robots}=this.state;
    const {searchField,onSearchChange }=this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // console.log("render");
    if (!robots.length) {
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

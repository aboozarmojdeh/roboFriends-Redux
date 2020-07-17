import React from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
// import { robots } from './robots';
import SearchBox from "../components/SearchBox";
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };

    console.log("constructor");
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    console.log("componentDidMount");
  };

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    console.log("render");
    if (!this.state.robots.length) {
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
          <SearchBox onSearchChange={this.onSearchChange} />
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

export default App;

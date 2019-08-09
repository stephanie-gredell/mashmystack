import React from "react";
import databases from './data/databases';
import servers from './data/servers';
import js_frameworks from './data/js_frameworks';
import api from './data/api';
import './Masher.scss';

export default class Masher extends React.Component {

  constructor(props) {
    super(props);

    this.handleMash = this.handleMash.bind(this);
    this.pickRandomMash = this.pickRandomMash.bind(this);

    this.state = {
      server: "",
      javascript: "",
      database: "",
      api: "",
    }
  }

  handleMash(event) {
    event.preventDefault();
    this.setState({
      database: this.pickRandomMash(databases),
      javascript: this.pickRandomMash(js_frameworks),
      server: this.pickRandomMash(servers),
      api: this.pickRandomMash(api)
    }, function() {
      console.log(this.state);
    });
  }

  pickRandomMash(stack) {
    let min = Math.ceil(0);
    let max = Math.floor(stack.length);
    let random = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    return stack[random];
  }

  render() {
    return(
      <div className="masher">

        <button class="get_mashup_button" onClick={this.handleMash}>Mash my stack!</button>


        {this.state.database && this.state.javascript && this.state.server &&
        <div>
          <p>Build an app using <a href={this.state.api.url} target="_blank" rel="noopener noreferrer">{this.state.api.name}</a> API, <a href={this.state.database.url} target="_blank" rel="noopener noreferrer">{this.state.database.name}</a> database with <a href={this.state.server.url} target="_blank" rel="noopener noreferrer">{this.state.server.name}</a> and a <a href={this.state.javascript.url} target="_blank" rel="noopener noreferrer">{this.state.javascript.name}</a> frontend!</p>

        </div>
        }

      </div>
    );
  }
}

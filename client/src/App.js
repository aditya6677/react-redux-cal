import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var a=1;
class App extends Component {
  state = {users: [],
          less: [],
          open :true }
  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => this.setState({ users:data.result.ongoing,less:data.result.upcoming }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Calendar</h1>
          </header>
          <div className="hell">
          {this.state.users.map(e => (
                <div>
                     <button className="button button1" data-toggle="collapse" data-target={"#"+a}><h5><b>{e.Name}</b></h5></button>
                      <div id={a++} className="adi collapse">
                        <strong>Name</strong> : {e.Name} <br/>
                        <strong>Ends In</strong> : {e.EndTime} <br/>
                        <strong>Platform</strong> : {e.Platform} <br/>
                        <strong>Url</strong> : <a href={e.url}>Paricipate</a>
                      </div>

                </div>

          ))}
          </div>

        </div>
        <div>
        <h1>Upcoming Contest</h1>
        <br/>
        {this.state.less.map(e => (
                  <div>
                     <button className="button button4" data-toggle="collapse" data-target={"#"+a}><h5><b>{e.Name}</b></h5></button>
                      <div id={a++} className="adi collapse">
                        <strong>Name</strong> : {e.Name} <br/>
                        <strong>Starts In</strong> : {e.StartTime} <br/>
                        <strong>Ends In</strong> : {e.EndTime} <br/>
                        <strong>Duration</strong> : {e.Duration} <br/>
                        <strong>Platform</strong> : {e.Platform} <br/>
                        <strong>Url</strong> : <a href={e.url}>Paricipate</a>
                      </div>

                  </div>
            ))}

      </div>
    </div>
    );
  }
}

export default App;

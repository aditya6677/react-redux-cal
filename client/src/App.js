import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var a=1;
class App extends Component {
  state = {users: [],
          less: [],
          hr :true,
          he :true,
          cc :true,
          cf :true,
          ot :true
        }
  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => this.setState({ users:data.result.ongoing,less:data.result.upcoming }));
  }

  constructor(props) {
    super(props);
    this.handlehr = this.handlehr.bind(this);
    this.handlehe = this.handlehe.bind(this);
    this.handlecc = this.handlecc.bind(this);
    this.handlecf = this.handlecf.bind(this);
    this.handleot = this.handleot.bind(this);
  }

  check(str){
    if(str==="HACKERRANK"){
      if(this.state.hr)
        return true;
      else
        return false;
    }

    if(str==="CODECHEF"){
      if(this.state.cc)
        return true;
      else
        return false;
    }

    if(str==="HACKEREARTH"){
      if(this.state.he)
        return true;
      else
        return false;
    }

    if(str==="CODEFORCES"){
      if(this.state.cf)
        return true;
      else
        return false;
    }

    if(str==="OTHER"){
      if(this.state.ot)
        return true;
      else
        return false;
    }
  }

  handlehr(){
    this.setState({hr:!this.state.hr});
  }

  handlehe(){
    this.setState({he:!this.state.he});
  }

  handlecf(){
    this.setState({cf:!this.state.cf});
  }

  handlecc(){
    this.setState({cc:!this.state.cc});
  }

  handleot(){
    this.setState({ot:!this.state.ot});
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Calendar</h1>
          </header>
          <div className="cb">
            <div className="pretty p-default p-round">
              <input type="checkbox" onChange={this.handlehr} defaultChecked={this.state.hr}/>
              <div className="state p-success-o">
                  <label><strong>Hackerrank</strong></label>
              </div>
            </div>

            <div className="pretty p-default p-round">
              <input type="checkbox" onChange={this.handlecf} defaultChecked={this.state.cf}/>
              <div className="state p-success-o">
                  <label><strong>Codeforces</strong></label>
              </div>
            </div>

          <div className="pretty p-default p-round">
              <input type="checkbox" onChange={this.handlecc} defaultChecked={this.state.cc}/>
              <div className="state p-success-o">
                  <label><strong>Codechef</strong></label>
              </div>
            </div>

            <div className="pretty p-default p-round">
              <input type="checkbox" onChange={this.handlehe} defaultChecked={this.state.he}/>
              <div className="state p-success-o">
                  <label><strong>Hackerearth</strong></label>
              </div>
            </div>

            <div className="pretty p-default p-round">
              <input type="checkbox" onChange={this.handleot} defaultChecked={this.state.ot}/>
              <div className="state p-success-o">
                  <label><strong>Others</strong></label>
              </div>
            </div>
          </div>
          <div className="hell">
          {this.state.users.map(e => (
            this.check(e.Platform) ? (
               <div>
                     <button className="button button1" data-toggle="collapse" data-target={"#"+a}><h5><b>{e.Name}</b></h5></button>
                      <div id={a++} className="adi collapse">
                        <strong>Name</strong> : {e.Name} <br/>
                        <strong>Ends In</strong> : {e.EndTime} <br/>
                        <strong>Platform</strong> : {e.Platform} <br/>
                        <strong>Url</strong> : <a href={e.url}>Paricipate</a>
                      </div>
                </div>
            ) : <div></div>
          ))}
          </div>

        </div>
        <div>
        <h1>Upcoming Contest</h1>
        <br/>
        {this.state.less.map(e => (
          this.check(e.Platform)?
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
                  </div>:<div></div>
            ))}
      </div>
        <div className="pad">
          <header className="footer">
              <p>In <span class="glyphicon glyphicon-heart coll"></span> With ReactJS</p>
          </header>
        </div>
    </div>
    );
  }
}

export default App;

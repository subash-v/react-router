import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
const Home = (props) => {
const navigate = ()=>{
  props.history.push('/test');
}
  return( <div>
  <p>Home</p>
  <button onClick={navigate}>Go To TEST</button>
  </div>)
}
const Test = (props) => {
  return <div>test</div>
}
const TestId = (props) => {
  return <div>TestId</div>
}
const Check = (props) => {
  return <div>Check</div>
}
const NoMatch = (props) => {
  return <div>NoMatch</div>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
menu=[{name:'Home',path:'/'},{name:'Test',path:'/test'},{name:'Check',path:'/check'}]
  render() {
    return (
      <BrowserRouter>
        <div>
        {this.menu.map((x,i)=>
          <Link to={x.path} key={i}>{x.name}</Link>
        )}
        <br></br>
          Welcome for react-Route
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/test/:id" component={TestId} />
            <Route exact path="/check" component={Check} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

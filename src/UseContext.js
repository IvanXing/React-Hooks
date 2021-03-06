import React, { Component, createContext } from "react";
import "./App.css";

const BatteryContext = createContext();
const OnlineContext = createContext();

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {battery => (
          <OnlineContext.Consumer>
            {online => (
              <h1>
                Battery: {battery}, Online: {String(online)}
              </h1>
            )}
          </OnlineContext.Consumer>
        )}
      </BatteryContext.Consumer>
    );
  }
}

class Middle extends Component {
  render() {
    return <Leaf />;
  }
}

class UseContext extends Component {
  state = {
    battery: 60,
    online: false
  };
  render() {
    const { battery, online } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <div>=========== demo: context ==========</div>
          <button
            type="button"
            onClick={() => this.setState({ battery: battery - 1 })}
          >
            PlueBattery
          </button>
          <button
            type="button"
            onClick={() => this.setState({ online: !online })}
          >
            TurnOnline
          </button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default UseContext;

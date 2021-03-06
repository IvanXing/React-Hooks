import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
// import UseContext from "./UseContext.js";
// import UseContextType from "./UseContextType.js";
// import UseLazy from "./UseLazy.js";
// import Usememo from "./Usememo.js";
// import HooksuseState from "./HooksuseState.js";
// import HooksuseEffect from "./HooksuseEffect.js";
// import HooksuseContext from "./HooksuseContext.js";
// import HooksuseMeno from "./HooksuseMeno.js";
// import HooksuseCallback from "./HooksuseCallback.js";
// import HooksuseRef from "./HooksuseRef";
// import MyHooks from "./MyHooks.js";
// import MineHooks from "./MineHooks.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <MineHooks /> */}
    {/* <MyHooks /> */}
    {/* <HooksuseRef /> */}
    {/* <HooksuseCallback /> */}
    {/* <HooksuseMeno /> */}
    {/* <HooksuseContext /> */}
    {/* <HooksuseEffect /> */}
    {/* <HooksuseState /> */}
    {/* <Usememo /> */}
    {/* <UseLazy /> */}
    {/* <UseContext /> */}
    {/* <UseContextType /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

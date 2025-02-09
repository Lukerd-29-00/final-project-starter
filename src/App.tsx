import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard"

function App(): JSX.Element {
    return (
        <div className="App">
            <Dashboard/>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import "./index.css"
import { UIData } from "./UIData"
import { FaCaretDown, FaCaretUp, FaToggleOff, FaToggleOn } from "react-icons/fa"


function App() {

  const [isLight, setIsLight] = useState(false)

  const ChangeMode = () => {
    setIsLight(!isLight)
  }


  return (
    <div className={`App ${isLight === false ? "AppLight" : ""}`}>
      <header className="App-header">
        <h2>Social Media Dashboard</h2>
        <p>Total Followers: 23,004</p>
        <hr />
        <div className='toggle'>
          <p>{isLight ? "Dark Mode" : "Light Mode"}</p>
          {isLight ? <FaToggleOn
            className='faToggle'
            onClick={ChangeMode}
          /> : <FaToggleOff
            className='faToggle'
            onClick={ChangeMode}
          />}
        </div>
      </header>

      <div className='first'>
        <div className='Cards'>
          {UIData.first.map((item, index) => {
            return (
              <div key={index} className={`Card ${item.platform}`}>

                <p className='name'><span className='Icon'>{item.platformIcon}</span> {item.name}</p>
                <h2>{item.follower}</h2>
                <p>{item.type}</p>
                <p className={`${item.isGain ? "gain" : "loss"}`}>
                  {item.isGain ? <FaCaretUp /> : <FaCaretDown />}{item.addition} Today</p>
              </div>
            )
          })}

        </div>
        <div>
          <h2 className='title'>Overview - Today</h2>
        </div>
        <div className='Cards'>
          {UIData.second.map((item, index) => {
            return (
              <div className='Card' key={index}>
                <div className='box'>
                  <p>{item.type}</p>
                  <p className={`Icon ${item.platform}`}>{item.platformIcon}</p>
                </div>
                <div className='box'>
                  <h2>{item.count}</h2>
                  <p
                    className={`${item.isGain ? "gain" : "loss"}`}>
                    {item.isGain ? <FaCaretUp /> : <FaCaretDown />}{item.addition}%
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;

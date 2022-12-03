import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


function UpdateData(props) {
  const [state, setState] = useState({
    Player_Name: "",
    Matches: 0,
    Inns: 0,
    Runs: 0,
    HS: 0,
    Ave: 0
  })
}

const url = "http://localhost:3000/"

useEffect(() => {
  axios.get(url)
    .then(res => {
      console.log(res)

    })
    .catch(err => {

    })

}, [])


function App() {
  return (
    <div className="shopping-list">
        <h1>Shopping List for</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
}

export default App;

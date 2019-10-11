// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './App.css';

var karenVariable = 0;

const App = () => {

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [userID, setUserID] = useState();
  const [picture, setPicture] = useState();
  const [myStyle, setMyStyle] = useState({
    border: '1px solid black'
    }
  );
  const [newBox, setNewBox] = useState("https://www.fillmurray.com/300/200");

 

  useEffect(()=> {
    fetch(
      'https://randomuser.me/api/',
      // {
      //   method: 'Get',
      //   headers: new Headers({
      //     Accept: 'application/vnd.github.cloak-preview'
      //   })
      // }
    )
      .then(res=>res.json())
      .then(response=>{
        setIsLoading(false);
        setEmail(response.results[0].email);
        setUserInfo(response.results[0]);
        setUserID([response.results[0].id]);
        setPicture([response.results[0].picture]);
      })
      .catch(error=>console.log(error));
    }, [page]);

    let userRegistration = userInfo.name;
    let userIDKaren = userInfo.id;
    let userIDNumber = userIDKaren;
    
  console.log({userInfo});
//   console.log(userRegistration);
//   console.log(userIDKaren);
//   console.log(userIDNumber);
console.log(userID);
console.log(picture);

  const updating = () =>{
    fetch( 
      'https://randomuser.me/api/',
    )
    .then(res=>res.json())
    .then(response=>{
      setIsLoading(false);
      setEmail(response.results[0].email);
      setUserInfo(response.results[0]);
      setUserID([response.results[0].id]);
      setPicture([response.results[0].picture]);
      updatePicture();
    })
    .catch(error=>console.log(error));
    updatePicture();
  }

  const updateStyle = ()=>{
    console.log('here');
    setMyStyle({
      border: '3px solid purple'
    });
  }

  const updatePicture = ()=>{
    (userInfo.gender === "female") ? 
    setNewBox("https://suitesculturelles.files.wordpress.com/2015/04/parks-and-recreation-memes-7.jpg")  : 
    setNewBox("https://www.fillmurray.com/300/200");
    (userInfo.gender === "female") ?
    updateStyle() : setMyStyle({border: '2px solid orange'});
  }
  return (
    <div className="App">
      
      <h1>API calls with React hooks</h1>

      
      {isLoading && <p>Wait I'm Loading comments for you</p>}
      <div className="largeBox" style={myStyle}>
        <div className="box">
          Karen Variable {karenVariable}
        </div>
        <div className="box">
          Email: {email}
        </div>
        <div className="box">
          User Info: {userInfo.gender}
        </div>
        <div className="box">
          User Phone: {userInfo.phone}
        </div>
        <div className="box">
          <img src={newBox} alt="user" className="userImage"/>
          
        </div>
      </div> 
      
      
      <button onClick={updating}>
        Click me
      </button>
    </div>
  );

}

export default App;

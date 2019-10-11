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
    })
    .catch(error=>console.log(error));

  }

  return (
    <div className="App">
      
      <h1>API calls with React hooks</h1>
      Loading {isLoading ? <div>yes</div> : <div>nope</div>}
      {isLoading && <p>Wait I'm Loading comments for you</p>}
      <div className="largeBox">
        <div className="box">
          Karen Variable {karenVariable}
        </div>
        <div className="box">
          Page {page}
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

        </div>
      </div> 
      
      
      <button onClick={updating}>
        Click me
      </button>
      
      
      

    </div>
  );

}

export default App;

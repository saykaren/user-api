// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './App.css';

var karenVariable = 0;

function App() {

  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [userID, setUserID] = useState();

  const loadMoreCommit = ()=>{
    setPage(page + 1);
    karenVariable = commitHistory;
  };

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
        setCommitHistory(response);
        setIsLoading(false);
        setEmail(response.results[0].email);
        setUserInfo(response.results[0]);
        setUserID([response.results[0].id]);
      })
      .catch(error=>console.log(error));
    }, [page]);

    let userRegistration = userInfo.name;
    let userIDKaren = userInfo.id;
    let userIDNumber = userIDKaren;
  console.log(userInfo);
//   console.log(userRegistration);
//   console.log(userIDKaren);
//   console.log(userIDNumber);
console.log(userID);


  return (
    <div className="App">
      <h1>API calls with React hooks</h1>
      {isLoading && <p>Wait I'm Loading comments for you</p>}
      Karen Variable {karenVariable}<br></br> 
      Page {page}<br></br>
      Loading {isLoading ? <div>yes</div> : <div>nope</div>}
      Email: {email}<br></br>
      User Info: {userInfo.gender}<br></br>
      User Phone: {userInfo.phone}

    </div>
  );

}

export default App;

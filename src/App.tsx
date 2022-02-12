import React, {useEffect} from 'react';
import logo from './logo.svg';
import { app } from './firebase/firebase';
// import './App.css';
import Header from './Components/Layout/Header/Header';
import Content from './Components/Layout/Content/Content';
import SideBar from './Components/Layout/SideBar/SideBar';
import Dashboard from './Components/Layout/Dashboard/Dashboard';

function App() {

  // useEffect(() => {
  //   let ref = db.ref("/");
  //   ref.on("value", snapshot => {
  //     console.log(snapshot.val)
  //   });

  // },[])

  return (
    <div>
        <Header />
        <Content>
          <SideBar />
          <Dashboard />
        </Content>
    </div>
  );
}

export default App;

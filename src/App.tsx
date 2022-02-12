import React, {useContext, useEffect} from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './Components/Layout/Header/Header';
import Content from './Components/Layout/Content/Content';
import SideBar from './Components/Layout/SideBar/SideBar';
import Dashboard from './Components/Layout/Dashboard/Dashboard';
import { FirebaseContext } from './firebase/FirebaseProvider';
import { useSelector } from 'react-redux';



function App() {

  const { app, api } : any = useContext(FirebaseContext);
  const data = useSelector(state => state);
  console.log(data);
  
  useEffect(() => {
    api.getMounts();
  } , [])

  return (
    <div>
        <Header />
        <Content>
          <SideBar />
          <Dashboard data={data}/>
        </Content>
    </div>
  );
}

export default App;

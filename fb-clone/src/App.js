import {React} from 'react'
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"

function App() {
  return (
    // Bem naming convention
    <div className="app">
      <Header />
      <Feed />
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;

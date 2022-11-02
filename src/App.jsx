import React,{useEffect} from 'react';
import Footer from './assets/Components/Footer';
import HomeSidebar from './assets/Components/HomeSidebar';
import HomeMain from './assets/Components/HomeSidebar/HomeMain';
import Navbar from './assets/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repositories from './assets/Components/Repositories';
import Projects from './assets/Components/Projects';
import Packeges from './assets/Components/Packeges';
import Stars from './assets/Components/Stars';
import req from './API/API';
import Followers from './assets/Components/Followers';
import Following from './assets/Components/Folowing/Folowing';
import Error from './assets/Components/Error';
import EnterUserName from './assets/Components/Enter_userNeme';

const App = () => {

  req.getIn("ozodbek-webs"), req.getRepo("ozodbek-webs"), req.getFol("ozodbek-webs"), req.getFolow("ozodbek-webs")

  return (
    <div>
      
      
      <BrowserRouter>
        <Navbar />
        <HomeSidebar />
        <Routes>
          <Route path='/follower' element={<Following/>}></Route>
          <Route path='/following' element={<Followers/>}></Route>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/repositories" element={<Repositories />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/packeges" element={<Packeges />}></Route>
          <Route path="/stars" element={<Stars />}></Route>
          <Route path='/*' element={<Error/>}></Route>
          <Route path='/EnterUserName' element={<EnterUserName/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
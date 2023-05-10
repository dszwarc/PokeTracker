import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, {useState} from 'react'
import LoginPage from "./pages/LoginPage/LoginPage";
import PokeDexPage from "./pages/PokeDexPage/PokeDexPage";
import userService from "./utils/userService";
import SignupPage from "./pages/SignupPage/SignupPage";
import UserTeams from "./pages/UserTeams/UserTeams";
import EditTeamPage from "./pages/EditTeamPage/EditTeamPage";

function App() {
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  if(user){
    return (
      <Routes>
        <Route path="/" element={<PokeDexPage loggedUser={user}/>} />
        <Route path="/:id" element={<PokeDexPage loggedUser={user}/>} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
        <Route path="/teams" element={<UserTeams loggedUser={user}/>}/>
        <Route path='/teams/:teamId' element={<EditTeamPage />}/>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/*" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
    </Routes>
  );
}

export default App;

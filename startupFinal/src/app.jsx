import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { AuthState } from './login/authState';

import { About } from './about/about';
import { Chat } from './chat/chat';
import { Posts } from './posts/posts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


// img 
import Ylogo from './y.svg'; // Tell webpack this JS file uses this image

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  /*
            <div className='navbar-brand'>
              <a class="navbar-brand" href="#">BYUllage <img src={Ylogo} alt="YLogo" width="30"/> </a>
            </div>
  */
  return (
    <BrowserRouter>
      <div className='body bg-primary text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
           
            <a class="navbar-brand" href="#">BYUllage <img src={Ylogo} alt="YLogo" width="30"/> </a>
            
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='chat'>
                    Chat
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='posts'>
                    Posts
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/chat' element={<Chat />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-dark text-muted'>
          <div className='container-fluid'>
            <span class="text-reset">KJ's Github</span>
            <a class="text-reset" href="https://github.com/Korea19800/startup">GitHub Repository</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;

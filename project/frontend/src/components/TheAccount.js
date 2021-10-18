import "./Login.css";
import { useState, useRef } from "react";

export default function TheAccount() {
  const [showLoginSign, setShowLoginSign] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);

  function handleShowLogin() {
    setShowLogin(true);
    setShowSign(false);
  }
  function handleShowSign() {
    setShowLogin(false);
    setShowSign(true);
  }
  function closeModal() {
    setShowLogin(false);
    setShowSign(false);
  }

  return (
    <>
        <div className="the-account">
          <span onClick={() => setShowLoginSign(!showLoginSign)}>
            My Account
          </span>         
        </div>
        {showLoginSign && (
          <ul className="login-sign" onClick={() => setShowLoginSign(false)}>
            <li onClick={() => handleShowLogin()}>Login</li>
            <li onClick={() => handleShowSign()}>Sign Up</li>            
          </ul>
        )}
      {showLogin && <Login />}
      {showSign && <Sign />}
    </>
  );


  function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
  
    const Modal = props => {
      const divStyle = {
        display: this.props.displayModal ? "block" : "none"
      }
    }
  
    function handleLoginIn() {
      console.log("username, password", username, password)
      return;
    }
    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }
    function handleUsernameChange(e) {
      setUsername(e.target.value);
    }
  
    return (
      <ul className="container">      
        <li onClick={closeModal}>
        <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => closeModal()}
                ><span aria-hidden="false">&times;</span>
                </button>
        </li>    
        <h3 align="center"> Login </h3>        
        <li>      
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => handleUsernameChange(e)}
          />
        </li>
        <li>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => handlePasswordChange(e)}
          />
        </li>
        <li>
          <button onClick={() => handleLoginIn()}>Login</button>
        </li>
      </ul>
    );
  }
  function Sign() {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [username, setUsername] = useState("");
    const [mailBox, setMailbox] = useState("");
    
    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }
    function handleUsernameChange(e) {
      setUsername(e.target.value);
    }
    function handleRepeatPasswordChange(e) {
      setRepeatPassword(e.target.value);
    }
    function handleMailBoxChange(e) {
      setMailbox(e.target.value);
    }
    
    function handleSign() {
      if (password !== repeatPassword) {
        alert("The 2 password not mattched!");
        return;
      }
      // alert(" ~ line 80 ~ Sign ~ username", username)
      console.log("username: ", username)
      console.log("password: ", password)
  
    }
    return (
      <ul className="container">
        <li onClick={closeModal}>
        <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => closeModal()}
                ><span aria-hidden="false">&times;</span>
                </button>
        </li>
        <h3 align="center"> Sign Up </h3>
        <li>
          <label htmlFor="username">Username: </label>
          <input required type="text" id="username" onChange={(e) => handleUsernameChange(e)}/>
        </li>
        <li>
          <label htmlFor="password">Password: </label>
          <input required type="password" id="password" onChange={(e) => handlePasswordChange(e)}/>
        </li>
        <li>
          <label htmlFor="repeat-password">Repeat Password: </label>
          <input required type="password" id="repeat-password" onChange={(e) => handleRepeatPasswordChange(e)}/>
        </li>
        <li>
          <label htmlFor="mailBox">MailBox: </label>
          <input required type="text" id="mailBox" onChange={(e) => handleMailBoxChange(e)}/>
        </li>
        <li>
          <button onClick={() => handleSign()}>Register</button>
        </li>
      </ul>
    );
  }
}

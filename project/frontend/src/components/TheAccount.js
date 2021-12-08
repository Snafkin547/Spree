import "./Login.css";
import {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';
import { Link } from 'react-router-dom';
import MyAccountPage from './MyAccountPage';




export default function TheAccount() {
    const history = useHistory();
    const [showLoginSign, setShowLoginSign] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSign, setShowSign] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        let userId = window.localStorage.getItem("userId")
        if (userId) {
            setIsLogin(true)
        }
    })

    function handleShowLogin() {
        setShowLogin(true);
        setShowSign(false);
    }

    function handleShowSign() {
        setShowLogin(false);
        setShowSign(true);
    }

    function handleLogout() {
        window.localStorage.clear();
        setIsLogin(false);
    }

    function handleMyAccountInfo() {
        history.push("/MyAccountPage")
    }

    function closeModal() {
        setShowLogin(false);
        setShowSign(false);
    }

    return (
        <>
            <div className="the-account">
          <span onClick={() => setShowLoginSign(!showLoginSign)}>
            {isLogin ? window.localStorage.getItem("mailBox") : "My Account"}
          </span>
            </div>
            {showLoginSign && (
                isLogin ?
                    <ul className="login-sign" onClick={() => setShowLoginSign(false)}>   
                        <li onClick={() => handleLogout()}>Logout</li>                     
                        <li onClick={() => handleMyAccountInfo()}>My Account</li>                   
                    </ul> :
                    <ul className="login-sign" onClick={() => setShowLoginSign(false)}>
                        <li onClick={() => handleShowLogin()}>Login</li>
                        <li onClick={() => handleShowSign()}>Sign Up</li>
                    </ul>
            )}

            {showLogin && <Login/>}
            {showSign && <Sign/>}
        </>
    );

    function Login() {
        const [mailBoxPrompt, setMailBoxPrompt] = useState("")
        const [passwordPrompt, setPasswordPrompt] = useState("")
        const [mailBox, setMailbox] = useState("");
        const [password, setPassword] = useState("");

        function handlePasswordBlur(e) {
            const passwordPattern = /([0-9]+)\S*([a-zA-Z]+)|([a-zA-Z]+)\S*([0-9]+)/ // password re pattern

            if (e.target.value.length < 8 || e.target.value.length > 16) {
                setPasswordPrompt("Password length should be in the range 8-16");
            } else if (e.target.value.search(passwordPattern) === -1) {
                setPasswordPrompt("Password should contain alphabet and number")
            } else {
                setPasswordPrompt("");
                setPassword(e.target.value);
            }
        }

        function handleMailBoxBlur(e) {
            const mailBoxPattern = /^\w+@([a-zA-Z]+\.)+[a-zA-Z]+$/
            if (e.target.value.search(mailBoxPattern) === -1) { // illegal mailBox
                setMailBoxPrompt("The mailbox is wrong!");
            } else {
                setMailBoxPrompt("");
                setMailbox(e.target.value);
            }
        }


        async function handleLoginIn() {
            if (mailBox && password) {
                await HttpUtil.post(ApiUtil.API_LOGIN, {'mailBox': mailBox, 'password': password})
                    .then(response => {
                        if (response > 0) {
                            alert('Login successful!')
                            // window.localStorage.setItem("username", username);
                            const userId = response;
                            window.localStorage.setItem("userId", userId);
                            window.localStorage.setItem("mailBox", mailBox);
                            closeModal();
                        } else if (response === 0) {
                            alert('Invalid password')
                        } else {
                            alert('User not exist,please register!')
                        }
                    })
            }

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
                    <label htmlFor="mailBox">MailBox: </label>
                    <input
                        type="text"
                        id="mailBox"
                        onBlur={(e) => handleMailBoxBlur(e)}
                    />
                    <p className="prompt mailBox">{mailBoxPrompt}</p>
                </li>
                <li>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        onBlur={(e) => handlePasswordBlur(e)}
                    />
                    <p className="prompt password">{passwordPrompt}</p>
                </li>
                <li>
                    <button onClick={() => handleLoginIn()}>Login</button>
                </li>
            </ul>
        );
    }

    function Sign() {
        const [repeatPassword, setRepeatPassword] = useState("");
        const [username, setUsername] = useState("");
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [usernamePrompt, setUsernamePrompt] = useState("")
        const [firstnamePrompt, setFirstnamePrompt] = useState("")
        const [lastnamePrompt, setLastnamePrompt] = useState("")
        const [repeatPasswordPrompt, setRepeatPasswordPrompt] = useState("")
        const [mailBoxPrompt, setMailBoxPrompt] = useState("")
        const [passwordPrompt, setPasswordPrompt] = useState("")
        const [mailBox, setMailbox] = useState("");
        const [password, setPassword] = useState("");

        function handleUsernameBlur(e) {
            if (e.target.value.length < 4 || e.target.value.length > 10) {
                setUsernamePrompt("Username length should be in the range 4-10");
            } else {
                setUsernamePrompt("");
                setUsername(e.target.value);
            }
        }

        function handleFirstnameBlur(e) {
            if (e.target.value.length < 4 || e.target.value.length > 10) {
                setFirstnamePrompt("Firstname length should be in the range 4-10");
            } else {
                setFirstnamePrompt("");
                setFirstname(e.target.value);
            }
        }

        function handleLastnameBlur(e) {
            if (e.target.value.length < 4 || e.target.value.length > 10) {
                setLastnamePrompt("Lastname length should be in the range 4-10");
            } else {
                setLastnamePrompt("");
                setLastname(e.target.value);
            }
        }

        function handlePasswordBlur(e) {
            const passwordPattern = /([0-9]+)\S*([a-zA-Z]+)|([a-zA-Z]+)\S*([0-9]+)/ // password re pattern

            if (e.target.value.length < 8 || e.target.value.length > 16) {
                setPasswordPrompt("Password length should be in the range 8-16");
            } else if (e.target.value.search(passwordPattern) === -1) {
                setPasswordPrompt("Password should contain alphabet and number")
            } else {
                setPasswordPrompt("");
                setPassword(e.target.value);
            }
        }

        function handleMailBoxBlur(e) {
            const mailBoxPattern = /^\w+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]+$/
            if (e.target.value.search(mailBoxPattern) === -1) { // illegal mailBox
                setMailBoxPrompt("The mailbox is wrong!");
            } else {
                setMailBoxPrompt("");
                setMailbox(e.target.value);
            }
        }

        function handleRepeatPasswordBlur(e) {
            if (password !== e.target.value) {
                setRepeatPasswordPrompt("The 2 password not matched!");
            } else {
                setRepeatPasswordPrompt("")
                setRepeatPassword(e.target.value);
            }
        }


        async function handleSign() {
            if (username && firstname && lastname && password && repeatPassword && mailBox && password === repeatPassword) {
                let flag
                const url = ApiUtil.API_CHECKMAILBOX
                await HttpUtil.post(url, {'mailBox': mailBox}) // check mailbox
                    .then(value => {
                        flag = value
                    })
                if (flag === 1) {
                    alert("The mailbox is used!")
                    return;
                }
                await HttpUtil.post(ApiUtil.API_REGISTER, {
                    "username": username,
                    "firstname": firstname,
                    "lastname": lastname,
                    "password": password,
                    "mailBox": mailBox
                })
                    .then(response => {
                        if (response === 1) {
                            alert('You just registered successfully!')
                            closeModal()
                            setShowLogin(true)
                        }
                    })

            } else {
                alert("Please check the information!Try it again!")
            }
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
                    <input required type="text" id="username" onBlur={(e) => handleUsernameBlur(e)}/>
                    <p className="prompt username">{usernamePrompt}</p>
                </li>
                <li>
                    <label htmlFor="firstname">Firstname: </label>
                    <input required type="text" id="firstname" onBlur={(e) => handleFirstnameBlur(e)}/>
                    <p className="prompt firstname">{firstnamePrompt}</p>
                </li>
                <li>
                    <label htmlFor="lastname">Lastname: </label>
                    <input required type="text" id="lastname" onBlur={(e) => handleLastnameBlur(e)}/>
                    <p className="prompt lastname">{lastnamePrompt}</p>
                </li>
                <li>
                    <label htmlFor="password">Password: </label>
                    <input required type="password" id="password" onBlur={(e) => handlePasswordBlur(e)}/>
                    <p className="prompt password">{passwordPrompt}</p>
                </li>
                <li>
                    <label htmlFor="repeat-password">Repeat Password: </label>
                    <input required type="password" id="repeat-password" onBlur={(e) => handleRepeatPasswordBlur(e)}/>
                    <p className="prompt repeat-password">{repeatPasswordPrompt}</p>
                </li>
                <li>
                    <label htmlFor="mailBox">MailBox: </label>
                    <input required type="text" id="mailBox" onBlur={(e) => handleMailBoxBlur(e)}/>
                    <p className="prompt mailBox">{mailBoxPrompt}</p>
                </li>
                <li>
                    <button onClick={() => handleSign()}>Register</button>
                </li>
            </ul>
        );
    }
}

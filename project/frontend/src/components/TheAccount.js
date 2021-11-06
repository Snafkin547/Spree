import "./Login.css";
import {useState, useRef} from "react";
import ApiUtil from '../Utils/ApiUtil';
import HttpUtil from '../Utils/HttpUtil';

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
            {showLogin && <Login/>}
            {showSign && <Sign/>}
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

        function handleUsernameBlur(e) {
            if (e.target.value.length < 4 || e.target.value.length > 10) {
                alert("Username length should be in the range 4-10");
            } else {
                setUsername(e.target.value);
            }
        }

        function handlePasswordBlur(e) {
            const passwordPattern = /([0-9]+)\S*([a-zA-Z]+)|([a-zA-Z]+)\S*([0-9]+)/ // password re pattern

            if (e.target.value.length < 8 || e.target.value.length > 16) {
                alert("Password length should be in the range 8-16");
            } else if (e.target.value.search(passwordPattern) === -1) {
                alert("Password should contain alphabet and number")
            } else {
                setPassword(e.target.value);
            }
        }

        function handleRepeatPasswordBlur(e) {
            if (password !== e.target.value) {
                alert("The 2 password not matched!");
            } else {
                setRepeatPassword(e.target.value);
            }
        }

        function handleMailBoxChange(e) {
            const mailBoxPattern = /^\w+@([a-zA-Z]+\.)+[a-zA-Z]+$/
            if (mailBox.search(mailBoxPattern) === -1) { // illegal mailBox
                alert("The mailbox is wrong!")
            } else {
                setMailbox(e.target.value);
            }
        }

        async function handleSign() {
            if (username && password && repeatPassword && mailBox && password === repeatPassword) {
                let flag
                await HttpUtil.post(ApiUtil.API_CHECKMAILBOX, {'mailBox': mailBox}) // check mailbox
                    .then(value => {
                        flag = value
                    })
                if (flag === 1) { // flag 1 used 0 unused
                    alert("The mailbox is used!")
                    return;
                }
                HttpUtil.post(ApiUtil.API_REGISTER, {"username": username, "password": password, "mailBox": mailBox});
                closeModal();
            } else {
                alert("Please check the information!Try it again!")
            }
            // alert(" ~ line 80 ~ Sign ~ username", username)
            // console.log("username: ", username)
            // console.log("password: ", password)
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
                </li>
                <li>
                    <label htmlFor="password">Password: </label>
                    <input required type="password" id="password" onBlur={(e) => handlePasswordBlur(e)}/>
                </li>
                <li>
                    <label htmlFor="repeat-password">Repeat Password: </label>
                    <input required type="password" id="repeat-password" onBlur={(e) => handleRepeatPasswordBlur(e)}/>
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

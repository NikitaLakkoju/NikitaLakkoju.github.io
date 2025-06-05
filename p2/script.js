const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail" placeholder="Enter your Email"></p>
    <p><input type="password" id="txtPass" placeholder="Enter your Password"></p>
    <p><button onclick='showWelcome()'> LOGIN </button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Enter your Name"></p>
     <p><input type="text" id="txtEmail" placeholder="Enter your Email"></p>
    <p><input type="password" id="txtPass" placeholder="Enter your Password"></p>
    <p><button onclick='showLogin()'> Already have an account </button></p>
    <button>Register</button>
    `
    root.innerHTML = str
}

const showWelcome = () => {
    let str=`
    <h1>WELCOME!</h1>
    `
    root.innerHTML = str
}
const showHome =() => {
    let str=`

    `
    root.innerHTML = str
}
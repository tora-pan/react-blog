import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default Login;
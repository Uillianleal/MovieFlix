
import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="login-submit">
          <button className="btn btn-warning btn-login">Fazer Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

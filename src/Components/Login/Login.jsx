import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

const Login = () => {
  const { signInWithGoogle, signInWithEmailAndPass, user } =
    useContext(AuthContext);
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPass(email, password)
      .then((result) => {
        console.log(
          "You are successful login with email and password",
          result.user
        );
      })
      .catch((error) => {
        console.log("Failed to login", error);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        console.log("Your are successfully signed in with Google", result.user);
      })
      .catch((error) => {
        console.log("Couldn't sign in with Google", error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              New here? Please{" "}
              <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <p>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

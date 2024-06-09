import { useContext, useEffect, useState } from 'react';
import loginImage from '../../../../public/assets/others/authentication2.png';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { AuthContext } from '../../../Routes/Provider/AuthProvider.jsx/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import Swal from 'sweetalert2';
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  // for private route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // for reCaptcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = event => {
    const user_captcha_value = event.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in user with email and password

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        if (user) {
          Swal.fire({
            title: 'User Login Successful',
            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
          navigate(from, { replace: true });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="container mx-auto backImg p-5">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className=" rounded-lg" src={loginImage} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <h5 className="text-center font-bold text-3xl">Login</h5>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type Above Captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-outline   bg-orange-400"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center pb-5 text-orange-400 text-xl">
              <small>
                New here ? <Link to="/signUp">Create An Account...</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

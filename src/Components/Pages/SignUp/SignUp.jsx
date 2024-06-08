import { Link } from 'react-router-dom';
import signUpImage from '../../../../public/assets/others/authentication2.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Routes/Provider/AuthProvider.jsx/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const user = { email, password, name };
    console.log({ user });

    // create user
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        if (user) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your Account Has been Created',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="container mx-auto backImg">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold">Sing Up Now</h1> */}
            <img src={signUpImage} className="rounded-lg p-5" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSignUp} className="card-body">
              <h3 className="text-center text-2xl font-bold">Sign Up</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline   bg-orange-400"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center pb-5 text-orange-400 text-xl">
              <small>
                Already Registered? <Link to="/login">Go To Login...</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

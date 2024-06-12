import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignIn = () => {
    googleSignIn().then(res => {
      // console.log('google sign', res.user);

      // send to db user
      const userInformation = {
        name: res.user?.displayName,
        email: res.user?.email,
        photo: res.user?.photoURL,
      };

      axiosPublic
        .post('/users', userInformation)
        .then(res => {
          console.log('send to db user', res.data);
          navigate('/');
        })
        .catch(err => {
          console.error(err);
        });
    });
  };
  return (
    <div>
      <div className="divider divider-accent"></div>

      <div className="flex flex-col w-full lg:flex-row p-3">
        <button onClick={handleSignIn} className="btn btn-accent px-10">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <div className="divider lg:divider-horizontal">OR</div>
        <button className="btn btn-accent px-10">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

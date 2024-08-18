import useAuth from '../../../../hooks/useAuth';

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3>
        Hi,Welcome Back!!{' '}
        <span className="text-green-400 font-semibold text-xl">
          {user ? user.displayName : ''}
        </span>
      </h3>
    </div>
  );
};

export default UserHome;

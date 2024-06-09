import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCarts from '../../../hooks/useCarts';

const FoodCart = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const location = useLocation();

  const { user } = useAuth();

  // from tan stac query refetching data in carts

  const [, refetch] = useCarts();

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = food => {
    console.log(food);
    if (user && user.email) {
      // send to server
      const cartItem = {
        menuId: _id,
        name,
        price,
        image,
        email: user.email,
      };

      axiosSecure
        .post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: ` ${name} has been ordered successfully`,
              showConfirmButton: false,
              timer: 2500,
            });
            refetch();
          }
        })
        .catch(err => {
          console.error('Error :', err.message);
        });
    } else {
      Swal.fire({
        title: 'Your are not Login?',
        text: 'Login to your account..Then add to cart  ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Click to here to login..',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="my-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="" />
        </figure>
        <p className="text-black absolute right-0 mr-12 text-xl font-semibold mt-16">
          {' '}
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn  btn-outline bg-slate-100 border-orange-400 border-0 mt-5 px-10 text-xl border-b-4"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;

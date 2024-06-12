import { FaEdit, FaTrash } from 'react-icons/fa';
import useMenu from '../../../../hooks/useMenu';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div>
      <h3 className="text-3xl font-semibold">Total Items: {menu.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button className=" btn btn-ghost text-2xl text-orange-400 hover:text-yellow-500">
                    <FaEdit></FaEdit>
                  </button>
                </th>
                <th>
                  <button className=" btn btn-ghost text-2xl hover:text-green-400 text-red-500 ">
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;

import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Shared/SectionTitle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
// for image hoisting
const imageHoistingApiKey = import.meta.env.VITE_imageApi;

const imageUploadApiKey = `https://api.imgbb.com/1/upload?key=${imageHoistingApiKey}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const result = await axiosPublic.post(imageUploadApiKey, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log(result.data);
    if (result.data.success) {
      const menuItemInfo = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: result.data.data.display_url,
      };
      const menuResult = await axiosSecure.post('/menu', menuItemInfo);
      console.log(menuResult.data);
      if (menuResult.data.insertedId) {
        reset();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: `${data.name}  Has been added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="What's New?"
        subHeading={'Add Item'}
      ></SectionTitle>

      <div>
        <form className="font-semibold" onSubmit={handleSubmit(onSubmit)}>
          {/* recipe  name  */}

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                {...register('name', { required: true })}
                type="text"
                required
                placeholder="Name"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className=" flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue="default"
                {...register('category', { required: true })}
                className="select select-accent w-full "
              >
                <option disabled value="default">
                  Select A Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price  */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register('price', { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered  w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register('recipe')}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control">
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input w-full max-w-xs my-5"
            />
          </div>

          <button className="btn bg-orange-500 w-full">
            Add Item
            <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;

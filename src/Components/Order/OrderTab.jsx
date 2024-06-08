import FoodCart from '../Shared/FoodCart/FoodCart';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-5">
            {items.map(item => (
              <FoodCart item={item} key={item._id}></FoodCart>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;

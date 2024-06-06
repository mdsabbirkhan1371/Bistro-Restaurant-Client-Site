// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../../../../public/assets/home/slide1.jpg';
import slider2 from '../../../../../public/assets/home/slide2.jpg';
import slider3 from '../../../../../public/assets/home/slide3.jpg';
import slider4 from '../../../../../public/assets/home/slide4.jpg';
import slider5 from '../../../../../public/assets/home/slide5.jpg';

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h4 className="text-center -mt-16 text-white text-4xl font-semibold">
            Salad
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="text-center -mt-16 text-white text-4xl font-semibold">
            Pizza
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h4 className="text-center -mt-16 text-white text-4xl font-semibold">
            Soup
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h4 className="text-center -mt-16 text-white text-4xl font-semibold">
            Cake
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h4 className="text-center -mt-16 text-white text-4xl font-semibold">
            Salad
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

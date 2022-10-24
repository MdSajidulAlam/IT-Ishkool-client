import React from 'react';
import banner1 from '../../assests/banner/image1.jpg'
import banner2 from '../../assests/banner/image2.jpg'
import banner4 from '../../assests/banner/image3.jpg'
// import banner5 from '../../assests/banner/image4.jpg'
const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img src={banner1} alt='' class="w-full rounded" />
        </div>
        <div id="item2" class="carousel-item rounded w-full">
          <img src={banner2} alt='' class="w-full" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src={banner4} alt='' class="w-full rounded" />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" alt='' class="w-full" />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>

        <a href="#item3" class="btn btn-xs">3</a>
        <a href="#item4" class="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Banner;
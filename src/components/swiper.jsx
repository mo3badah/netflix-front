// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import full from "../json/full.json";
//
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/thumbs";
//
// // import "../css/swip.css";
//
// // import required modules
// import { Autoplay, FreeMode, Navigation, Thumbs, Pagination } from "swiper";
//
// function Swipper(props) {
//   const [thumbsSwiper] = useState(null);
//   let fullData = [...full];
//   let slides = [];
//   for (let i = 0; i < fullData.length; i++) {
//     slides.push(
//       <SwiperSlide tag="li" key={`slide-${i}`}>
//         <div className="content">
//           <span>{fullData[i]["h2"]}</span>
//           <h3>{fullData[i]["h1"]}</h3>
//           <h4>{fullData[i]["p"]}</h4>
//           <a href="#" className="btn">
//             Order Now
//           </a>
//         </div>
//         <div className="image">
//           <img src={`/images/${fullData[i]["img"]}`} alt="" />
//         </div>
//       </SwiperSlide>
//     );
//   }
//   return (
//     <div className="home">
//       <Swiper
//           style={{  "--swiper-navigation-color": "green",
//           }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[Autoplay, FreeMode, Navigation, Thumbs, Pagination]}
//         className="mySwiper2"
//       >
//         {slides}
//       </Swiper>
//     </div>
//   );
// }
//
// export default Swipper;

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import VisaApply from './components/visaApply'
import Footer from "./components/footer";
// import "./styles.css";

import "./Dashboard.css";
import NavBar from "../../shared/components/Navigation/NavBar";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Dashboard = () => {
  return (
    <React.Fragment>
      <nav>
        <NavBar />
      </nav>
      <div className="container_dash">
        <img
          className="img_in_dashboard"
          src={
            "http://alamiyyah.usim.edu.my/wp-content/uploads/2021/08/study-2.png"
          }
        />
      </div>
      <div className="container_dash">
        <Swiper
       
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}r
          slidesPerView={1}
          // loop= {true}
          // loopSlides={2}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="img_in_slider"
              src={
                "https://cdn.educationmalaysia.gov.my/wp-content/uploads/2020/05/05234608/NEWS-BULLETING-eng-1110-x-456-px-01.png"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img_in_slider"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Hx7iNybaGnrF-o2mGLsMWZQizJk-FEK7Dg&usqp=CAU"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img_in_slider"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyVmW9gDqc1cY6upzb3a9BewRwof-JR3k9Q&usqp=CAU"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img_in_slider"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIBB-cKx-LrE_HJp8BD3oO3izyS48F5yLrA&usqp=CAU"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
{/* visa application part */}
< VisaApply kind ={'Visa'} link ={"/visaApplication"}/>
< VisaApply kind ={"i-kad"} link={"/ikadApplication"}/>
 <Footer/>
    </React.Fragment>
  );
};
export default Dashboard;

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../../src/images/sidebar.png";
import Ecommerce from '../../../src/images/ecommerce.png';
import HOC from "../../../src/images/hoc.png";
import MusicApp from "../../../src/images/musicapp.png";
import Book from "../../../src/images/portt.png";
import Taxi from "../../../src/images/taxi.png";
import Admin from "../../../src/images/admin.png";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";


export default function Portfolio(props)  {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) 
    return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    
    <div className="portfolio" id="portfolio">
    {/* heading */}
    <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading
        subHeading = {"Recent Projects"}
        title={'Portfolio📷'}
     />
</div>

{/* slider */}
<Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Book} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Taxi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Admin} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
};



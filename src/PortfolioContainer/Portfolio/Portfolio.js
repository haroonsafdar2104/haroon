import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Portfolio.css";
import Sidebar from "../../../src/images/sidebar.png";
import Ecommerce from '../../../src/images/ecommerce.png';
import HOC from "../../../src/images/hoc.png";
import MusicApp from "../../../src/images/musicapp.png";
import Book from "../../../src/images/portt.png";
import Taxi from "../../../src/images/taxi.png";
import Admin from "../../../src/images/admin.png";
import Booking from "../../../src/images/photoo.png";

import "swiper/css";

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
    
    <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading
        subHeading = {"Recent Projects"}
        title={'Portfolios📷'}
     />
</div>


<div class="container">
	<div class="row">
		<div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={Sidebar}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={Sidebar}
                         alt="Another alt text"></img>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={Ecommerce}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={Ecommerce}
                         alt="Another alt text"></img>
                </a>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={HOC}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={HOC}
                         alt="Another alt text"></img>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={MusicApp}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={MusicApp}
                         alt="Another alt text"></img>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={Book}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={Book}
                         alt="Another alt text"></img>
                </a>
            </div>



            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={Taxi}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={Taxi}
                         alt="Another alt text"></img>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={Admin}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={Admin}
                         alt="Another alt text"></img>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" 
                   data-image={Booking}
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src={Booking}
                         alt="Another alt text"></img>
                </a>
            </div>
        </div>

        
       
        
	</div>
</div>





    </div>




    
  );
};



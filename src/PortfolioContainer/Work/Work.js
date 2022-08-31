import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from "../../utilities/Animations";
import Amazon from "../../../src/images/amazon.png";
import Fiverr from "../../../src/images/fiverr.png";
import Facebook from "../../../src/images/Facebook.png";
import Upwork from "../../../src/images/Upwork.png";
import Shopify from "../../../src/images/Shopify.png";
import {Link} from 'react-scroll'
import { motion } from "framer-motion";
import "./Work.css";

export default function Work(props){
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
      };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


      return(
        <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading
        subHeading = {"Work For All.."}
        title={'Experience🔥'}
     />




     
     <div className="works" id="works">
     {/* left side */}
     <div className="w-left">
       <div className="awesome">
         {/* dark Mode */}
         <span >
           Works for All these
         </span>
         <span>Brands & Clients</span>
         <spane>
         I have been working as a freelancer for the last two years and I have
           <br />
           total 6 years of professional experience. Maintaining a steady cash
           <br />
           inflow is the biggest challenge. Till the time you are able to build long
           <br />
           term relationship with a client, everything is very uncertain. I have been
           <br />
           very lucky in this regards. I am currently working with two clients.
         </spane>
         <Link to="Contact" smooth={true} spy={true}>
           <button className="button s-button">Hire Me</button>
         </Link>
         <div
           className="blur s-blur1"
           style={{ background: "#ABF1FF94" }}
         ></div>
       </div>

       {/* right side */}
     </div>
     <div className="w-right">
       <motion.div
         initial={{ rotate: 45 }}
         whileInView={{ rotate: 0 }}
         viewport={{ margin: "-40px" }}
         transition={{ duration: 3.5, type: "spring" }}
         className="w-mainCircle"
       >
         <div className="w-secCircle">
           <img src={Upwork} alt="" />
         </div>
         <div className="w-secCircle">
           <img src={Fiverr} alt="" />
         </div>
         <div className="w-secCircle">
           <img src={Amazon} alt="" />
         </div>{" "}
         <div className="w-secCircle">
           <img src={Shopify} alt="" />
         </div>
         <div className="w-secCircle">
           <img src={Facebook} alt="" />
         </div>
       </motion.div>
       {/* background Circles */}
       <div className="w-backCircle blueCircle"></div>
       <div className="w-backCircle yellowCircle"></div>
     </div>
   </div>


</div>



      )
}
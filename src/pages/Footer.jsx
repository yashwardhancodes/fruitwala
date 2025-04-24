import React from 'react';
import { Link } from 'react-router-dom';
import wala from '../assets/wala.png'; 
import Vector from '../assets/Vector.png';
import Mob from '../assets/mob.png';
import Email from '../assets/em.png';
import Logo from '../assets/tech_surya.png';
import FacebookIcon from '/facebook.png';
import TwitterIcon from  '/Twitter.png';
import YouTubeIcon from '/Youtube.png';
import InstagramIcon from '/Instagram.png';

function Footer() {
  return (
    <div className='text-center leading-[40px] bg-[linear-gradient(180deg,_#FFD700_0%,_#016133_100%)] w-full flex flex-col items-center justify-center font-poppins overflow-x-hidden pt-2 px-4 sm:px-12'> 
      
      <h1 className='text-[28px] font-medium pt-9 text-white tracking-[2%]'>
        🌱 FreshFruitWala – Farm to Your Home!
      </h1>
      <p className='text-[#016133] text-[15px] font-normal'>
        Bringing you fresh, natural, and farm-picked fruits with love!
      </p>
      <div className='bg-white rounded-full'>
        <img src={wala} alt="Logo" className="object-contain w-32 p-4" />
      </div>

      <div className="space-y-3">
      <div className="flex mt-6 items-center gap-3 justify-center sm:justify-start md:justify-start">
  <img src={Vector} alt="Location Icon" className="w-5 h-6" />
  <p className='text-[#FFF4B8] text-[16px] font-normal'>
    Chhatrapati Sambhajinagar, MH, India
  </p>
</div>


        <div className="flex items-center justify-center gap-3">
          <img src={Mob} alt="Phone Icon" className="w-6 h-6" />
          <p className='text-[#FFF4B8] text-[16px] font-normal'>9889890989</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <img src={Email} alt="Email Icon" className="w-5 h-5" />
          <p className='text-[16px] text-[#FFF4B8] font-normal'>freshfruitwala@gmail.com</p>
        </div>

        <Link to="/privacy-policy">
          <button className='pb-6 mt-4 text-[#FFF4B8] text-[16px] font-normal'>
            Privacy Policy | Terms & Conditions
          </button>
        </Link>
      </div>

      <div className='border border-[#FFF4B8] w-full my-4'></div>

      <div className='flex flex-col sm:flex-row justify-between items-center mb-4 text-[#FFFFFF] w-full space-y-4 sm:space-y-0'>
             
                  <p className='text-sm sm:text-base'>&copy; All rights reserved.</p>
             <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
   

        <div className='flex items-center gap-2'>
          <p className='text-base'>Developed By</p>
          <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer">
            <img className='h-12' src={Logo} alt="Tech Surya Logo" />
          </a>
        </div>

   
      </div>
    </div>
  );
}

export default Footer;

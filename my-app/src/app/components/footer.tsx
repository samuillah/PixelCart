import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-[1920px] h-[774px] bg-[#0D0D0D]'>
        <div className='w-[1169px] h-[112px] pt-[120px] pl-[381px]'>
            <h1 className='w-[439px] h-[39.9px] font-bold text-[32px] leading-10 text-[#FF9F0D]'>St <span className='font-bold text-[32px] leading-10 text-white'>ill You Need Our Support ?</span></h1>
            <p className='w-[457px] h-[23.94px] text-base text-[#FFFFFF] border-b-[1px] border-[#FF9F0D]'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
            
      <div className='ml-[1200px] w-[459px] h-[55.86px] bg-[#FF9F0D] rounded'>
        <p className='w-32 h-6 text-base text-[#FFFFFF] flex flex-row justify-center'> Enter Your Email</p>
        <div className='w-[163px] h-[55.86px] rounded bg-[#FFFFFF] ml-[459px]'>
          <p className='w-[115px] h-6 text-base text-[#FF9F0D]'>Subscribe Now</p>
        </div>
        <div className='w-[1320px] h-[331px]'>
          

        </div>
        
      </div>
      <div className='w-[395.2px] h-[261.21px]'>
            <h1 className='w-[95.29px] h-[27.92px] font-bold text-xl text-[#FFFFFF]'>About Us.</h1>
            <p className='w-[395.2px] h-[103.69px] text-[18px] leading-[26px] text-[#FFFFFF]'>orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>

          </div>
          <div className='w-[78px] h-[72px]'>
          <Image
          src={"/images/Watch.svg"}
          alt="Image"
          width={78}
         height={72} />
         <div className='w-[149px] h-[74px]'>
          <h1 className='w-[137.77px] h-[25.84px] text-[18px] leading-[26px] text-[#FFFFFF]'>Opening Houres</h1>
          <p className='w-[148.75px] h-[21.87px] text-[14px] leading-[22px] text-[#FFFFFF]'>Mon - Sat(8.00 - 6.00)</p>
          <p className='w-[109.82px] h-[21.87px] text-[14px] leading-[22px] text-[#FFFFFF] '>Sunday - Closed</p>
         </div>

         <div className="w-[120.36px] h-[27.92px] flex justify-between">
            <h2 className="mb-6 text-[24px] font-bold text-xl uppercase text-white">
              Useful Links
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 w-[42.13px] h-[23.93px]">
                <a href="#" className="hover:underline text-white">
                  About
                </a>
              </li>
              <li className="mb-4 w-[41.12px] h-[23.93px]">
                <a href="#" className="hover:underline text-white">
                  News
                </a>
              </li>
              <li className="mb-4 w-[58.17px] h-[23.93px]">
                <a href="#" className="hover:underline text-white">
                  Partner
                </a>
              </li>
              <li className="mb-4 w-[40.12px] h-[23.93px]">
                <a href="#" className="hover:underline text-white">
                  Team
                </a>
              </li>

              <li className="mb-4 w-[41.12px] h-[23.93px]">
                <a href="#" className="hover:underline text-white">
                  Menu
                </a>
              </li>

              <li className="mb-4 w-[56.17px] h-[23.93px]">
                <a href="#" className="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0 w-[123.37px] h-[275.17px] flex justify-between">
            <h2 className="w-[56.17px] h-[27.92px] mb-6 text-[24px] font-semibold  uppercase text-white">
              Help?
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-bold text-xl">
              <li className="mb-4 w-[33.1px] h-[23.93px]">
                <a href="#" className="hover:underline text-white text-base">
                  FAQ
                </a>
              </li>
              <li className="mb-4 w-[123.37px] h-[23.93px]">
                <a href="#" className="hover:underline text-white text-base">
                  Term & conditions
                </a>
              </li>
              <li className="mb-4 w-[70.21px] h-[23.93px]">
                <a href="#" className="hover:underline text-white text-base">
                  Reporting
                </a>
              </li>
              <li className="mb-4 w-[108.33px] h-[23.93px]">
                <a href="#" className="hover:underline text-white text-base">
                  Documentation
                </a>
              </li>

              <li className="mb-4 w-[104.32px] h-[23.93px]">
                <a href="#" className="hover:underline text-white text-base">
                  Support Policy
                </a>
              </li>

              <li className="mb-4 w-[53.16px] h-[23.93px]">
                <a href="#" className="hover:underline text-white text-base">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
     
        </div>
    </div>
    
  )
}

export default Footer

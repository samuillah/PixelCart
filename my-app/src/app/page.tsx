import React from 'react'
import Image from 'next/image'
import Footer from './components/footer'

const MainPage = () => {
  return (
<div className='bg-black'>
  <div className='w-[1920px] h-[950px]'>
    <div className='w-[1320px] h-[87px]'>
      <h1 className='w-[109px] h-8 font-bold text-2xl text-white flex flex-col justify-center items-center'>Foodtuck</h1>
    </div>
    <div className='w-[25.28px] h-[492px]'>
      <div className='w-[158px] border-l-[1px] border-white'>
        <div>
          <Image
          src={"/images/Group1.svg"}
          alt="Image"
          width={25.28}
         height={107}/>
        </div>   
        </div>
    </div>
    <div className='w-[472px] h-[356px] rounded-[30px]'>
      <p className='w-[249px] h-10 text-[32px] leading-10 text-[#FF9F0D]'>Its Quick & Amusing!</p>
      <div className='w-[472px] h-[136px] mt-10'>
      <h1 className='font-bold text-[60px] leading-[68px] text-[#FF9F0D]'>Th <span className='font-bold text-[60px] leading-[68px] text-white'>e Art of speed
      food Quality</span></h1>
      <p className='w-[418px] h-12 text-base text-[#FFFFFF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Varius sed pharetra dictum neque massa congue</p>
      </div>
      <div className='w-[877.8px] h-[670px] flex justify-between items-end'>
      <Image
          src={"/images/Image1.svg"}
          alt="Image"
          width={877.8}
         height={670}/>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
  )
}

export default MainPage
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const App = () => {
  let [showContent, setShowContent] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
      .to('.vi-mask-group', {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: 'Expo.easeInOut',
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector('.svg').remove()
            setShowContent(true)
            this.kill()
          }
        }
      })
  })

  useGSAP(() => {
    if(!showContent) return;
    gsap.to('.main', {
      scale: 1,
      rotate: 0,
      duration: 3,
      delay: "-1",
      ease: 'Expo.easeInOut',
    })
    gsap.to('.sky', {
      scale: 1.1,
      rotate: 0,
      duration: 3,
      delay: "-.8",
      ease: 'Expo.easeInOut',
    })
    gsap.to('.bg', {
      scale: 1.1,
      rotate: 0,
      duration: 3,
      delay: "-.8",
      ease: 'Expo.easeInOut',
    })
    gsap.to('.girl', {
      scale: 1.4,
      x: '-50%',
      bottom: '-25%',
      rotate: 0,
      duration: 3,
      delay: "-.8",
      ease: 'Expo.easeInOut',
    })
    gsap.to('.text', {
      scale: 1.1,
      rotate: 0,
      duration: 3,
      delay: "-.8",
      ease: 'Expo.easeInOut',
    })

    const main = document.querySelector('.main')
    main?.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 40
      const moveY = (e.clientY / window.innerWidth - 0.5) * 40
      gsap.to('.main .text', { x: `${moveX * 0.5}%`, y: `${moveY * 0.5}%`, })
      gsap.to('.main .sky', { x: moveX, y: moveY, })
      gsap.to('.main .bg', { x: moveX * 1.7, y: moveY * 1.7, })
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 850 480" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="350"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent &&
        <div className='main rotate-[-10deg] scale-[1.7] w-full min-h-screen'>
          <div className="landing relative w-full h-screen bg-black overflow-hidden">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-8 ">
                <div className="lines flex flex-col gap-2">
                  <div className="line w-15 h-1.5 bg-white"></div>
                  <div className="line w-9 h-1.5 bg-white"></div>
                  <div className="line w-5 h-1.5 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[12px] text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-full">
              <img src="./sky.png" alt="sky-img" className='absolute inset-0 scale-[1.5] rotate-[-20deg] sky w-full h-full object-cover' />

              <img src="./bg.png" alt="bg-img" className="absolute inset-0 scale-[1.8] rotate-[-3deg] bg w-full h-full object-cover" />
              
              <div className="text text-white flex flex-col gap-2 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-20deg]">
                <h1 className='text-[12rem] leading-none -ml-40'>grand</h1>
                <h1 className='text-[12rem] leading-none ml-20'>theft</h1>
                <h1 className='text-[12rem] leading-none -ml-40'>auto</h1>
              </div>
              
              <img src="./girlbg.png" alt="bg-img" className="absolute girl -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]" />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className='h-[65px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="ps5 logo" />
            </div>
          </div>

          <div className="w-full flex items-center justify-center h-screen bg-black">
            <div className="cntnr  flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full overflow-hidden">
                <img
                  src="./imag.png"
                  alt="img problem"
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="rimg py-30 w-[30%] h-full overflow-hidden">
                <h1 className="text-8xl">still running</h1>
                <h1 className="text-8xl">not hunting </h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat laboriosam fuga magnam sit eius sunt ipsa facilis illum nesciunt cupiditate perferendis atque expedita esse, quisquam omnis harum. Voluptates, ipsa?</p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat laboriosam fuga magnam sit eius sunt ipsa facilis illum nesciunt cupiditate perferendis atque expedita esse, quisquam omnis harum. Voluptates, ipsa?</p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat laboriosam fuga magnam sit eius sunt ipsa facilis illum nesciunt cupiditate perferendis atque expedita esse, quisquam omnis harum. Voluptates, ipsa?</p>
                <button className='bg-amber-400 px-10 py-10 text-4xl leading-none rounded-lg text-black mt-10'>Download Now<i className="text-4xl text-black ri-arrow-down-line"></i></button>
                {/* <img
                  src="./"
                  alt="img problem"
                  className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>}

    </>
  )
}

export default App

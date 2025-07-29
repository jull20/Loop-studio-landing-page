import { useState } from 'react'
import './App.css'
import { createPortal } from 'react-dom';

export default function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <Header onOpen={() => setIsVisible(true)}/>
      <main className='sm:w-full sm:px-300 md:p-0 md:w-custom flex flex-col justify-start items-center sm:gap-y-1200 md-plus:gap-y-[182px] sm:mb-[98px] md:mb-[87px] md-plus:mb-[182px]'>
        <section className='w-full h-[650px] flex flex-col justify-center sm:items-center l:items-start'>
          <div className='absolute top-0 left-0 w-screen max-w-screen h-[650px] bg-center bg-cover bg-no-repeat contrast-125 md:bg-black/40 md:bg-blend-overlay sm:bg-[url(../../mobile/image-hero.jpg)] md:bg-[url(../../desktop/image-hero.jpg)]' />
          <h1 className='relative sm:top-[8px] md:top-[50px] max-w-[650px] text-header-l text-white uppercase border-2 border-white sm:p-300 md:p-500 text-pretty z-100'>Immersive experiences that deliver</h1>
        </section>
        <section className='w-full relative flex flex-col justify-start sm:items-center l-plus:items-start gap-y-600'>
          <img className='object-cover sm:object-center md:object-top sm:w-full sm:aspect-3/2 md:img-height-custom l-plus:w-auto' src="mobile/Bitmap.svg" alt="interactive" />
          <div className='flex flex-col justify-start items-center sm:gap-y-200 md:gap-y-300 l-plus:absolute l-plus:bg-white l-plus:-bottom-[1px] l-plus:right-0 l-plus:w-[541px] l-plus:pt-1200 l-plus:pl-1200 '>
            <h2 className='text-header-md text-center l-plus:text-left uppercase'>The leader in interactive VR</h2>
            <p className='text-preset-6 sm:px-300 md:px-0 w-full text-black/49 text-center l-plus:text-left'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </div>
        </section>
        <section className='w-full grid sm:grid-cols-1 md-plus:grid-cols-[minmax(0,_1fr)_157px] sm:gap-y-400 md-plus:gap-y-1000 items-center justify-items-center'>
          <h2 className='text-header-md text-center uppercase md-plus:row-1 md-plus:col-1 md-plus:justify-self-start sm:mb-200 md:mb-0'>OUR CREATIONS</h2>
          <Creations />
          <button className='text-preset-7 text-black uppercase border-1 border-black w-[157px] h-[40px] md-plus:row-1 md-plus:col-2 md-plus:justify-self-end hover:bg-black hover:text-white transition duration-500'>
            SEE ALL
          </button>
        </section>
      </main>
      <Footer />
      {isVisible && createPortal(<ModalMenu onClose={() => setIsVisible(false)}/>, document.body)}
    </>
  )
}

function Header({onOpen}: {onOpen: ()=>void}){
  return(
    <header className='sm:w-full sm:px-300 md:p-0 md:w-custom absolute top-800 left-1/2 -translate-x-1/2 z-100 flex flex-row justify-between'>
        <img className='sm:h-300 md:h-400 md-footer:justify-self-start' src="logo.svg" alt="logo" />
        <div className='sm:hidden md-plus:block'><Menu isInModal={false} /></div>
        <button className='sm:block md-plus:hidden' onClick={onOpen}><img className='md:w-400' src="icon-hamburger.svg" alt="menu button" /></button>
    </header>
  )
}

function Footer(){
  return(
    <footer className='w-full bg-black sm:py-700 md:py-500 md-plus:py-600 grid place-content-center'>
      <div className='sm:w-full sm:px-300 md:p-0 md:w-custom grid sm:justify-items-center md-footer:grid-cols-2 md-footer:grid-rows-2 sm:gap-y-500 md-footer:gap-y-300'>
        <img className='md-footer:justify-self-start' src="logo.svg" alt="logo" />
        <div className='flex flex-row gap-x-200 *:h-300 *:w-300 md-footer:justify-self-end'>
          <img src="icon-facebook.svg" alt="" />
          <img src="icon-twitter.svg" alt="" />
          <img src="icon-pinterest.svg" alt="" />
          <img src="icon-instagram.svg" alt="" />
        </div>
        <Menu isInModal={false} />
        <p className='text-white/50 text-preset-6 md-footer:justify-self-end'>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

function ModalMenu({onClose}: {onClose: ()=>void}){
  return(
    <div className='modalFlag w-screen h-screen bg-black absolute top-0 left-0 z-120 flex flex-row justify-center'>
      <div className='h-1/2 sm:w-full sm:px-300 md:p-0 md:w-custom relative sm:top-500 md:top-800 flex flex-col justify-between '>
        <div className='flex flex-row justify-between items-center'>
          <img className='sm:h-300 md:h-400' src="logo.svg" alt="logo" />
          <button onClick={onClose}><img className='sm:h-[18px] md:h-300' src="icon-close.svg" alt="logo" /></button>
        </div>
        <Menu isInModal={true} />
      </div>
    </div>
  )
}

function Menu({isInModal}: {isInModal:boolean}){
  const menuItems = ['About', 'Careers', 'Events', 'Products', 'Support'];
  const ulStyle = isInModal 
      ? '*:text-preset-5 *:uppercase sm:flex-col gap-y-300'
      : '*:text-preset-6 sm:flex-col md-footer:flex-row gap-x-200 gap-y-200';
  return(
    <nav className={'sm:row-2 md-footer:justify-self-start ' + (!isInModal && 'md-footer:h-[35px]')}>
      <ul className={'*:text-white cursor-pointer relative flex ' + ulStyle}>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className='hover:*:block'>
              {item}
              <hr className='hidden bg-white w-1/2 relative left-1/2 -translate-1/2 mt-100' />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function Creations(){
  return(
    <div className='w-full grid md-plus:grid-cols-3 l-plus:grid-cols-4 gap-x-400 gap-y-300 md-plus:col-span-full '>
      <Creation img='image-deep-earth.jpg'      name={<>deep    <br/> earth    </>}/>
      <Creation img='image-night-arcade.jpg'    name={<>night   <br/> arcade   </>}/>
      <Creation img='image-soccer-team.jpg'     name={<>soccer  <br/> team vr  </>}/>
      <Creation img='image-grid.jpg'            name={<>the     <br/> grid     </>}/>
      <Creation img='image-from-above.jpg'      name={<>from up <br/> above vr </>}/>
      <Creation img='image-pocket-borealis.jpg' name={<>pocket  <br/> borealis </>}/>
      <Creation img='image-curiosity.jpg'       name={<>the     <br/> curiosity</>}/>
      <Creation img='image-fisheye.jpg'         name={<>make it <br/> fisheye  </>}/>
    </div>
  )
}

function Creation({img, name}: {img:string, name:React.ReactNode}){
  return(
    <div className=' relative sm:bg-linear-to-l md-plus:bg-linear-to-b from-black/50 to-black/80 sm:h-[120px] md-plus:h-auto hover:from-grey-200 hover:to-grey-200 hover:*:text-black transition duration-500'>
      <img className='sm:block  md-plus:hidden w-full h-full mix-blend-overlay object-cover object-top' src={'./mobile/'  + img} alt="" />
      <img className='sm:hidden md-plus:block  w-full object-cover  mix-blend-overlay'  src={'./desktop/' + img} alt="" />
      <p className='absolute sm:left-200 sm:bottom-200 md:left-500 l:left-500 l:bottom-400 s sm:text-preset-5 l:text-preset-4 text-white uppercase transition duration-100'>{name}</p>
    </div>
  )
}
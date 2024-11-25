import './App2.css';
import { useRef, useState } from "react";
/*import chessimg2 from './chess.avif'*/
import img from './img.jpg'
import imgg2 from './imgg.jpeg'
import imgg3 from './imgg2.jpeg'
import coach from './coach.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Media from 'react-media';
import { FiMenu } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import Grp1 from './grp1.jpg';
import Grp2 from './grp2.jpg';
import Grp3 from './grp3.jpg';
import Grp4 from './grp4.jpg';
import DL from './DL.jpg'
function Create() {
    const [open,setOpen] = useState(false)
    const OurGrandmasters = useRef(null)
    const Testimonials = useRef(null)
    const Home = useRef(null)
    const About = useRef(null)
    const Contact = useRef(null)
    const Gallery = useRef(null)
    const events = useRef(null)
    /*const [isOpen,setIsOpen] = useState(false)*/     
    const scrollSection = (elementRef) => {
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:'smooth',
        })
    }
    return (
        <div className=" w-[100%] h-full bg-white top-0 "  >
            <nav className=" z-50 backdrop-blur-[10px] w-full bg-[#0044ff51] fixed  " >
                <ul className=" flex flex-wrap justify-between items-center p-5" >
                    <div className=' ' >
                        <li className= ' text-4xl font-bold cursor-pointer hover:text-[#2041ff] text-white ' onClick={() => scrollSection(Home)} >Home</li>
                    </div>
                    <Media query='(min-width:701px)' >
                        <div className=' sm:hidden md:flex lg:flex xl:flex ' >
                            <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-white' onClick={() => scrollSection(OurGrandmasters)} >Courses</li>
                            <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-white' onClick={() => scrollSection(Testimonials)} >Testimonials</li>
                            <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-white' onClick={() => scrollSection(About)} >About Us</li>
                            <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-white' onClick={() => scrollSection(Gallery)} >Gallery</li>
                            <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-white' onClick={() => scrollSection(events)} >Events</li>
                            <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-white' onClick={() => scrollSection(Contact)} >Contact Us</li>
                        </div>
                    </Media>
                    <Media query="(max-width:700px)" >
                        <>
                            <button className=' text-white hover:text-[#2041ff]' onClick={()=>setOpen(!open)} >
                                <FiMenu />
                            </button>
                            {
                                open &&
                                <div className=' bg-[#ffffff] z-50 fixed top-20 right-0 py-2 pb-3 ' >
                                    <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-black pr-10 py-1' onClick={() => scrollSection(OurGrandmasters)} >Courses</li>
                                    <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-black pr-10 py-1' onClick={() => scrollSection(Testimonials)} >Testimonials</li>
                                    <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-black pr-10 py-1' onClick={() => scrollSection(About)} >About Us</li>
                                    <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-black pr-10 py-1' onClick={() => scrollSection(Gallery)} >Gallery</li>
                                    <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-black pr-10 py-1' onClick={() => scrollSection(events)} >Events</li>
                                    <li className='cursor-pointer ml-10 hover:text-[#2041ff] text-black pr-10 py-1' onClick={() => scrollSection(Contact)} >Contact Us</li>
                                </div>
                            }
                        </>                        
                    </Media>
                </ul>
            </nav>
            <section ref={Home} className=' py-10' >
                <main className=" pt-2" >
                    <div>
                        <div className="bg-[#ffffff] text-center  " >
                        <div id='logo' className=" flex justify-center items-center " >
                                <img src={img} style={{width:"400px",height:"400px"}} alt="Chess Pieces" className=' mt-10 contrast-150' />
                            </div>
                            <div className=" inline-block  " >
                                <h1 className=" text-5xl font-bold leading-loose " >Darklight academy</h1>
                                <p>Where you learn chess with Professionals</p>
                                <button className="text-white hover:transition-all duration-500 ease-in-out bg-[#2041ff] px-4 py-2 rounded-md  hover:scale-110 hover:cursor-pointer mt-10 "  ><a href='https://docs.google.com/forms/d/e/1FAIpQLSdgHTSrYEhbO83YNYYJpiKJGuBIFax6eYmz5TJT7XrCTjws-w/viewform?usp=sf_link'>Book a demo class</a></button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <section ref={OurGrandmasters}>
                <div className=" pt-5" >
                    <div className=" text-center bg-[#fffffff6]" >
                        <div className=' mt-20' >
                            <h1 className=' text-4xl font-bold' >COURSES WE OFFER</h1>
                        </div>
                        <div className=" flex flex-wrap items-center justify-evenly text-center py-[16vh] " >
                            <div id="block" className=' w-96 border-2 rounded-lg py-10 px-4 shadow-lg transition-transform hover:scale-110 ' >
                                <div className=' mb-10 flex justify-center' >
                                    <img className=' rounded-lg m-10' src={imgg2} style={{width:"300px",height:"300px"}} alt="Chess Pieces" />
                                </div>
                                <p className=" font-bold text-4xl mb-5 " >
                                    INDIVIDUAL
                                </p>
                                <h1 className=' text-wrap text-sm font-normal' >Identify and nurture exceptional young chess talent</h1>
                            </div>
                            <div id="block2" className=' w-96 border-2 py-10 px-4 rounded-lg shadow-lg transition-transform hover:scale-110' >
                                <div className=' mb-10 flex justify-center' >
                                    <img className=' rounded-lg m-10' src={imgg3} style={{width:"300px",height:"300px"}} alt="Chess Pieces"  />
                                </div>
                                <p className=" font-bold text-4xl mb-5 ">GROUP</p>
                                <h1 className=' text-wrap text-sm font-normal' >Foster a supportive and inclusive environment </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section  ref={Testimonials}  >
                <div className=" pt-5" >
                    <div>
                        <div id="background" className=" flex flex-wrap justify-evenly items-center bg-[#000000f6] text-center pt-32 text-white " >
                            <div id="translate" className=" flex justify-center items-center mb-10" >
                                <img className=' grayscale' src={coach} style={{width:"400px",height:"300px"}} alt="Chess Pieces" />
                            </div>
                            <div className=" inline-block" >
                                <h1 className=" mb-6 text-3xl font-bold" >Our Coaches ♟️ </h1>
                                <div className=' w-80 px-10 ' >
                                    <p className=' text-left ' > Competitive Success: Our coaches have competed in
                                        numerous national and international tournaments,
                                        earning accolades and gaining valuable insights from
                                        high-level play.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={About} className=" " >
                <div className="" >
                    <div className=" bg-[#000000f6]" >
                        <div className=" flex flex-wrap items-center justify-evenly text-center py-[16vh] " >
                            <div className=" text-white w-[400px] inline-block" >
                            <h1 className=" mb-6 text-3xl font-bold" >About Us😀</h1>
                            <div className=' px-1' >
                           
                                    <p className=' leading-2 text-left ' > 
                                    Welcome to Darklight Chess Academy, 
                                    where passion meets strategy! 
                                    We are dedicated to nurturing chess enthusiasts of all ages
                                     and skill levels, 
                                     empowering them to think critically, 
                                     solve problems, and excel in the art of chess.
                                     At Darklight Chess, we believe chess is more than just a game—it&apos;s a journey of growth, 
                                     discipline, and creativity. 
                                     Whether you&apos;re a beginner looking to learn the basics or
                                      an advanced player aiming to refine your skills, 
                                     our experienced coaches provide personalized training tailored to your goals.
                                     Founded on a vision to inspire and educate,
                                      our academy combines modern teaching techniques with a focus on fundamental strategies, 
                                     ensuring that every student develops a strong foundation and a love for the game.
                                    Join us at Darklight Chess Academy and discover how every move 
                                    can illuminate your path to success—both on and off the board!
                                    Let&apos;s make your next move your best one.
                                    </p>
                            </div>
                            </div>
                            <div id="translate" className=" flex justify-center items-center mt-10" >
                                <img src={DL} style={{width:"400px",height:"400px"}} alt="Chess Pieces" />
                            </div>
                        </div>
                        <div className=" flex flex-wrap items-center justify-evenly text-center py-[16vh] " >
                            <div className=" text-white w-[400px] inline-block" >
                                <h1 className=" mb-6 text-3xl font-bold" >What we do👇</h1>
                                <div className=' px-10' >
                                <p className=' leading-5 text-left mb-5' > 
                                <b >Student-Centered Approach:</b> Our coaches
                                prioritize individual learning styles and tailor
                                their teaching methods to meet each
                                student&apos;s needs.
                                </p>
                                <p className=' leading-5 text-left mb-5' >
                                <b>Comprehensive Curriculum:</b> They follow a
                                structured curriculum designed to cover all
                                aspects of chess, from fundamental
                                principles to advanced strategies.
                                </p>
                                <p className=' leading-5 text-left mb-5' >
                                <b>Interactive Learning:</b> By incorporating
                                interactive lessons, real-time game analysis,
                                and practical exercises, our coaches ensure
                                an engaging and enriching learning
                                environment.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#000000f6]' ref={Gallery} >
                <h1 className=' text-4xl text-white text-center font-semibold' >
                    Gallery
                </h1>
                <div className=" flex flex-wrap items-center justify-evenly text-center py-[4vh] " >
                    <div id='translate' className=' w-96  py-0 px-4 mx-32 sm:mx-5 sm:py-0 rounded-lg  shadow-lg ' >
                        <div  className=' mb-2 sm:mb-2 flex justify-center' >
                            <img className=' rounded-lg m-10' src={Grp1} style={{width:"300px",height:"300px"}} alt="Chess Pieces" />
                        </div>
                    </div>
                    <div id='translate' className=' w-96  py-0 px-4 mx-32 sm:mx-5 sm:py-0 rounded-lg shadow-lg ' >
                        <div className=' mb-2 sm:mb-2 flex justify-center' >
                            <img className=' rounded-lg m-10' src={Grp2} style={{width:"300px",height:"300px"}} alt="Chess Pieces"  />
                        </div>
                    </div>
                    <div id='translate' className=' w-96  py-0 px-4 mx-32 sm:mx-5 sm:py-0 rounded-lg shadow-lg ' >
                        <div className=' mb-2 sm:mb-2 flex justify-center' >
                            <img className=' rounded-lg m-10' src={Grp3} style={{width:"300px",height:"300px"}} alt="Chess Pieces"  />
                        </div>
                    </div>
                    <div id='translate' className=' w-96  py-0 px-4 mx-32 sm:mx-5 sm:py-0 rounded-lg shadow-lg ' >
                        <div className=' mb-2 sm:mb-2 flex justify-center' >
                            <img className=' rounded-lg m-10' src={Grp4} style={{width:"300px",height:"300px"}} alt="Chess Pieces"  />
                        </div>
                    </div>
                </div>                   
            </section>
            <section ref={events} className=' bg-[#000000f6] py-[6vh]' >
                <div>
                    <h1 className='text-center text-white text-4xl font-semibold mb-10' >
                        Events
                    </h1>
                    <h2 className='text-center text-white text-xl font-thin mx-20' >
                        Currently there are no events😵 
                    </h2>
                </div>
            </section>
            <footer ref={Contact} className=" text-center bg-[#000] py-5 bottom-0" >
                <div className=' text-white mb-20 overflow-hidden ' >
                    <h1 className=' text-2xl mb-4 ' >Contact Us</h1>
                    <a className=' text-center flex justify-center items-center mb-6' href="https://wa.me/918300155259">
                        <div id='rotate' className=' text-2xl mr-4 text-[#4ac959]' ><FaWhatsapp/></div>
                        <label htmlFor="a" className=' text-white text-md' > +91 8300155259 &nbsp;
                        </label>
                    </a>
                    <div className=' text-center flex justify-center items-center mb-6'>
                        <div id='vibrate' className=' text-xl mr-4 text-sky-400' ><FaPhoneAlt/></div>
                        <label htmlFor="a" className=' text-white text-md' > +91 9345774349 &nbsp;
                        </label>
                    </div>
                    <div className=' text-center flex justify-center items-center ml-[90px]'>
                        <div id='vibrate' className=' text-xl mr-4 text-[#d63c3c]' ><a href="mailto:darklightchess64@gmail.com"><IoMail/></a></div>
                        <label htmlFor="a" className=' text-white text-md' > darklightchess64@gmail.com &nbsp;
                        </label>
                    </div>
                </div>
                <div>
                    <p className=" font-light text-sm text-[#ffffffd2]" >
                        © 2024 Dark_Night Chess Academy. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
  )
}
export default Create;
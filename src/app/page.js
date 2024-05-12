"use client"
import styles from "./page.module.css";
import { Josefin_Sans,Inter } from 'next/font/google'
import { useRef ,useState,useEffect} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import useScrollSnap from "react-use-scroll-snap";
import  Image  from "next/image";
const josen=Josefin_Sans({ subsets: ['latin'] })
const inter=Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const logoFont = localFont({src:'/jsMath-cmr10.ttf'})
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (

<div ref={scrollRef}> 
<nav className={styles.navbar}>
  <div className={styles.logoDiv}>
<Image src={'/logo.jpg'} width={50} height={50}/>
<h1 className={`${styles.logo} ${josen.logo}`}>
 
  
  Prayas
  </h1>
  </div>
        {windowDimensions.width>1000?
  <ul>

    <li>Home</li>
    <li>Donate</li>
    <li>Campaings</li>
    <li>Team</li>
  </ul>:<RxHamburgerMenu size={"2rem"} className={styles.hamburger} />
}
</nav>
<div className={styles.landing}>
  <h1 className={`${logoFont.className}`}>Prayaas</h1>
 
  <h2  className={`${styles.intro} ${josen.className}`}>Create &#9679;<span>Help  &#9679;</span><span>Explore</span></h2>
  <h3>
  Prayass Is a community of highly motivated students.we are large group students not as many as her exs but still large 
  </h3>
  <div className={styles.sideImage}>
    <div className={styles.container}>
      <div className={styles.mainRhombus}>
        <div className={styles.logoImageContainer}>
        <Image src={'/logo.svg'} width={400} height={400} />
        </div>
      </div>

    </div>
    <div className={styles.sideRhombus}>

    </div>
    <div className={styles.sideRhombus2}>

    </div>
  </div>

</div>
<div className={styles.visionPage}>
<div className={styles.tint}>
<h1 className={`${styles.vision} ${inter.vision}`}>Our Vision</h1>
<h2 className={`${styles.visionText} ${inter.visionText}`}>
  Our aim is do your mom lmao,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</h2>
  </div>
</div>

</div>

  );
}

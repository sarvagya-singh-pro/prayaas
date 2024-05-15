"use client";
import styles from "./page.module.css";
import { Josefin_Sans,Inter } from 'next/font/google'
import { useRef ,useState,useEffect} from "react";
import { Carousel } from '@mantine/carousel';
import { RxHamburgerMenu } from "react-icons/rx";
import { Center, Drawer,Image,Text,Tabs,Card,Title } from "@mantine/core";
import Map from './map'
import Wave from 'react-wavify'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'


const projectPrayaasCoreCommittee = {
    generalCommittee: [
        ['President', 'Sampurn Kumar'],
        ['Vice President', 'Divya Raj']
    ],
    operationsTeam: [
        'Divya Raj',
        'Amogh Anand Jha',
        'Anjali Sharma',
        'Ishika Nayra',
        'Adhyayan Kumar Singh',
        'Kritika Retolia'
    ],
    resourceTeam: [
        'Priyam Harnandka',
        'Divya Raj',
        'Satyam Shahi',
        'Kritika Retolia'
    ],
    techTeam: [
        'Sarvagya Singh',
        'Saksham Jha'
    ],
    researchWing: [
        'Amogh Anand Jha',
        'Divya Raj',
        'Adhyayan Kumar Singh',
        'Anjali Sharma'
    ],
    outreachTeam: [
        'Sarthak Sidhant',
        'Sampurn Kumar',
        'MD. Ayaan Azhar'
    ],
    ideationInCharges: [
        'Saksham Jha',
        'Sarthak Sidhant'
    ]
};


const josen=Josefin_Sans({ subsets: ['latin'] })
const inter=Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const logoFont = localFont({src:'.././jsMath-cmr10.ttf'})
function getWindowDimensions() {
  if(window){
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
}
export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const[drawer,Setdrawer]=useState(false)
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (window){
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (



<div > 

<Drawer  opened={drawer} size={"md"} position="right" onClose={()=>{Setdrawer(false)}}>
    <h1>Nigga</h1>

</Drawer>
<nav className={styles.navbar}>

  <div className={styles.logoDiv}>
<Image src={'/logo.jpg'} width={50} height={50}/>
<h1 className={`${styles.logo} ${josen.logo}`}>
 
  
  Prayaas
  </h1>
  </div>
        {windowDimensions.width>1000?
  <ul>

    <li>Home</li>
    <li>Donate</li>
    <li>Campaings</li>
    <li>Team</li>
  </ul>:<RxHamburgerMenu onClick={()=>{Setdrawer(!drawer)}} size={"2rem"} className={styles.hamburger} />
}
</nav>
<div className={styles.landing}>
  <h1 className={`${logoFont.className}`}>Prayaas</h1>
 
  <h2  className={`${styles.intro} ${josen.className}`}>Create &#9679;<span>Help  &#9679;</span><span>Explore &#9679;</span></h2>
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
  Our aim is do your mom lmao, and become a better human than her but that wont be hard Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi .
</h2>
  </div>
</div>
<div className={styles.donate}>
    <h1 className={`${styles.donateText} ${inter.vision}`}>Donate</h1>
    <h2>Please donate we need money and unlike her we cant even strippe</h2>
    <button className={styles.donateBtn}><span className={styles.donateBtnText}>Donate</span></button>
    <Image src={'/donate.svg'} className={styles.donateImg} mt={"md"} w={300} h={300}>
    </Image>
    <Wave fill='#DB0007'
        paused={false}
        className={styles.wave}
        options={{
          height: 5,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
</div>
<div className={`${styles.campaings} ${josen.className}`}>
    <h1>Campaigns</h1>
    <div className={styles.campaignContent}>
    {windowDimensions.width>1000?
        <Carousel  slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }} loop   className={styles.carousel} withIndicators w={550} height={300}>
        <Carousel.Slide><Image alt="profile"
        w={550}
        height={"100%"}
         src={"https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"}></Image></Carousel.Slide>
        <Carousel.Slide><Image alt="profile"
         
          w={550}
          height="100%"
          src={"https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"}></Image></Carousel.Slide>
       
         </Carousel>:  <Carousel  slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }} loop   className={styles.carousel} withIndicators w={300} height={300}>
        <Carousel.Slide><Image alt="profile"
        w={300}
        height={"100%"}
         src={"https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"}></Image></Carousel.Slide>
        <Carousel.Slide><Image alt="profile"
         
          w={300}
          height="100%"
          src={"https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"}></Image></Carousel.Slide>
       
         </Carousel>}
    <h3 className={inter.className}>
        In our campaings we found that she will ride anything with a pulse.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, lorem vitae aliquam facilisis, elit ante pulvinar lorem, eget ullamcorper nisi sapien vel lectus
    </h3>
    </div>


</div>

<div className={styles.chapter}>
    <h1 className={josen.className}>Chapters</h1>
  <Center>  <Map cords={[ 86.1511,23.6693]} ></Map></Center>

</div>

<div className={styles.team}>
   

       <h1 className={josen.className}>Core Committee </h1><br></br> 
       <Center>
<Tabs  color="red" variant="pills" classNames={styles.tab}  minw="80%" defaultValue="first">
      <Tabs.List>
       <Tabs.Tab value="first">General Committee</Tabs.Tab>
        <Tabs.Tab value="second" color="cyan">
          Operations Team
        </Tabs.Tab>
        <Tabs.Tab value="third" color="teal">
        Tech Team
        </Tabs.Tab>
        <Tabs.Tab value="fourth" color="grape">
        Resource Team
        </Tabs.Tab>
        <Tabs.Tab value="fifth" color="dark">
        Outreach Team
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        {
            projectPrayaasCoreCommittee.generalCommittee.map((el)=>{
                return(
                <Card mt="xl" shadow="sm" padding="lg" radius="md" withBorder>
                    <Text >{el[0]}</Text>
                    <Title order={2} fw={400} pt="md">{el[1]}</Title>
                </Card>)
            })
        }
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
      {
            projectPrayaasCoreCommittee.operationsTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                    <Text >{el}</Text>
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
      {
            projectPrayaasCoreCommittee.techTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                    <Text >{el}</Text>
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="fourth" pt="xs">
      {
            projectPrayaasCoreCommittee.resourceTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                    <Text >{el}</Text>
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="fifth" pt="xs">
      {
            projectPrayaasCoreCommittee.outreachTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                    <Text >{el}</Text>
                </Card>)
            })
        }
      </Tabs.Panel>
    </Tabs>
    </Center>


</div>
<footer>
    <h1>© 2024 All rights reserved</h1>
</footer>
</div>

  );
}

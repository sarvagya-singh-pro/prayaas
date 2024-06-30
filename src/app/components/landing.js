"use client";
import styles from "./page.module.css";
import { Josefin_Sans,Inter,Satisfy } from 'next/font/google'
import { useRef ,useState,useEffect} from "react";
import { Carousel } from '@mantine/carousel';
import { RxHamburgerMenu } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import { Center, Drawer,Image,Text,Tabs,Card,Title,Button,Badge, BackgroundImage } from "@mantine/core";
import Map from './map'
import Wave from 'react-wavify'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'

import { useMediaQuery } from 'react-responsive';
const projectPrayaasCoreCommittee = {
    generalCommittee: [
        ['President', 'Sampurn Kumar'],
        ['Vice President', 'Divya Raj']
    ],
    operationsTeam: [
        ["Team Lead",'Divya Raj'],
        'Anjali Sharma',
        'Ishika Nayra',
        'Adhyayan Kumar Singh',
        'Kritika Retolia'
    ],
    resourceTeam: [
        ["Team Lead",'Priyam Harnandka'],
        'Divya Raj',
        'Satyam Shahi',
        'Kritika Retolia'
    ],
    techTeam: [
        ["Tech Lead ",'Sarvagya Singh'],
        ["Tech Lead",'Saksham Jha']
    ],
    researchWing: [
        'Divya Raj',
        'Adhyayan Kumar Singh',
        'Anjali Sharma'
    ],
    outreachTeam: [
        ["Team Lead",'Sarthak Sidhant'],
        'Sampurn Kumar',
        'MD. Ayaan Azhar'
    ],
    ideationInCharges: [
        ["Ideation in charge","Sarvagya Singh"],
        ["Ideation in charge",'Saksham Jha'],
        ["Ideation in charge",'Sarthak Sidhant']
    ]
};


const josen=Josefin_Sans({ subsets: ['latin'] })
const inter=Inter({ subsets: ['latin'] })
const satisfy=Satisfy({ subsets: ['latin'],weight:['400'] })
import localFont from 'next/font/local'
const logoFont = localFont({src:'jsMath-cmr10.ttf'})
function getWindowDimensions() {
 
}
export default function Home() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
const home = useRef(null)
const donate = useRef(null)
 const campaign = useRef(null)
 const team = useRef(null)
    const[drawer,Setdrawer]=useState(false)

  return (



<div > 

<Drawer  transitionProps={{ transition: 'rotate-right', duration: 150, timingFunction: 'linear' }}  opened={drawer} size={"md"} position="right" onClose={()=>{Setdrawer(false)}}>
<Button onClick={()=>{home.current.scrollIntoView()}} w={"100%"} mt={"xl"} variant="transparent" color="dark">Home</Button>
<Button  onClick={()=>{donate.current.scrollIntoView()}}  w={"100%"}mt={"xl"} variant="transparent" color="dark">Donate</Button>
<Button onClick={()=>{campaign.current.scrollIntoView()}}  w={"100%"}mt={"xl"} variant="transparent" color="dark">Campaigns</Button>
<Button onClick={()=>{team.current.scrollIntoView()}}  w={"100%"}mt={"xl"} variant="transparent" color="dark">Team</Button>
</Drawer>
<nav className={styles.navbar}>

  <div className={styles.logoDiv}>
<Image src={'/logo.png'} width={50} height={50}/>
<h1 className={`${styles.logo} ${logoFont.className}`}>
 
  
  Prayaas
  </h1>
  </div>
        {!isSmallScreen ?
  <ul>

    <li onClick={()=>{home.current.scrollIntoView()}} >Home</li>
    <li onClick={()=>{donate.current.scrollIntoView()}}>Donate</li>
    <li onClick={()=>{campaign.current.scrollIntoView()}}>Campaings</li>
    <li onClick={()=>{team.current.scrollIntoView()}}>Team</li>
  </ul>:<RxHamburgerMenu onClick={()=>{Setdrawer(!drawer)}} size={"2rem"} className={styles.hamburger} />
}
</nav>
<main style={{transition:' all 1s ease-in'}} ref={ref}>
<div className={styles.landing} ref={home}>
  <h1 className={`${logoFont.className}`}>Prayaas</h1>
 
  <h2  className={`${styles.intro} ${josen.className}`}>Create &#9679;<span>Help  &#9679;</span><span>Explore &#9679;</span></h2>
  <h3>
  Welcome to Project Prayaas! We're a dynamic community of students from various schools across Bokaro Steel City, united by a common vision -  serving our community and thus, making a positive difference in the society. Join us in lighting up our communities with kindness and enthusiasm—your journey towards making an impact starts here!

  </h3>
  <div className={styles.sideImage}>
    <div className={styles.container}>
     <div className={styles.blob}>
      <Image src={'/kids.png'} w={451} height={451} />

     </div>
        
      </div>

    
    <div className={styles.sideRhombus}>

    </div>
    <div className={styles.sideRhombus2}>

    </div>
  </div>
  
</div>
<div className={styles.marq}>
<Marquee autoFill={true}>
  <Image w={200} ml={"xl"}  mr={"xl"} src={'/dps.png'}/>
  <Title order={1} ml={"xl"} mr={"xl"}c={"#2e6634"}>DPS Bokaro</Title>
  <Image w={150} ml={"xl"}  mr={"xl"}src={'/mgm.png'}/>
  <Title order={1} ml={"xl"} mr={"xl"} c={"#b02b27"}>MGM Bokaro</Title>
  <Image w={100} ml={"xl"}  mr={"xl"}src={'/chinmaya.png'}/>
  
  <Title order={1} ml={"xl"} mr={"xl"} c={"#000"}>Chinmaya Vidyalaya </Title>
  <Image w={150} ml={"xl"}  mr={"xl"}src={'/ggps.png'}/>
  
  <Title order={1} ml={"xl"} mr={"xl"} c={"#000"}>GGPS Bokaro </Title>
  
</Marquee>
</div>
<div className={styles.visionPage}>
<div className={styles.tint}>
    <br></br>
<h1 className={`${styles.vision} ${satisfy.className}`}>Our Vision</h1>
<h2 className={`${styles.visionText} ${inter.visionText}`}>
At Prayaas, our aim is to empower and uplift our local communities through two flagship campaigns: Sanjeevni and Disha.  Disha provides career counseling to underprivileged children, offering guidance and resources to help them achieve their dreams. Sanjeevni delivers CPR and First Aid demonstrations, equipping individuals with vital life-saving skills. Through these initiatives, we strive to foster hope, education, and safety, creating a brighter, more compassionate world. Join us in making a meaningful impact!
 </h2>
  </div>
</div>
<div ref={donate} className={styles.donate}>
    <br></br>
    <h1  className={`${styles.donateText} ${satisfy.className}`}>Donate</h1>
    <h2>We have embarked on a journey to bring about a positive change. But in this task, we need your help. By donating to Prayaas, you're directly contributing to our flagship campaigns, Sanjeevni and Disha. Every contribution, no matter the size, helps us continue our mission of empowerment, education, and safety. Together, we can create lasting change. Your support can make a world of difference!</h2>
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
<div ref={campaign} className={`${styles.campaings} ${josen.className}`}>
   <Center> <h1 className={satisfy.className}>Campaigns</h1></Center>
    <div className={styles.campaignContent}>
    {!isSmallScreen?
        <Carousel  slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }} loop   className={styles.carousel} withIndicators w={550} height={300}>
        <Carousel.Slide><Image alt="profile"
        w={550}
        height={300}
         src={"/campaign1.png"}></Image></Carousel.Slide>
        <Carousel.Slide><Image alt="profile"
         
          w={550}
          height={300}
          src={"/campaign2.png"}></Image></Carousel.Slide>
           <Carousel.Slide><Image alt="profile"
         
         w={550}
         height={300}
         src={"/campaign3.png"}></Image></Carousel.Slide>
           <Carousel.Slide><Image alt="profile"
         
         w={550}
         height={300}
         src={"/campaign4.png"}></Image></Carousel.Slide>
       
         </Carousel>:  
           <Carousel  slideSize={{ base: '100%', sm: '50%' }}
           slideGap={{ base: 'xl', sm: 2 }} loop   className={styles.carousel} withIndicators w={300} height={300}>
             <Carousel.Slide><Image alt="profile"
             w={300}
             height={300}
              src={"/campaign1.png"}></Image></Carousel.Slide>
             <Carousel.Slide><Image alt="profile"
              
               w={300}
               height={300}
               src={"/campaign2.png"}></Image></Carousel.Slide>
                <Carousel.Slide><Image alt="profile"
              
              w={300}
              height={300}
              src={"/campaign3.png"}></Image></Carousel.Slide>
                <Carousel.Slide><Image alt="profile"
              
              w={300}
              height={300}
              src={"/campaign4.png"}></Image></Carousel.Slide>
            
              </Carousel>}
    <h3 className={inter.className}>
    We're thrilled to share the success of our first Disha campaign at Utkramit Middle School, Ranipokhar! The response from students and teachers was overwhelmingly positive, with enthusiastic participation and heartfelt gratitude. The principal praised our efforts, highlighting the significant impact of our career counselling sessions. This incredible feedback fuels our passion and commitment to continue making a difference. Thank you to everyone who made this event a success—we look forward to many more!
          </h3>
    </div>


</div>

<div className={styles.chapter}>
    <h1 className={satisfy.className}>Chapters</h1>
  <Center>  <Map  cords={[ 86.1511,23.6693]} ></Map></Center>

</div>
<div ref={team} className={styles.team}>
   

<br></br>
       <h1 className={`${satisfy.className}`}>Core Committee </h1><br></br> 
       <Center>
<Tabs  color="red" variant="pills" mt={"xl"} classNames={styles.tab}  minw="80%" defaultValue="first">
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
        <Tabs.Tab value="sixth" color="lime">
        Ideation In-Charges
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        {
            projectPrayaasCoreCommittee.generalCommittee.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                    <Text >{el[1]}</Text>
                    <Badge color="red" variant="light" mt={"md"} p={"md"} radius={"md"} size="md">{el[0]}</Badge>
                   
                </Card>)
            })
        }
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
      {
            projectPrayaasCoreCommittee.operationsTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>

                    {typeof el!="string"?    <Text >{el[1]}</Text>:   <Text >{el}</Text>}
             
                    {typeof el!="string"? <Badge color="cyan" variant="light" mt={"md"} p={"md"} radius={"md"} size="md">{el[0]}</Badge>:<div></div>}
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
      {
            projectPrayaasCoreCommittee.techTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                 
                    {typeof el!="string"?    <Text >{el[1]}</Text>:   <Text >{el}</Text>}
             
                    {typeof el!="string"? <Badge color="teal" variant="light" mt={"md"} p={"md"} radius={"md"} size="md">{el[0]}</Badge>:<div></div>}
             
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="fourth" pt="xs">
      {
            projectPrayaasCoreCommittee.resourceTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                      
                      {typeof el!="string"?    <Text >{el[1]}</Text>:   <Text >{el}</Text>}
             
             {typeof el!="string"? <Badge color="grape" variant="light" mt={"md"} p={"md"} radius={"md"} size="md">{el[0]}</Badge>:<div></div>}
      
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="fifth" pt="xs">
      {
            projectPrayaasCoreCommittee.outreachTeam.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                       
                       {typeof el!="string"?    <Text >{el[1]}</Text>:   <Text >{el}</Text>}
             
             {typeof el!="string"? <Badge color="dark" variant="light" mt={"md"} p={"md"} radius={"md"} size="md">{el[0]}</Badge>:<div></div>}
      
                </Card>)
            })
        }
      </Tabs.Panel>
      <Tabs.Panel value="sixth" pt="xs">
      {
            projectPrayaasCoreCommittee.ideationInCharges.map((el)=>{
                return(
                <Card mt="md" shadow="sm" padding="lg" radius="md" withBorder>
                       
                       {typeof el!="string"?    <Text >{el[1]}</Text>:   <Text >{el}</Text>}
             
             {typeof el!="string"? <Badge color="lime" variant="light" mt={"md"} p={"md"} radius={"md"} size="md">{el[0]}</Badge>:<div></div>}
      
                </Card>)
            })
        }
      </Tabs.Panel>
    </Tabs>
    </Center>


</div>
<footer >
    <div className={styles.footer}>
        <div>
            <h3>Contact</h3>
            <ul>
            <a href="mailto:projectprayaasclub@gmail.com">   <li>projectprayaasclub@gmail.com</li></a>
            <a href="tel:+91 92414 89318">    <li>+91 92414 89318</li></a>
            </ul>

        </div>
        <div>
          <ul>
            <li>Terms Of service</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        
     </div>
     <h2 className={inter.className}>© {new Date().getFullYear()} All Rights Reserved </h2>
   
</footer>
</main>
</div>

  );
}

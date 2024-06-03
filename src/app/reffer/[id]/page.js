"use client";
import { useRouter,usePathname } from 'next/navigation';
import { useEffect } from 'react';
import requestIp from 'request-ip'
const Refferpage = () => {
    const router = useRouter()
    const pram=usePathname()
   
    useEffect(()=>{
        console.log(pram.split('/').pop())
        async function a(){
            const response = await fetch('https://geolocation-db.com/json/');
            const data = await response.json();
            
            await fetch('/api/verify_reffer',{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({uuid:pram.split('/').pop(),ip:data.IPv4})
                
            })
            await router.push('https://chat.whatsapp.com/Ezy8oMEKoqMHZAvu6kS4LL')
        }
        a()
       // 
   },[])

    return (
        <div>
            <p>Redirecting</p>      
              </div>
    );
}

export default Refferpage;
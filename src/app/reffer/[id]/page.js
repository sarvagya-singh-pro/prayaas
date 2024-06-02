"use client";
import { useRouter,usePathname } from 'next/navigation';
import { useEffect } from 'react';
const Refferpage = () => {
    const router = useRouter()
    const pram=usePathname()
   
    useEffect(()=>{
        async function a(){
            await fetch('/api/verify_reffer',{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({uuid:pram.split('/').pop()})
            })
        }
        a()
        router.push('https://web.whatsapp.com/')
   },[])

    return (
        <div>
            <p>Redirecting</p>      
              </div>
    );
}

export default Refferpage;
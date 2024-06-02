"use client"

import { Title ,Center,Text, TextInput,Button, Loader} from "@mantine/core";
import { useUrl } from 'nextjs-current-url';
import '@mantine/core/styles.css';
import { useState } from "react";
const page = () => {
    const { href: currentUrl, pathname } = useUrl() ?? {};
    const[name,SetName]=useState("")
    const [url,Seturl]=useState('')
    const[loading,SetLoading]=useState(false)
    return (<>{!loading?(
        <div>
            <Center><Title p={"xl"} pt={"xl"} fw={"lighter"}>Refer Prayass</Title></Center>
            <Center><TextInput placeholder="Name" value={name} onChange={(e)=>{SetName(e.target.value)}} w={"30rem"} size="md"/></Center>
            <Center><Button onClick={()=>{
                SetLoading(true)
                fetch('/api/reffer',{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({name:name.toLowerCase().trim()})
                }).then(async(res)=>{
                    
                    const json=await res.json()
                    if(json["ok"]){
                        Seturl(`${currentUrl}/${json["ok"]}`)
                    }
                    else{
                        alert("Name in use")
                    }
                    SetLoading(false)
                })
                
            }} mt="xl" color={"red"} size="lg" radius={"xs"}>Get Your Url</Button></Center>
            <Center><Text mt={"xl"}>{url}</Text></Center>
        </div>):(
            <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Loader color="red"/>
            </div>
        )}
        </>
    );
}

export default page;
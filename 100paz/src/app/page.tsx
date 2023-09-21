'use client'
import {useEffect, useState} from "react";


export default function Home() {

  const [date,setDate]=useState<Date>(new Date())

  const Date100=new Date("03/21/2024")


  useEffect(()=>{
    setInterval(()=>setDate(new Date()),1000);
  })

  return (
    <div className={"w-screen mt-10 text-center inline-block text-6xl align-middle"}>
      <h1>Do podniesienia 100 Kg zostało</h1><br/><br/>
      {Math.ceil((Date100.getTime()-date.getTime())/1000)} sekund<br/><br/>
      {Math.ceil((Date100.getTime()-date.getTime())/(1000*60))} minut <br/><br/>
      {Math.ceil((Date100.getTime()-date.getTime())/(1000*60*60))} godzin <br/><br/>
      {Math.ceil((Date100.getTime()-date.getTime())/(1000*60*60*24))} dni <br/><br/>
      Dnia {Date100.getDate()}/{Date100.getMonth().toString().length===1?`0${Date100.getMonth()+1}`:Date100.getMonth()+1}/{Date100.getFullYear()}
    </div>
  )
}

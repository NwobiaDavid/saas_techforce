/* eslint-disable react/prop-types */
import React from 'react'
import { FaNairaSign } from "react-icons/fa6";

const plans= [
    {
        id: 1,
        tier: "FREE",
        price: "0",
        desc: "Free for your whole team", 
        explain: "For individuals or teams looking to organize any project.",
        btnText: "get started"
    },
    {
        id: 2,
        tier: "STANDARD",
        price: "6,000",
        desc: "Per user/month if billed annually ($6 billed monthly)", 
        explain: "For small teams that need to manage work and scale collaboration.",
        btnText: "sign up now"
    },
    {
        id: 3,
        tier: "PREMIUM",
        price: "10,000",
        desc: "Free for your whole team", 
        explain: "For individuals or teams looking to organize any project.",
        btnText: "try for free"
    }
]

function Plan({plan}){
    return(
        <div className='rounded-xl p-3 h-[600px] bg-blue-500'>
            <h1>{plan.tier}</h1>
            <h1 className='flex  items-center'> <FaNairaSign size={18} /> {plan.price}</h1>
            <h1>{plan.desc}</h1>
            <h1>{plan.explain}</h1>
            <button className='border rounded-xl px-4 py-3'>{plan.btnText}</button>
        </div>
    )
}

export default function Pricing() {
  return (
    <div className='px-10 flex flex-col justify-center items-center py-6'>
      <div className='px-4 py-14 text-center'>
    <h1>Taskie is priced your way</h1>
    <p className='font-semibold text-2xl '>Trusted by millions, Taskie backed teams all around the world.</p>
     <button className='py-3 px-4 bg-yellow-400 rounded-xl'>compare plans</button>
      </div>
      <div className='grid w-[70%] gap-5 grid-cols-3'>
    {plans.map((plan)=> (
        <Plan key={plan.id} plan={plan} />
    ))}
      </div>
    </div>
  )
}

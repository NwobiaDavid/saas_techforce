/* eslint-disable react/prop-types */
import { FaNairaSign } from 'react-icons/fa6';

const plans = [
  {
    id: 1,
    tier: 'FREE',
    price: '0',
    desc: 'Free for your whole team',
    explain: 'For individuals or teams looking to organize any project.',
    btnText: 'get started',
  },
  {
    id: 2,
    tier: 'STANDARD',
    price: '6,000',
    desc: 'Per user/month if billed annually ($6 billed monthly)',
    explain:
      'For small teams that need to manage work and scale collaboration.',
    btnText: 'sign up now',
  },
  {
    id: 3,
    tier: 'PREMIUM',
    price: '10,000',
    desc: 'Free for your whole team',
    explain: 'For individuals or teams looking to organize any project.',
    btnText: 'try for free',
  },
];

function Plan({ plan }) {
  return (
    <div className="rounded-xl hover:shadow-blue-300 duration-200 shadow-md flex flex-col justify-between p-3 h-[400px] lg:h-[500px] border-2 border-blue-300">
      <div>
        <h1 className='lg:text-2xl text-xl py-3 font-semibold'>{plan.tier}</h1>
        <h1 className="flex lg:text-xl mb-2 text-lg items-center">
          {' '}
          <FaNairaSign size={18} /> {plan.price}
        </h1>
        <h1 className='text-sm opacity-70 '>{plan.desc}</h1>
        <h1 className='py-3 text-lg '>{plan.explain}</h1>
      </div>
      <div><button className="border hover:bg-blue-500 hover:text-white duration-200 rounded-xl px-4 mb-8 py-3">{plan.btnText}</button></div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div id='pricing' className="lg:px-10 px-5 flex flex-col justify-center items-center py-6">

      <div className="px-4 py-14 text-center">
        <h1>Taskie is priced your way</h1>
        <p className="font-semibold text-2xl ">
          Trusted by millions, Taskie backed teams all around the world.
        </p>
        <button className="py-3  mt-2 lg:mt-0 px-4 bg-yellow-400 rounded-xl">
          compare plans
        </button>
      </div>

      <div className="grid w-[90%] lg:w-[70%] gap-5 grid-cols-1 lg:grid-cols-3">
        {plans.map((plan) => (
          <Plan key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

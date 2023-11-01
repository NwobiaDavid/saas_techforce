import { FaRegPaperPlane } from "react-icons/fa6";
import img from '../assets/send-message-on-social-media-5687419-4755535.png'

export default function Contact() {
  return (
    <div className="flex-col justify-center py-10 items-center flex">
    <div className="text-center p-5">
        <h2 className="text-2xl">reach out to the Taskie Team</h2>
        <p className="text-xl">feel free to contact us, our customer service is running 24/7</p>
    </div>
        <div className="flex justify-center items-center ">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="w-[50%] ">
            <form className="flex flex-col" action="#">
                <input className="outline-none p-3 rounded-xl border mb-3" placeholder="your name" type="text" />
                <input className="outline-none p-3 rounded-xl border mb-3"  type="email" placeholder="your email" name="" id="" />
                <textarea className="outline-none p-3 rounded-xl border mb-5"  name="" id="" placeholder="write a letter..." cols="30" rows="5"></textarea>
                <button className="flex items-center justify-center bg-blue-300 rounded-lg w-[20%] py-3 px-4 " type="submit"><FaRegPaperPlane/> send </button>
            </form>
          </div>
        </div>
    </div>
  )
}

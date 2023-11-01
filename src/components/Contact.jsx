import { FaRegPaperPlane } from "react-icons/fa6";
import img from '../assets/send-message-on-social-media-5687419-4755535.png'

export default function Contact() {
  return (
    <div id="contact" className="flex-col justify-center py-10 items-center flex">

    <div className="text-center p-5">
        <h2 className="text-2xl font-semibold">reach out to the Taskie Team</h2>
        <p className="text-xl">feel free to contact us, our customer service is running 24/7</p>
    </div>

        <div className="flex justify-center lg:flex-row flex-col items-center ">
          <div>
            <img src={img} alt="" />
          </div>

          <div className="lg:w-[50%] w-[80%] flex justify-center ">
            <form className="flex flex-col lg:items-start items-center " action="#">
                <input className="outline-none p-3 focus:border-blue-700 duration-200 w-full rounded-xl border mb-3" placeholder="your name" type="text" />
                <input className="outline-none p-3 focus:border-blue-700 rounded-xl duration-200 w-full border mb-3"  type="email" placeholder="your email" name="" id="" />
                <textarea className="outline-none focus:border-blue-700 p-3 w-full duration-200 rounded-xl border mb-5"  name="" id="" placeholder="write a letter..." cols="30" rows="5"></textarea>
                <button className="flex items-center justify-center bg-blue-300 duration-200 hover:bg-blue-500 rounded-lg w-[40%] py-3 px-4  " type="submit"><FaRegPaperPlane/> <span className="ml-2">send</span> </button>
            </form>
          </div>
        </div>

    </div>
  )
}

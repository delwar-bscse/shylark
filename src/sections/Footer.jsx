import { upperFooter } from "../constants";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex max-md:flex-col justify-between items-center py-2 font-poppins bg-[#C2A5F9] w-full min-h-[124px] px-6 max-md:py-8">
        <div className="flex-1">
          <ul className="flex max-md:flex-col max-md:my-6 md:flex-wrap gap-3 justify-between text-white">
            {upperFooter.map((item, i)=>(
              <li key={i} className="hover:text-red-100">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center text-white py-2 md:ms-12">
          <button className="border-[2.5px] px-4 py-2 w-[250px] rounded-full hover:bg-white hover:text-gray-500 hover:border-gray-400 focus:outline-none focus:right focus:ring-gray-100 duration-500">SUBSCRIBE TO OUR NEWS</button>
        </div>
      </div>
      <div className="flex max-sm:flex-col justify-between items-center bg-[#9E78E8] min-h-[63px] text-slate-200 font-poppins text-sm py-3 px-6 max-md:py-8">
        <div>
          <ul className="flex max-md:flex-col gap-5">
            <li><a href="#" className="hover:text-white">&#169; Capitalmind 2022</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">A Website by Skylark Creative</a></li>
          </ul>
        </div>
        <div className="max-md:pt-6 pb-3 max-md:text-xl">
          <a href="#" className="flex max-md:justify-start gap-2 items-end hover:text-white">
          <span className="text-3xl max-md:text-4xl"><RiLinkedinFill /></span>
          <span>follow us linkedin</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
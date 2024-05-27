import Button from "./Button"

const ServiceCard = ({icon,title,desc,btn,btnTxtColor,bgColor}) => {
  return (
    <div className={`relative ${bgColor} max-sm:w-full sm:w-1/2 lg:w-1/3 min-h-[588px]`}>
      <div className=" py-14 px-20">
        <div className=" min-h-[250px] flex flex-col justify-end">
          <div>
            <img src={icon} alt="Services" width={100} height={100} />
          </div>
          <h1 className="after:relative after:h-[5px] after:w-1/2 after:bg-gray-600 after:block  after:top-5 text-4xl max-lg:text-3xl py-4 font-poppins font-semibold">{title}</h1>
        </div>
        <ul className="ms-6 font- text-gray-800 my-8 ">
          {desc?.map((item,i)=>(
            <li key={i} className="text-2xl list-square py-1">{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute right-5 bottom-5">
        <Button label={btn} textColor={btnTxtColor} bgColor={bgColor}/>
      </div>
    </div>
  )
}

export default ServiceCard
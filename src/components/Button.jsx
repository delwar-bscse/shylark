
const Button = ({label}) => {

  return (
    <button className={`px-3 sm:px-5 lg:px-7 py-2 font-poppins text-md lg:text-lg leading-none rounded-full border-[2.5px] text-white border-white uppercase hover:bg-slate-100 hover:text-gray-500 hover:border-gray-400 duration-300`}>
      {label}
    </button>
  )
}

export default Button
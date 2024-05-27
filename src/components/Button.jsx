
const Button = ({label}) => {

  return (
    <button className={`px-7 py-4 font-poppins text-lg leading-none rounded-full border-[2.5px] text-white border-white uppercase hover:bg-slate-100 hover:text-gray-500 duration-500`}>
      {label}
    </button>
  )
}

export default Button
import MySlider from "../components/MySlider"

const Transaction = () => {
  return (
    <div className="mb-10 pb-14 pt-10">
      <div className="relative flex max-sm:flex-col justify-between">
        <h3 className=" max-sm:pb-4 ps-10 after:relative after:h-[2px] after:w-[130px] after:bg-gray-400 after:block  after:top-6 text-2xl max-md:text-4xl mb-20 font-semibold font-poppins text-gray-600">Transactions</h3>
        <div className="sm:pe-10 max-sm:absolute top-[85px] right-12">
          <button className="border-[2px] border-gray-500 px-4 py-2 rounded-full hover:text-[#C2A5F9] hover:bg-white focus:outline-none focus:right focus:ring-red-100 duration-500  max-sm:text-sm">VIEW ALL TRANSACTIONS</button>
        </div>
      </div>
      <div className="">
        <MySlider />
      </div>
    </div>
  )
}

export default Transaction
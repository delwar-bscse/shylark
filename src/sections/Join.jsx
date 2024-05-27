import { join } from "../assets/images"
import Button from "../components/Button"

const Join = () => {
  return (
    <section className="mb-10">
      <div className="flex max-lg:flex-col-reverse">
        <div className="lg:w-1/2 bg-[#706863]">
          <div className="max-lg:m-6 md:mx-auto md:max-w-[500px] max-lg:mt-[100px] lg:mt-[150px] text-white ">
            <h3 className="after:relative after:h-[1px] after:w-1/3 after:bg-white after:block  after:top-5 text-3xl max-md:text-4xl mb-10">Neque tortor porttitor ornare ultrices. Risus eget vel maecenas</h3>
            <p className=" text-slate-200 mb-10 text-xl">Lorem ipsum dolor sit amet consectetur. Sollicitudin ac egestas rutrum eget urna. Risus eget congue duis diam. Etiam nisl quisque ut sed ac. Neque tortor porttitor ornare ultrices. Risus eget vel maecenas aliquam. Amet euismod purus turpis velit. Eget sem integer urna odio.</p>
            <div className="flex gap-3 max-md:flex-col max-md:max-w-[300px] max-md:mx-auto">
              <Button label="join the team" />
              <Button label="meet the team" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={join} alt="Join The Team" />
        </div>
      </div>
    </section>
  )
}

export default Join
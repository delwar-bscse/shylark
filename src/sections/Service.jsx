import ServiceCard from "../components/ServiceCard"
import { serviceInfo } from "../constants"

const Service = () => {
  
  return (
    <section className="mb-10">
      <div>
        <div className="flex flex-wrap">
          {serviceInfo.map((item,i)=>(
            <ServiceCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
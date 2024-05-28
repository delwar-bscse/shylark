
const NavItems = ({items}) => {
  return (
    <div>
      <ul className="flex justify-between">
        {items.map((item,i)=>(
          <li key={i} className="text-[13px] font-poppins xl:tracking-widest">
            <a href={item.navUrl}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavItems
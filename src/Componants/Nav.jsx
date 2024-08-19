import H1 from "./H1"
const Nav = () => {
    const navlinks =[
        {name: "achivement", link:"#achivement"},
        {name: "about", link:"#about"},
        {name: "contact", link:"#contact"},
        {name: "help", link:"#help"},
    ]
  return <nav>
    <ul className="Nav">
     {navlinks.map((v,i)=>
     <li key={i} >
        <a href={v.link}>{v.name}</a>
    </li>
    )}  
    </ul>
  </nav>
}
export default Nav






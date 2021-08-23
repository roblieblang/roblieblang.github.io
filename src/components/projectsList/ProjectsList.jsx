import "./projectsList.scss"

export default function ProjectsList({id, title, active, setSelected}) {
    return <li className={active ? "portfolioList active" : "portfolioList"} 
    onClick={()=>setSelected(id)}
    > 
        {title}
    </li>
}

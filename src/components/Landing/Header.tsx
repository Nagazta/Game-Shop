import {useNavigate} from 'react-router-dom';
import '../styles/header.css'
export default function Header() {
  
  const navigate = useNavigate();
  const pages = [ 
    {name: 'Home', path: "/home"},
    {name: 'Games', path: "/games"},
    {name: "About Us", path: "/about"},
    {name: "Contact Us", path: "/contact"},
  ]

  return (
    <div className="header">
        <h1 className='head'>XP Market</h1>

        <nav className='nav-bar'>
            {pages.map((page)=> (
                <button className='nav-button'
                    key={page.name}
                    onClick={() => navigate(page.path)}
                >
                    {page.name}
                </button>
            ))}
        </nav>
        <div className='nav-right'>
            <button className='nav-button'>
                Sign In
            </button>
            <button className='get-Started'>
                Get Started
            </button>
        </div> 
    </div>
  )
}

 
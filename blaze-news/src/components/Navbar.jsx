import Logo from "../../public/images/blaze_logo.svg"
import Up from "../../public/images/trending_up.svg"
import Down from "../../public/images/trending_down.svg"
export const Navbar = () => {
  return (<>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns=""
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Explore</a>
          <ul className="p-2">            
          <li><a>Entertainment</a></li>
            <li><a>Business</a></li>
            <li><a>Sports</a></li>            
            <li><a>Health</a></li> 
          </ul>
        </li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
    <img src={Logo} alt="blaze_logo" className="h-10"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Explore</summary>
          <ul className="p-2">            
            <li><a>Entertainment</a></li>
            <li><a>Business</a></li>
            <li><a>Sports</a></li>            
            <li><a>Health</a></li>                      
          </ul>
        </details>
      </li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-xl">Login</a>
  </div>
</div>
<hr className="h-px bg-gray-900 border-0 dark:bg-gray-900"/>
<div className="flex justify-between mx-4 my-2">
    <div>
      <div className="text-left text-sm font-semibold	sm:text-xl">Discover latest news</div>
      <div className="text-left text-sm font-semibold	sm:text-xl">through Blaze.</div>
    </div>
    <div className=" text-center">
      <div className="text-right text-xs sm:text-sm">Tuesday, Aug 6, 2024</div>
      <div className="text-right text-xs sm:text-sm">12:28:12pm</div>
    </div>    
</div>
<div className="flex justify-between mx-4 my-2 text-xs sm:text-sm">
      <div>
        <div>ONGC</div>
        <div className="flex"><div className="text-green-500">7.27 </div>&nbsp;<img src={Up} className="h-4"/></div>        
      </div>
      <div>
        <div>ADANIPORTS</div>
        <div className="flex "><div className="text-green-500">9.45 </div>&nbsp;<img src={Up} className="h-4"/></div>        
      </div>
      <div>
        <div>ICICIBANK</div>
        <div className="flex"><div className="text-red-500">-0.15 </div>&nbsp;<img src={Down} className="h-4"/></div>        
      </div>
      <div>
        <div>TATAMOTORS	</div>
        <div className="flex "><div className="text-green-500">4.15 </div>&nbsp;<img src={Up} className="h-4"/></div>        
      </div>
      <div>
        <div>TITAN</div>
        <div className="flex"><div className="text-red-500">-3.30 </div>&nbsp;<img src={Down} className="h-4"/></div>        
      </div>
      <div>
        <div>WIPRO</div>
        <div className="flex "><div className="text-green-500">5.75 </div>&nbsp;<img src={Up} className="h-4"/></div>        
      </div>
    </div>
</>
  )
}

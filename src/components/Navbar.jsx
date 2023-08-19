const Navbar = () =>{
    return(
  <div className="navbar bg-primary w-[22rem] md:w-full mt-4 rounded-full font-medium font-aku">
           <div className="navbar-start w-[43%]">
  <div className="flex-1">
    <a className="ml-4 normal-case text-2xl text-base-100 font-bold">monSYS</a>
  </div>
      
    
  </div>
  {/* <div className="navbar-center hidden lg:flex text-base-100">
    <ul className="menu menu-horizontal mr-7 bg-primary">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 border-primary border-2 text-primary">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div> */}
</div>
    )
}
export default Navbar;
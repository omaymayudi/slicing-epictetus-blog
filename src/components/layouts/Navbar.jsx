import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Container from "../elements/Container";
const Navbar = () => {
  const pathName = useLocation();

  const [offCanvas, setOffCanvas] = useState(false)

  const [search, setSearch] = useState(false)
 
  const [dropdown, setDropdown] = useState(false);
  const dropdownList =[
    {
      menu: "Internet", herf: "#"
    },
    {
      menu: "Books", herf: "#"
    },
    {
      menu: "Open Source", herf: "#"
    },
  ]
  return (
    <nav className="py-10">
      <Container>
        <div className="flex text-white items-center">
          <div className="w-3/12 lg:hidden">
          <button onClick={() => setOffCanvas(!offCanvas)}><span className="text-2xl font-bold"><GiHamburgerMenu /></span></button>
          </div>
          <div className="lg:w-2/12 w-6/12 items-center flex mr-24 md:justify-start lg:justify-start justify-center">
            <NavLink to="/" className="flex  items-center">
              <div className="flex bg-gray-500 items-center w-10 h-10 rounded justify-center mr-4 shadow-2xl">
                E
              </div>
              Epictetus
            </NavLink>
          </div>

          <div className="lg:hidden w-3/12 ">
              <button className="font-bold" onClick={() => setSearch(!search)}>
              <span className="flex justify-end text-2xl ">
                <FiSearch/>
              </span>
              </button>
          </div>

          <div className={`lg:w-8/12 w-full bg-gradient-to-b lg:bg-none lg:static lg:h-auto from-gray-600 to-gray-900 fixed top-0 h-full transition-all p-10 ${offCanvas ? 'left-0' : '-left-full'}`}>
            <button onClick={() =>setOffCanvas(false)}  className="absolute top-10 right-10 text-2xl font-bold lg:hidden"><span><IoClose /></span></button>
            <ul className="flex lg:gap-11 lg:items-center lg:flex-row flex-col gap-5">
              <li className={`${pathName.pathname === "/posts" ? "underline" : ""}`}>
                <NavLink to="/posts"  className={`hover:underline`}>
                  UI Desain
                </NavLink>              
                </li>
                <li className={`${pathName.pathname === "/postsss" ? "underline" : ""}`}>
                <NavLink to="/posts"  className={`hover:underline`}>
                  Fort-End
                </NavLink>              
                </li>
                <li className={`${pathName.pathname === "/hghdh" ? "underline" : ""}`}>
                <NavLink to="/posts"  className={`hover:underline`}>
                  Back-ENd
                </NavLink>              
                </li>
              <li className="relative">
                <a 
                  className="hover:underline cursor-pointer flex "
                  onClick={() => setDropdown(!dropdown)}>
                  Lainnya <span className="ml-2 pt-1"><FaChevronDown /></span>
                </a>
                {dropdown && (
                <ul className="absolute w-[200px] bg-gray-800 mt-4 rounded shadow-2xl">
                  {dropdownList.map(({menu, herf}) => (
                  <li key={menu} className="border-b border-b-white/5 last:border-0">
                    <a href={herf} className="flex py-3 px-6 hover:bg-gray-700/60"> 
                    {menu}</a>
                    </li>
                    ))}
                </ul>
                )}
              </li>
            </ul>
          </div>
          <div className={`lg:w-2/12 absolute w-full lg:static px:10  px-10 left-0 transition-all lg:px-0 ${search ? 'top-10' : '-top-40'}`}>
          <button onClick={() =>setSearch(false) } className="absolute top-12 right-10">
            <span className="text-2xl lg:hidden"><IoClose /></span>
            </button>
           <div className="relative flex items-center w-full">
            <i className="absolute text-gray-500 ml-3">  <FiSearch  />    </i>    
            <input type="text" className="bg-gray-700 py-3 lg:px-6 rounded-lg lg:rounded-full lg:pl-8 w-full" placeholder="Search..."/>
           </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

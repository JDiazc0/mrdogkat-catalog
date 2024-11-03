import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconsSvg } from "../utils/Icon";
import { menuItems } from "../data/NavItems";

//import styles from "../styles/NavBar.css";

function NavBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed w-screen text-secondary-500 z-50 bg-white font-Epilogue">
        <nav className="flex items-center p-2">
          <div className="flex items-center justify-start w-2/5">
            <img src={IconsSvg.LogoMr} alt="Mr.DogKat" className="h-12 mx-2" />
            <h1 className="font-Signatra text-3xl m-2 hidden md:block">
              Mr.DogKat
            </h1>
          </div>
          <div className="items-center justify-center text-2xl w-3/5 hidden md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`mx-5 group font-medium`}
                onClick={() => setActiveItem(item.to)}>
                <span
                  className={` ${
                    activeItem === item.to
                      ? "text-primary-500"
                      : "group-hover:text-primary-500"
                  }`}>
                  {item.name}
                </span>
                <div
                  className={`h-1 rounded ${
                    activeItem === item.to
                      ? "bg-primary-500"
                      : "group-hover:bg-primary-500 group-hover:animate-line-fill"
                  }  `}></div>
              </Link>
            ))}
          </div>

          {/** Movil Menu */}

          <div className="flex justify-end w-3/5 md:hidden">
            <button type="button" title="menu" onClick={() => handleMenu()}>
              {isMenuOpen ? (
                <img src={IconsSvg.CloseMenu} alt="" className="h-12" />
              ) : (
                <img src={IconsSvg.Menu} alt="" className="h-12" />
              )}
            </button>
          </div>
        </nav>
        <div
          className={`md:hidden text-2xl transition-all duration-500 easi-in-out transform overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col items-center justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`my-5 group font-medium`}
                onClick={() => setActiveItem(item.to)}>
                <span
                  className={` ${
                    activeItem === item.to
                      ? "text-primary-500"
                      : "group-hover:text-primary-500"
                  }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;

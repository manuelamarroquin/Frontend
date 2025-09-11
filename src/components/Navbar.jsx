import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false); // cerrar menú móvil
    setSubmenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-blue-900 text-white flex items-center justify-between px-5 h-14 z-50">
        <div className="font-bold text-lg">Logo</div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-full bg-white rounded"></span>
          <span className="block h-0.5 w-full bg-white rounded"></span>
          <span className="block h-0.5 w-full bg-white rounded"></span>
        </button>

        <ul
          className={`
            md:flex md:items-center md:static absolute top-14 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent
            transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
          `}
        >
          <li
            className="relative group cursor-pointer md:px-4 py-3 md:py-0 border-b border-blue-800 md:border-none"
            onClick={() => setSubmenuOpen(!submenuOpen)}
            tabIndex={0}
            onKeyPress={(e) => { if(e.key === 'Enter') setSubmenuOpen(!submenuOpen)}}
            aria-haspopup="true"
            aria-expanded={submenuOpen}
          >
            Nosotros
            {/* Flecha hacia abajo */}
            <span className="ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-200">&#9662;</span>

            {/* Submenú */}
            <ul
              className={`
                md:absolute md:top-full md:left-0 md:bg-blue-800 md:rounded-md md:shadow-lg md:min-w-[150px]
                md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible
                ${submenuOpen ? 'block' : 'hidden'} md:block
              `}
              onClick={(e) => e.stopPropagation()} // evitar que cierre submenú al hacer click dentro
            >
              {['quienes-somos', 'vision', 'mision', 'contactanos'].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-blue-700 cursor-pointer whitespace-nowrap"
                  onClick={() => handleScroll(item)}
                >
                  {item === 'quienes-somos' ? 'Quiénes somos' : item.charAt(0).toUpperCase() + item.slice(1)}

                </li>
              ))}
            </ul>
          </li>

          <li
            className="md:px-4 py-3 md:py-0 border-b border-blue-800 md:border-none cursor-pointer hover:bg-blue-800"
            onClick={() => handleScroll('Login')}
          >
            Login
          </li>
          <li
            className="md:px-4 py-3 md:py-0 border-b border-blue-800 md:border-none cursor-pointer hover:bg-blue-800"
            onClick={() => handleScroll('RegistroVotante')}
          >
            Registrarse
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

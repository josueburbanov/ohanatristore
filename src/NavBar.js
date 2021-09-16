import React from "react";
import logo from './ohana_noiso.svg';

const NavBar = () => {
    return (<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gradient-to-r from-green-400 to-blue-500">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img src={logo} class="h-12 w-24 lg:h-8 lg:w-20 ml-3" alt="logo" />
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-black font-semibold hover:text-white mr-4">
          Inicio
        </a>
        <a href="#responsive-header" class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-black font-semibold hover:text-white mr-4">
          Acerca
        </a>
        <a href="#responsive-header" class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-black font-semibold hover:text-white">
          Productos
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm ml-4 px-4 py-2 leading-none border rounded text-black font-semibold border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Login</a>
      </div>
    </div>
  </nav>);

}

export default NavBar;
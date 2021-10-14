import React from "react";
import { Link } from 'react-router-dom';
import ItemListContainer from "./ItemListContainer";
import logo from '../ohana_noiso.svg'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap p-6 bg-transparent">
            <Link to="/">
                <img src={logo} class="h-12 w-24 lg:h-8 lg:w-20 ml-3 flex-shrink-0 mr-6" alt="logo" />
            </Link>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to="/category/triatlon">
                        <a class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-black font-semibold hover:text-white mr-4">
                            Triatlon
                        </a>
                    </Link>
                    <Link to="/category/ciclismo">
                        <a class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-black font-semibold hover:text-white mr-4">
                            Ciclismo
                        </a>
                    </Link>
                </div>
                <div>
                    <a href="#" class="inline-block text-sm ml-4 px-4 py-2 leading-none border rounded text-black font-semibold border-black hover:border-transparent hover:text-yellow-500 hover:bg-black mt-4 lg:mt-0">Login</a>
                </div>
                <div>
                    <CartWidget class="hidden lg:flex lg:text-sm lg:ml-4 lg:px-4 lg:py-2"></CartWidget>
                </div>
            </div>

        </nav>);

}

export default NavBar;
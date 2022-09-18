import React from 'react';
import {nav} from "../data"
const Nav = () => {
  return ( 
    <nav className='hidden lg:flex  gap-x-4 text-white'>
    {nav.map((item, index) => {
      return (<a key={index} href={item.href} className=" hover:text-primary-200 transition">{item.name}</a>)
    })
  }
    </nav>
  )
};

export default Nav;

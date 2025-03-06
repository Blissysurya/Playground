import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-bold text-4xl">PlayGround</h1>
        <nav className="flex space-x-6">
          <NavLink to="/" className={({ isActive }) => 
            `font-bold text-lg ${isActive ? "text-blue-400" : "hover:text-blue-300 transition duration-300"}`
          }>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            `font-bold text-lg ${isActive ? "text-blue-400" : "hover:text-blue-300 transition duration-300"}`
          }>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `font-bold text-lg ${isActive ? "text-blue-400" : "hover:text-blue-300 transition duration-300"}`
          }>About</NavLink>
          <NavLink to="/profile" className={({ isActive }) => 
            `font-bold text-lg ${isActive ? "text-blue-400" : "hover:text-blue-300 transition duration-300"}`
          }>Profile</NavLink>
        </nav>
      </div>
    </header>
  );
}

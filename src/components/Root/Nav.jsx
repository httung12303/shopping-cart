import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
  const [hideNav, setHideNav] = useState(true);
  return (
    <nav>
      <button
        className="fa-solid fa-bars text-lg md:hidden"
        onClick={() => setHideNav(false)}
      ></button>
      <div
        className={`w-screen h-screen fixed bg-slate-800 top-0 left-0 opacity-80 ${
          hideNav ? 'hidden' : ''
        } z-10`}
      ></div>
      <div
        className={`flex flex-col fixed top-0 right-0 bg-slate-950 h-screen w-48 p-4 gap-2 ${
          hideNav ? 'hidden' : ''
        } z-20 md:flex md:flex-row md:bg-transparent md:static md:h-fit md:w-fit md:p-0 xl:gap-6`}
      >
        <h2 className="text-2xl font-bold md:hidden">Navigate</h2>
        <Link to="/" className="border-b border-slate-700 md:border-0">
          <button onClick={() => setHideNav(true)}>Home</button>
        </Link>
        <Link to="/genres" className="border-b border-slate-700 md:border-0">
          <button onClick={() => setHideNav(true)}>Genres</button>
        </Link>
        <Link to="/about" className="border-b border-slate-700 md:border-0">
          <button onClick={() => setHideNav(true)}>About</button>
        </Link>
        <Link to="/cart" className="border-b border-slate-700 md:border-0">
          <button onClick={() => setHideNav(true)}>Cart</button>
        </Link>
        <button
          className="fa-solid fa-x text-xs absolute right-4 top-5 md:hidden"
          onClick={() => setHideNav(true)}
        ></button>
      </div>
    </nav>
  );
}

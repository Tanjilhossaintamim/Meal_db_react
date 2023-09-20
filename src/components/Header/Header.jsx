import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-purple-950 px-2 py-4">
      <div className="container flex mx-auto justify-between items-center">
        <span className="text-3xl text-white">Meal</span>
        <div className="text-xl flex space-x-10 items-center text-white">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/meal"}>All Meal</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

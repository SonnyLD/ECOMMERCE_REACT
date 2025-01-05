import "./Navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Choice Sports
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/category/futbol">Futbol</Link>
        </li>
        <li>
          <Link to="/category/basket">Basket</Link>
        </li>
        <li>
          <Link to="/stock">Stock</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/lamps">
          <h3>Lamps</h3>
        </NavLink>

        <NavLink to="/candles">
          <h3>Candles</h3>
        </NavLink>


      </div>
    </nav>
  );
};
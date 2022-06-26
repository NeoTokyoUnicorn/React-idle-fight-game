import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/App">Play</Link>
          </li>
          <li>
            <Link to="/Mint">Mint</Link>
          </li>
          <li>
            <Link to="/Map">Map</Link>
          </li>
          <li>
            <Link to="/Staking">Staking</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
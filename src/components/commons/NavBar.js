import styled from "styled-components";
import { Link } from "react-router-dom";
import { Bottom } from "./Components";
import { BsChatLeft, BsPerson, BsGear } from "react-icons/bs";

const NavBar = () => {
  return (
    <Bottom>
      <Menu>
        <Link to={"/"}>
          <BsPerson />
        </Link>
      </Menu>

      <Menu>
        <Link to={"/chatlist"}>
          <BsChatLeft />
        </Link>
      </Menu>

      <Menu>
        <Link to={"/setting"}>
          <BsGear />
        </Link>
      </Menu>
    </Bottom>
  );
};

const Menu = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NavBar;

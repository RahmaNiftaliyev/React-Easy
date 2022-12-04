import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Go } from "../../Go";



const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor =useColorModeValue("whiteAlpha","darkAlpha")
  const navigate=useNavigate();




  return (
    <div className={"navigation-container"}>
      <div>React Easy</div>
      <button className={"algolia_search_button"}>
        <div>
          <AiOutlineSearch />
          <span>Search the documentation</span>
        </div>
        <div className={"ctrl_k"}>
          <code>Ctrl</code>
          <code>K</code>
        </div>
      </button>
      <div className="signin-container ">
        <Button colorScheme={buttonColor} className="navi_color_toggle" onClick={toggleColorMode}>
          {colorMode === "light" ? <BsFillMoonFill className="navi_moon"/> : <BsSun className="navi_sun"/>}
        </Button>
        <AiFillGithub className="icon-github" />
        <AiFillGoogleCircle className="icon-google" />
        <button 
          onClick={()=>{Go.to(navigate,"/login")}}
        className="navi-btn-login">Login</button>
      </div>
    </div>
  );
};

export default Navigation;

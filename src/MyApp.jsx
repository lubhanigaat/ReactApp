import React from "react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import { ShellBar,Avatar,ShellBarItem,Icon,Input } from "@ui5/webcomponents-react";
import { Home } from "./Home";
import { Detail } from "./Detail";
import{Route,Routes,Navigate, useNavigate} from "react-router-dom";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";

export function MyApp(){
  const navigate=useNavigate();
const handleLogoClick=()=>{
navigate("./");
};
return (
  <div>
    <ShellBar
    logo={<img src="reactLogo.png"/>}
    onLogoClick={handleLogoClick}
    //menuItems={<><StandardListItem >Home</StandardListItem><StandardListItem >Login/Sign-up</StandardListItem><StandardListItem>Help Desk</StandardListItem></>}
    profile={<Avatar> <img src="profilePictureExample.png "/> </Avatar>}
    primaryTitle="MyApp"
    searchField={<Input icon={<Icon interactive name="search"/>} showClearIcon/>}
    >
<ShellBarItem icon="add" text="add"/>


    </ShellBar>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
    </div>
    )
    }
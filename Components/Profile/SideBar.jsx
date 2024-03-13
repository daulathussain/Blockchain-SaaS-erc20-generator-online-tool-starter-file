import React from "react";
import {BsBoxArrowRight} from "react-icons/bs";

const SideBar=({setActive,setOpen,open,address,setTranfer})=>{
  const menuList=[
    {
      name:"Dashboard",
    },
    {
      name:"Your Token",
    },
    {
      name:"Donation",
    },
  ];
  return(
    <div class="col-xl-3 col-lg-3 col-md-4">
      <aside class="sidebar">
        <div class="dashboard-side">
          <div class="dashboard-head">
            <div class="dashboard-profile">
              <img src="img/about/profile.png" alt=""/>
              <div class="profile-content">
                <span class="pro-name">Random</span>
                <span class="pro-number">{address.slice(0,15)}...</span>
              </div>
            </div>
          </div>
          <div class="dashboard-menu">
            <ul>
              {menuList.map((el,i)=>(
                <li 
                onClick={()=> setOpen(el.name)}
                class={open==el.name?"active":""}
                >
                <a>
                  <BsBoxArrowRight/>
                  <span className="new-space"></span>
                </a>
              </li>
              ))}
              <li onClick={()=>setActive(true)}>
                <a href="#">
                  <BsBoxArrowRight/>
                  <span className="new-space"></span>
                  Create Token
                  </a>
                </li>
                <li onClick={()=>setTranfer(true)}>
                  <a href="#">
                    <BsBoxArrowRight/>
                    <span className="new-space"></span>
                    Token Transfer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
        
  );
};

export default SideBar;

import React, { useState } from "react";
import {AiOutlineClose} from "react-icons/ai";

const ERC20 = ({setActive,createERC20}) => {
  const[token,setToken]=useState({
    name:"",
    symbol:"",
    supply:0,
  });
  const handleTokenInfo=(fieldname,e)=>{
    setToken({...token,[fieldname]:e.target.value});
  };
  return(
    <div class="login-area area-padding fix">
      <div class="login-overlay"></div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-xl-6 col-lg-6 col-md-8">
            <div class="login-form signup-form">
              <span onClick={()=>setActive(false)}>
                <AiOutlineClose/>
              </span>
              <h4 class="login-title text-center">Create ERC20</h4>
              <div id="contactForm" class="log-form">
                <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Name"
                required
                onChange={(e)=> handleTokenInfo("name",e)}
                />
                <input
                type="text"
                id="email"
                class="form-control"
                placeholder="Symbol"
                required
                onChange={(e)=> handleTokenInfo("symbol",e)}
                />
                <input
                type="number"
                id="msg_subject"
                class="form-control"
                placeholder="total-supply"
                required
                onChange={(e)=>handleTokenInfo("supply",e)}
                />
                <button
                onClick={()=>createERC20(token)}
                type="submit"
                id="submit"
                class="slide-btn color-btn login-btn"
                >
                  Create Token
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                  <div class="clear"></div>
                  <div class="separetor text-center">
                    <span>Create your ERC20 Token</span>
                  </div>
                  <div class="sign-icon">
                    <div class="acc-not">
                      with minimum fee of <a>1 matic </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ERC20;

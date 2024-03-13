import React ,{useState}from "react";
import {AiOutlineClose} from "react-icons/ai";

const Transfer = ({setTransfer,transferNativeToken}) => {
  const[token,setToken]=useState({
    address:"",
    tokenNo:"",
  });
  const handleTokenInfo=(fieldName,e)=>{
    setToken({...token,[fieldName]:e.target.value});
  };
  return(
    <div class="login-area area-padding fix">
      <div class="login-overlay"></div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-xl-6 col-lg-6 col-md-8">
            <div class="login-from signup-form">
              <span onClick={()=> setTransfer(false)}>
                <AiOutlineClose/>
                </span>
                <h4 class="login-title text-center">Transfer Token</h4>
                <div id="contactForm" class="log-form">
                  <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="address"
                  required
                  onChange={(e)=> handleTokenInfo("address",e)}
                  />
                  <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="amount"
                  required
                  onChange={(e)=>handleTokenInfo("tokenNo",e)}
                  />
                  <button
                  onClick={()=>transferNativeToken(token)}
                  type="submit"
                  id="submit"
                  class="slide-btn color-btn login-btn"
                  >
                    Transfer Token
                    </button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                    <div class="clear"></div>
                    <div class="separetor text-center">
                      <span>Create your ERC20 Token</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
  );
};

export default Transfer;

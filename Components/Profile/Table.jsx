import React from "react";

const Table=({tableData,title})=>{
  return(
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="send-money-form transaction-log">
          <div class="form-text">
            <h4 class="form-top">
              {" "}
              {tableData.length==0?"No Token Created":`${title}`}{" "}
            </h4>
            {tableData.length==0?(
              ""
            ):(
              <div class="form-inner table-inner">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction Hash</th>
                      <th>Token Address</th>
                      <th>Supply</th>
                      <th>Name</th>
                      <th>Symbol</th>
                    </tr>
                  <>
                  {tableData?.map((token,i)=>(
                    <tr key={i+1}>
                      <td>{token.tokenCreatedDate}</td>
                      <td
                      onClick={()=>
                      navigator.clipboard.writeText(
                        token.tokenTransactionHash
                      )
                    }
                    >
                      {token.tokenTransactionHash.slice(0,15)}...
                      </td>
                    <td
                    onClick={()=>
                    navigator.clipboard.writeText(token.tokenAddress)
                  }
                  >
                    {token.tokenAddress.slice(0,15)}...
                    </td>
                    <td>{token.tokenSupply}</td>
                    <td>{token.tokenSymbol}</td>
                    <td>{token.tokenName}</td>
                    </tr>
                  ))}
                  </>
                  </thead>
                  </table>
                  </div>
            )}
            </div>
            </div>
            </div>
            </div>
  );
};


export default Table;

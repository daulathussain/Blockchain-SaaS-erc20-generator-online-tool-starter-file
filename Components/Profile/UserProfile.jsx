import React from "react";
import {BsBoxArrowRight} from "react-icons/bs";
const UserProfile = () => {
  return(
    <div class="page-area bread-pd">
      <div class="breadcumb-overlay">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bread-bg">
                <div class="breadcrumb-title">
                  <h2>User Profile</h2>
                  <div class="bread-come">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-items">
                          <a class="black-text" href="#">
                            Home
                            </a>
                            <span className="new_profile_space">
                              <BsBoxArrowRight/>
                              </span>
                              </li>
                              <li class="breadcrumb-items">
                                <a class="black-text" href="#">
                                  User Profile
                                  </a>
                                  </li>
                                  </ol>
                                  </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;

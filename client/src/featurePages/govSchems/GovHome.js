

import React from "react";
import "../../css/GovHome.css";
import NavigationBar from "../../components/CommonNavigation";

export default function GovHome() {
 
  return (
    <>
    <NavigationBar/>
      <div className=" mt-5 text-center mainContainer-govScheme " >
        <h2 className="mt-3 p-3 darkGreenText font-weight-bolder">
          Government Scheme Information
        </h2>
        {/* filter bar  */}
       
        {/* table for crop suggetion  */}
        <div class="accordion container" id="accordionExample">
        <div className=" filtar-bar w-100 darkGreenbg mt-3  d-flex justify-content-center ">
          <div class="dropdown-container">
            <select class="custom-select  px-1">
              <option value="none" >
                Select State
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div class="dropdown-container">
            <select class="custom-select">
              <option value="none" >
                Government Type
              </option>
              <option value="State Government">State Government</option>
              <option value="Central Government">Central Government</option>
            </select>
          </div>
          <div class="dropdown-container">
            <select class="custom-select" id="categorySelect">
              <option value="none" >
                Scheme Category
              </option>
              <option value="none">All</option>
              <option value="Agricultural Credit">Agricultural Credit</option>
              <option value="Animal Husbandry">Animal Husbandry</option>
              <option value="Agricultural Insurance">
                Agricultural Insurance
              </option>
              <option value="Agricultural Marketing">
                Agricultural Marketing
              </option>
              <option value="Backward class and Minority Welfare">
                Backward class and Minority Welfare
              </option>
              <option value="Education">Education</option>
              <option value="Energy Department">Energy Department</option>
              <option value="Farmers Welfare and Agricultural Development">
                Farmers Welfare and Agricultural Development
              </option>
              <option value="Health">Health</option>
              <option value="Higher Education">Higher Education</option>
              <option value="Horticulture">Horticulture</option>
              <option value="Irrigation">Irrigation</option>
              <option value="Panchayat and Rural Development">
                Panchayat and Rural Development
              </option>
              <option value="Plant Protection">Plant Protection</option>
              <option value="Seeds">Seeds</option>
              <option value="Training and Extension for farmers">
                Training and Extension for farmers
              </option>
              <option value="Urban Administration">Urban Administration</option>
            </select>
          </div>
          <div class="dropdown-container">
            <input
              type="text"
              className="custom-select"
              placeholder="&#128269; Search Crop details"
            />
          </div>
        </div>
          {/* Scheme 1 */}
          <div className="card p-1 pb-0">
            <div class="card-header bg-white " id="headingOne ">
              <h6 class="mb-0 collapsebtn p-0">
                <button
                  class="bg-white btn-block text-left collapsed p-1 collapsebtn mediumGreenText"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Gramin Bhandaran Yojana
                </button>
           
              </h6>
            </div>
            
            <div
              id="collapseOne"
              class="collapse "
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                This major scheme for farmers in India addressed the huge
                shortage of storage facilities in rural areas because of which
                Indian farmers had to face huge post-harvest losses and distress
                selling of agricultural produce.
              </div>
            </div>
            </div>

          {/* Scheme 2 */}
          <div className="card p-1 pb-0">
            <div class="card-header bg-white " id="headingOne ">
              <h6 class="mb-0 ">
                <button
                  class="bg-white btn-block text-left collapsed p-1 collapsebtn mediumGreenText"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PM Kisan Samman Nidhi Yojana
                </button>
              </h6>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                The next central government agriculture scheme that we want to
                list here is PM Kisan Samman Nidhi Yojana. It is a
                government-funded scheme that aims to provide ample income
                support to small and marginal farmers in India.
              </div>
            </div>
          </div>

          {/* Scheme 3 */}
          <div className="card p-0 pb-0">
            <div class="card-header bg-white " id="headingOne ">
              <h6 class="mb-0 p-0">
                <button
                  class="bg-white btn-block text-left collapsed p-1 collapsebtn mediumGreenText"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Kisan Credit Card (KCC)
                </button>
              </h6>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                The exclusive focus of this scheme is on providing timely credit
                assistance for basic expenses like buying seeds, fertilizers,
                pesticides, machinery, and other inputs.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br />
    </>
  );
}

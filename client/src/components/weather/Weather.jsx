import React from "react";
import "../../css/weather.css";
import cloud from "../../asset/cloud.png";
export default function Weather() {
  return (
    <>
      {/* main Contaiuner  */}
      <div className="container mt-5" style={{marginTop:"40px"}}>
        <br />
        <div className="weatherContainer  mt-5 mb-5">
          {/* row  */}
          <div className="row main darkGreenbg d-flex justify-content-center mt-5">
            {/* for left div  */}
            <div className="col-md-4 leftdiv  mt-5 mb-5">
              <div className="content border w-100 bg-white  p-3 m-0  ">
                <div className="header d-flex justify-content-center p-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="search location"
                    className="border serachInput "
                  />
                  <button className="btn btn-success circular-button" >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="weatherImg p-1">
                  <img src={cloud} alt="" />
                </div>
                <div className="p-2">
                  <div className="temp d-flex justify-content-center p-1 ">
                    <h3 className="font-weight-bold darkGreenText">24 c</h3>
                  </div>
                  <div className="temp d-flex justify-content-center  ">
                    <h4 className="lightGreenText">Wardha</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* for right div  */}

            <div className="col-md-6 shadow-sm  mb-5 bg-white rounded  mt-5 mb-5">
              <div className="row">
                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Temp Min</h6></div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Temp Max </h6> 
</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Humidity</h6></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Day Type </h6> </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div class="card  p-1 w-100">
                  <div class="card-body">this is</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for suggetion of crop  */}
        <div className=" mt-5 text-center">
          <h2 className="mt-3 darkGreenText font-weight-bolder">
            Get Crop Suggestion Here
          </h2>
          {/* filter bar  */}
          <div className="w-100 darkGreenbg mt-3 p-2 d-flex justify-content-around ">
            <div class="dropdown-container">
              <select class="custom-select  px-1">
                <option value="option1  px-1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div class="dropdown-container">
              <select class="custom-select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div class="dropdown-container">
              <select class="custom-select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div class="dropdown-container">
              <input
                type="text"
                className="custom-select"
                placeholder="Search Crop details"
              />
            </div>
          </div>
          {/* table for crop suggetion  */}
          <div className="tableContent mt-2">
            <table class="table">
              <thead class="thead darkGreenbg">
                <tr>
                  <th>Crop</th>
                  <th>Suitable Season</th>
                  <th>Weather Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wheat</td>
                  <td>Winter</td>
                  <td>Cool and dry</td>
                </tr>
                <tr>
                  <td>Wheat</td>
                  <td>Winter</td>
                  <td>Cool and dry</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      
    </>
  );
}

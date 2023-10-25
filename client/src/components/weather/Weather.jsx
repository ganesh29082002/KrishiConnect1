
import React,{useState} from 'react';
import axios from 'axios'
import "../../css/weather.css";
import cloud from "../../asset/cloud.png";
export default function Weather() {

  const[city,setCity] = useState("")
  const[data,setData]=useState({
    description:"",
    temp:0, 
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    country: 'IN', sunrise: 0, sunset: 0,
    wind :0,

  })
 
  const handleclick =()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fc7db9ef3e1a9c9d04ade2367f1651e`)
    .then((response)=>{
      console.log(response.data)
      setData({
        description:response.data.weather[0].description,
    temp:response.data.main.temp, 
    temp_max: response.data.main.temp_max,
    temp_min: response.data.main.temp_min,
    humidity: response.data.main.humidity,
    country: response.data.sys.country, 
    sunrise:response.data.sys.sunrise,
     sunset:response.data.sys.sunset,
     wind : response.data.wind.speed,
      })
    })
    
  }

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
                    value={city} onChange={(e)=>{
                      setCity(e.target.value)
                    }}
                  />
                  <button className="btn btn-success circular-button" onClick={handleclick} >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="weatherImg p-1">
                  <img src={cloud} alt="" /> br
                </div>
                <div className="d-flex justify-content-center">

                <span className='text-success '> {data.description}</span>
                </div>

                <div className="p-2">
                  <div className="temp d-flex justify-content-center p-1 ">
                    
                    <h3 className="font-weight-bold darkGreenText">{(data.temp - 273.15).toFixed(2)}°C</h3>
                  </div>
                  <div className="temp d-flex justify-content-center  ">
                    <h4 className="lightGreenText">{city}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* for right div  */}

            <div className="col-md-6 shadow-sm  mb-5 bg-white rounded  mt-5 mb-5">
              <div className="row">
                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Temp Min</h6> <span className='text-success'>{(data.temp_min- 273.15).toFixed(2)} °C</span></div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Temp Max </h6> 
                    <span className='text-success'>{(data.temp_max - 273.15).toFixed(2)} °C</span>
</div>
                  </div>
                </div>
               
                {/* <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Humidity</h6></div>
                    <span className='text-success ml-2'>{data.humidity}</span>
                  </div>
                </div> */}
  <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Humidity </h6> 
                    <span className='text-success'>{data.humidity}</span>
</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Wind Speed</h6> 
                    <span className='text-success'>{data.wind}</span>
</div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div class="card p-1">
                    <div class="card-body"><h6>Day Type </h6> </div>
                    <span className='text-success'>{data.temp_min}</span>
                  </div>
                </div> */}
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

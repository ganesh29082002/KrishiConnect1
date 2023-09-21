import {React, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import { MDBCol } from "mdbreact";
import { MDBCollapse, MDBBtn, MDBCol} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
// import {Container, Col} from 'react-bootstrap';
// import SearchIcon from '@mui/icons-material/Search';
// import scheme from '../../Images/Gov_Schemes2.png';
import logo from '../../Assets/Schemes_Logo1.png';

function GovHome() {
  //  const [open, setOpen] = useState(false);
   const [showcard1, setShowcard1] = useState(false);
   const [showcard2, setShowcard2] = useState(false);
   const [showcard3, setShowcard3] = useState(false);
   const [showcard4, setShowcard4] = useState(false);
   const [showcard5, setShowcard5] = useState(false);
   const [showcard6, setShowcard6] = useState(false);

  // const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const togglecard1 = () => setShowcard1(!showcard1);
  const togglecard2 = () => setShowcard2(!showcard2);
  const togglecard3 = () => setShowcard3(!showcard3);
  const togglecard4 = () => setShowcard4(!showcard4);
  const togglecard5 = () => setShowcard5(!showcard5);
  const togglecard6 = () => setShowcard6(!showcard6);

  return (
  
    <div>
    <Navbar style={{height:"8rem"}} bg="success" expand="md" > 
    <div><img style={{width:"18rem"}} src={logo}/></div>
<div style={{ display: 'block', 
                  width:450, 
                  padding: 10,
                  marginLeft:80,
                  position: 'static' }}>
      
      <Dropdown>
        <Dropdown.Toggle variant="success" style={{ fontSize:20
                   }}>State</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Andhra Pradesh</Dropdown.Item>
          <Dropdown.Item href="#">Arunachal Pradesh</Dropdown.Item>
          <Dropdown.Item href="#">Assam</Dropdown.Item>
          <Dropdown.Item href="#">Bihar</Dropdown.Item>
          <Dropdown.Item href="#">Chhattisgarh</Dropdown.Item>
          <Dropdown.Item href="#">Goa</Dropdown.Item>
          <Dropdown.Item href="#">Gujarat</Dropdown.Item>
          <Dropdown.Item href="#">Haryana</Dropdown.Item>
          <Dropdown.Item href="#">Himachal Pradesh</Dropdown.Item>
          <Dropdown.Item href="#">Jharkhand</Dropdown.Item>
          <Dropdown.Item href="#">Karnataka</Dropdown.Item>
          <Dropdown.Item href="#">Kerala</Dropdown.Item>
          <Dropdown.Item href="#">Madhya Pradesh</Dropdown.Item>
          <Dropdown.Item href="#">Maharashtra</Dropdown.Item>
          <Dropdown.Item href="#">Manipur</Dropdown.Item>
          <Dropdown.Item href="#">Meghalaya</Dropdown.Item>
          <Dropdown.Item href="#">Mizoram</Dropdown.Item>
          <Dropdown.Item href="#">Nagaland</Dropdown.Item>
          <Dropdown.Item href="#">Odisha</Dropdown.Item>
          <Dropdown.Item href="#">Punjab</Dropdown.Item>
          <Dropdown.Item href="#">Rajasthan</Dropdown.Item>
          <Dropdown.Item href="#">Sikkim</Dropdown.Item>
          <Dropdown.Item href="#">Tamil Nadu</Dropdown.Item>
          <Dropdown.Item href="#">Telangana</Dropdown.Item>
          <Dropdown.Item href="#">Tripura</Dropdown.Item>
          <Dropdown.Item href="#">Uttar Pradesh</Dropdown.Item>
          <Dropdown.Item href="#">Uttarakhand</Dropdown.Item>
          <Dropdown.Item href="#">West Bengal</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <div style={{ display: 'block', 
                  width: 450, 
                  padding: 10,
                  position: 'static' }}>
                    
      <Dropdown>
         <Dropdown.Toggle variant="success" style={{ fontSize:20
                   }}>Types</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Central Government Schemes</Dropdown.Item>
            <Dropdown.Item href="#">State Government Schemes</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </div>
      <div style={{ display: 'block', 
                  width: 450, 
                  padding: 10,
                  position: 'static',
                   }}>
      <Dropdown>
        <Dropdown.Toggle variant="success" style={{ fontSize:20
                   }}>Schemes Category</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">All</Dropdown.Item>
            <Dropdown.Item href="#">Agricultural Credit </Dropdown.Item>
            <Dropdown.Item href="#">Animal Husbandry</Dropdown.Item>
            <Dropdown.Item href="#">Agricultural Insurance </Dropdown.Item>
            <Dropdown.Item href="#">Agricultural Marketing</Dropdown.Item>
            <Dropdown.Item href="#">Backward class and Minority Welfare</Dropdown.Item>
            <Dropdown.Item href="#">Education</Dropdown.Item>
            <Dropdown.Item href="#">Energy Department</Dropdown.Item>
            <Dropdown.Item href="#">Farmers Welfare and Agricultural Development</Dropdown.Item>
            <Dropdown.Item href="#">Health</Dropdown.Item>
            <Dropdown.Item href="#">Higher Education</Dropdown.Item>
            <Dropdown.Item href="#">Horticulture</Dropdown.Item>
            <Dropdown.Item href="#">Irrigation</Dropdown.Item>
            <Dropdown.Item href="#">Panchayat and Rural Development</Dropdown.Item>
            <Dropdown.Item href="#">Plant Protection </Dropdown.Item>
            <Dropdown.Item href="#">Seeds</Dropdown.Item>
            <Dropdown.Item href="#">Training and Extension for farmers </Dropdown.Item>
            <Dropdown.Item href="#">Urban Administration</Dropdown.Item>
            <Dropdown.Item href="#">Higher Education</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>  
      </div>
      <div>
      <MDBCol md="9" style={{marginRight:"10rem"}} >
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>
    </div>
     </Navbar> 

     <div className="heading" style={{marginTop:"2rem",background: "rgba(76, 175, 0, 0.1)",border:"1px solid rgba(76, 15, 0, 0.1)"}}>
            <h1 style={{textAlign:"center", color:"green",fontSize:"3.5rem"}}>GOVERNMENT SCHEMES </h1>
            <h1 style={{textAlign:"center"}}>For Development Of Agriculture In India </h1>
     </div>
     {/* <div>
      <img style={{width:"102rem", height:"10rem",padding:"8px" }} src={scheme}/>
     </div> */}

{/* 3rd  Card 1*/}
{/* <Container fluid= "lg" >
<Col className="d-flex" xs={12} md={12} >
  <div class="col-lg-4 mb-6">
<Card style={{ width: '25rem', display:'flex', boxShadow: "2px 3px 4px 3px #cec7c759" }} className="flex-fill" >
      <Card.Img variant="top" src="https://img.indiafilings.com/learn/wp-content/uploads/2018/06/12005928/Pradhan-Mantri-Krishi-Sinchai-Yojana.jpg" />
      <Card.Body>
        <Card.Title>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</Card.Title>
        <Card.Text>
          The scheme's major goal is to increase the area under irrigation and improve water efficiency through various components and interventions.
        </Card.Text>
        
              <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      > Read More
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          key objectives of Pradhan Mantri Krishi Sinchai Yojana:
Har Khet Ko Pani (Water for Every Field): This agriculture scheme aims to provide assured irrigation to every farm field and ensure the optimal use of available water resources.
        <div>
          <Card.Link href="#">Link To Apply</Card.Link>
      <Card.Link href="#">Download</Card.Link>
        </div>
        </div>
      </Collapse>
      </Card.Body>
    </Card>
   </div> 

</Col>
</Container> */}

{/* """""""""""""""""""""""""""""""""""""""""""""" */}
<div className="container" style={{marginTop:"2rem"}}>
    <div class="row gy-4">
        {/* card 1 */}
        <div class="col-sm">
            <div class="card h-100">
                  <Card.Img style={{height:"16rem"}} variant="top" src="https://img.indiafilings.com/learn/wp-content/uploads/2018/06/12005928/Pradhan-Mantri-Krishi-Sinchai-Yojana.jpg" />                
                <div class="card-body">
                <Card.Title>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</Card.Title>
                <Card.Text>The scheme's major goal is to increase the area under irrigation and improve water efficiency through various components and interventions.</Card.Text>
      <button className='btn btn-primary' onClick={togglecard1}>Read More</button> 
            <Card.Link style={{marginLeft:"10rem"}} href="#">Link To Apply</Card.Link>

      <MDBCol>
          <MDBCollapse show={showcard1}>
            key objectives of Pradhan Mantri Krishi Sinchai Yojana:Har Khet Ko Pani (Water for Every Field): This agriculture scheme aims to provide assured irrigation to every farm field and ensure the optimal use of available water resources.
          </MDBCollapse>
        </MDBCol>
                </div>
            </div>
        </div>
        {/* card 2 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}}  variant="top" src="https://img.staticmb.com/mbcontent/images/uploads/2023/1/Tax-on-Income-%20from-Agriculture%20(1).jpg" />
                <div class="card-body">
                <Card.Title>Paramparagat Krishi Vikas Yojana(PKVY)</Card.Title>
                <Card.Text>Its goals include increasing soil fertility, promoting sustainable agriculture, and ensuring the production of chemical-free, nutritious agricultural goods.</Card.Text>
      <button className='btn btn-primary' onClick={togglecard2}>Read More</button>
      <MDBCol>
          <MDBCollapse show={showcard2}>
            Important elements and components of the Paramparagat Krishi Vikas Yojana are as follows:- Organic agricultural promotion: This government subsidy scheme for farmers encourages the use of organic agricultural practices such as organic manures, bio-fertilizers, traditional seeds, and natural pest and disease management strategies.
          </MDBCollapse>
        </MDBCol>
                </div>
            </div>
        </div>
        {/* card 3 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}} variant="top" src="https://images.livemint.com/img/2021/02/07/600x338/crop-kmPH--621x414@LiveMint_1612719062329.JPG" />
                <div class="card-body">
                <Card.Title>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</Card.Title>
        <Card.Text>
          The scheme's major goal is to increase the area under irrigation and improve water efficiency through various components and interventions.
        </Card.Text>

      <button className='btn btn-primary' onClick={togglecard3}>Read More</button>
      <MDBCol>
          <MDBCollapse show={showcard3}>
          key objectives of Pradhan Mantri Krishi Sinchai Yojana:Har Khet Ko Pani (Water for Every Field): This agriculture scheme aims to provide assured irrigation to every farm field and ensure the optimal use of available water resources.
          </MDBCollapse>
        </MDBCol>
                </div>
            </div>
        </div>
    </div>
</div>

<div style={{marginTop:"2rem"}} class="container">
    <div class="row gy-4">
        {/* card 4 */}
        <div class="col-sm">
            <div class="card h-100">
          <Card.Img style={{height:"16rem"}} variant="top" src="https://upvey.com/wp-content/uploads/2020/04/graminbhandaran.jpg" />
                <div class="card-body">
        <Card.Title>Gramin Bhandaran Yojana</Card.Title>
        <Card.Text>
          This major scheme for farmers in India addressed the huge shortage of storage facilities in rural areas because of which Indian farmers had to face huge post-harvest losses and distress selling of agricultural produce.
        </Card.Text>
      <button className='btn btn-primary' onClick={togglecard4}>Read More</button>
        <MDBCol>
          <MDBCollapse show={showcard4}>
            Under this government scheme for farmers, financial assistance is provided in the form of subsidies to eligible individuals, farmers, and organizations for the construction of storage infrastructure such as godowns (warehouses), cold storage, and other post-harvest management facilities. Hence, it’s one of the most useful central government subsidy schemes for agriculture. 
          </MDBCollapse>
        </MDBCol>
                </div>
            </div>
        </div>
        {/* card 5 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}} variant="top" src="https://images.newindianexpress.com/uploads/user/imagelibrary/2023/3/10/w900X450/farmers-agriculture2.jpeg?w=400&dpr=2.6" />
                <div class="card-body">
        <Card.Title>PM Kisan Samman Nidhi Yojana</Card.Title>
        <Card.Text>
          The next central government agriculture scheme that we want to list here is PM Kisan Samman Nidhi Yojana.It is a government-funded scheme that aims to provide ample income support to small and marginal farmers in India. 
        </Card.Text>

      <button className='btn btn-primary' onClick={togglecard5}>Read More</button>
      <MDBCol>
          <MDBCollapse show={showcard5}>
            The main objective of the scheme is to transfer an amount of INR 6000 to the account of farmers annually so that they can easily take care of their farming implements and other agriculture-related expenses without any fear or concern.
          </MDBCollapse>
        </MDBCol>
                </div>
            </div>
        </div>
        {/* card 6 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}} variant="top" src="https://kj1bcdn.b-cdn.net/media/32161/kisan-credit-card-new.png" />
                <div class="card-body">
        <Card.Title>Kisan Credit Card (KCC)</Card.Title>
        <Card.Text>
          The exclusive focus of this scheme is on providing timely credit assistance for basic expenses like buying seeds, fertilizers, pesticides, machinery, and other inputs.
        </Card.Text>
      <button className='btn btn-primary' onClick={togglecard6}>Read More</button>
      <MDBCol>
          <MDBCollapse show={showcard6}>
            In 1998, This scheme was launched to provide credit facilities to farmers. The aim of this scheme is to provide enough credit to farmers for their agriculture/farming expenses.It offers multiple repayment options to make sure that all sorts of farmers can have customized funding facilities. 
          </MDBCollapse>
        </MDBCol>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
     
     
  );
}

export default GovHome;



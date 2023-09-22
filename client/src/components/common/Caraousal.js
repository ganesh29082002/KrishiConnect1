import React from 'react'
import farmer2 from '../../asset/farmer1.png'
export default function Caraousal() {
  return (
   <>
   <div id="carouselExampleIndicators" class="carousel slide lightGreenbg" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className="row">
            <div className="col-md-6 p-5 text-center leftContainer d-flex flex-column align-items-center justify-content-center " style={{height:"500px"}}>
             <h4 className='p-2 darkGreenText'> "Nurturing India's Growth, One Crop at a Time." </h4>
             <span className='p-2 '> loream8
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus illum aliquid eveniet atque voluptates unde enim ullam quae sint voluptatem, ad ipsum !
             </span>
             <div className="d-flex p-1 mt-2 ">
             <button className='btn darkGreenbg mx-3' style={{color:"white"}}>Learn More.. </button>
             <button className='btn darkGreenbg' style={{color:"white"}}>Go to Services</button>

             </div>
            </div>
            <div className="col-md-6">
            <img class="d-block w-100" src={farmer2} alt="First slide" />
            </div>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   </>
  )
}

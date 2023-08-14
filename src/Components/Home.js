import React from 'react';
import "./Home.css";
import Product from './Product';
import homepage from "../homepage.jpg";
import Got from '../got.jpg';
import Hobbit from "../hobbit.jpg";
import Dune from "../dune.webp";
import Wot from "../Wot.jpg";
import Sandman from "../sandman.jpg";
import Tv from "../tv.avif";

function Home() {
  return (
    <>
    <div className='home'>
        <div className="home_container">
            <img className='homeimg' src={homepage}/>
            <div className="home_row">
              <Product title='A Game of Thrones: Graphic Novel, Vol. 3 Hardcover' price={61.56} image={Got} rating={5}/>
              <Product title='The Hobbit & The Lord of the Rings Boxed Set: The Classic Bestselling Fantasy Novel' price={35.67} image={Hobbit} rating={4}/>
            </div>
            <div className="home_row">
              <Product title='The Great Dune Trilogy' price={45.32} image={Dune} rating={5}/>
              <Product title='WHEEL OF TIME 1: THE EYE OF THE WORLD (REISSUE)' price={55.67} image={Wot} rating={5}/>
              <Product title='Sandman Vol. 1: Preludes & Nocturnes' price={543.65} image={Sandman} rating={4}/>
            </div>
            <div className="home_row">
              <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor with QHD Display" price={3045.34} image={Tv} rating={4}/>
            </div>
        </div>
    </div>
  </>  
  )
}

export default Home
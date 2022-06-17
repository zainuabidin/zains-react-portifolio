import React from 'react'
import image from '../../src/assets/profile.jpeg'

const Home = () => {
  return (
      <div className="contianer d-flex">
 <div className="row">
        <div className="col-xl-4 text-center pb-4">
          <img
              className="rounded-circle"
            width="400"
            height="400"
            src={image}
            alt="zain profile picture"
          />
        
        </div>   
        
        </div> 
        <div>
        <p className="lead">
        <h1>Zain Ul Abidin</h1>
            Hi,
I am a Web developer with front and Back end expereince .I have a strong e-commerce background and i have been working in e-commerce industry for past 10 years working in market reaserch product development search engine optimistation and adverstisment.</p>    
         </div> 

  </div>
  )
}

export default Home
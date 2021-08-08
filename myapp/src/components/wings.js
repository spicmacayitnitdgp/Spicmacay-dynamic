import React from 'react';
import './wings.css';
import a from './images/1.png';
import b from './images/2.png';
import c from './images/3.png';
import d from './images/4.png';
import e from './images/5.png';

function Wings(){
    return(
        <>
            
   
    <div className="content-wing"> 
     
      <div class="card-wing">
         
            <div class="icon"><img src={a} style={{width:"100px" }}/></div>
            <p class="title">IT WING</p>
            <p class="text">This wings handles the technical stuff.</p>
         
      </div>
      
      
      <div class="card-wing">
         
            <div class="icon"><img src={b} style={{width:"100px" }}/></div>
            <p class="title">Music Wing</p>
            <p class="text">This wings creates melody.</p>
         
      </div>
      
      
      <div class="card-wing">
         
            <div class="icon"><img src={c} style={{width:"100px" }}/></div>
            <p class="title">Dance Wing</p>
            <p class="text">This wing stuns everyone with their moves.</p>
         
      </div>
      
      
      <div class="card-wing">
         
            <div class="icon"><img src={d} style={{width:"130px" }}/></div>
            <p class="title">Art Wing</p>
            <p class="text">This wings add colors to the world.</p>
         
      </div>
      
      
      <div class="card-wing">
         
            <div class="icon"><img src={e} style={{width:"130px" }}/></div>
            <p class="title">Content Wing</p>
            <p class="text">This wings provides information to showcases it to the world.</p>
         
      </div>
    </div>  
   
  
   
   

    
   
        </>
    );
}

export default Wings;
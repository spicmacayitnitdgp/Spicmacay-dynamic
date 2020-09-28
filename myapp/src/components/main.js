import React, { Component } from 'react';
import "./7.css"
import "./1.css"
import "./13.css"
import ten from "./images/10.jpg"
import thirteen from "./images/13.jpg"
import twelve from "./images/24.jpg"
import twonine from "./images/29.jpg"
import seventeen from "./images/17.jpg"
import indika from './images/indika.jpg'
import one from "./images/1.jpg"
import logo from "./images/logo.png"
import {connect} from "react-redux"
import eleven from "./images/11.jpg" 
import { searchyear } from './actions/recordactions';
import {Link} from 'react-router-dom'
class Main extends Component {
    state={

    }
    searchtype=(e,type)=>{
        e.preventdefaults()
        this.props.dispatch(searchyear(type)).then(res=>{
            this.setState({
                results:res.payload
            })
            
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
             <div className="row">
    <section className="wavep container">
        {/* <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
            <a href="#about">About</a>
            <a href="#team">Volunteers</a>
            <a href="#events">Events</a>
            <a href="#wings">Wings</a>
            <a href="./loader4.html">Team</a>
            <a href="./loader1.html">Picture gallery</a>
          </div>
          
          <span id="navig" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
          
          <script>
          function openNav() {
            $("#mySidenav").css({"width" :"250px"});
          }
          
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }
          </script>
           */}
        <div className="wave col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12"></div>
    </section>
</div>


    {/* <!-- Virasat --> */}
    {/* <!-- <div className="row">
    <div className="virasat col-lg-12 col-sm-12 col-xs-12 col-md-12">
    <div className="zoom">
   <img src="./images/1.jpg" id="piczoom"/>
    </div>
    </div>
    </div>
    -->

         <!-- description --> */}
         <br/><br/>
         <div className="row" id="about">
           
            <div className="col-lg-12 col-sm-12 col-md-12 description" >
                
            <h1 style={{textAlign:'center'}}>ABOUT SPICMACAY, NIT Durgapur Chapter</h1>
                <div className="circle">

                </div>
                <p style={{fontFamily:"Merriweather !important", fontStyle:'normal !important', wordWrap:'break-word'}}>SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) is a non-political, nationwide, voluntary movement founded in 1977 
                    by Dr Kiran Seth, Professor-Emeritus at IIT-Delhi who was awarded the ‘Padma Shri’ for his contribution to the arts in 2009.
                   SPICMACAY’s intention is to enrich the quality of formal education by increasing awareness about different aspects of Indian heritage 
                   and inspiring the young mind to imbibe the values embedded in it. It seeks to inspire youth through experiencing the mysticism embodied
                   in the rich and heterogeneous cultural tapestry of Indian and World Heritage, with a hope that the beauty, grace, values and wisdom 
                   embodied in these arts will influence their way of life and thinking and inspire one to become a better human being.
                   For this, the most accomplished artistes of the country render programmes of Indian Classical music and dance, folk, poetry, 
                   theatre, traditional paintings, crafts & yoga primarily in schools and colleges.
                   In 2011, SPIC MACAY was awarded the Rajiv Gandhi Sadbhavana award in recognition of its contribution to youth development.</p>
            
            
            </div>
            </div>

       <br/><br/>

        {/* <!-- Events -->
     <!-- Enter pictures of events here --> */}
          {/* <p className="events" style={{color:"black",textAlign:"center !important",marginLeft:"20px"}}>EVENTS</p> */}
          <h1 style={{textAlign:"center"}}> EVENTS</h1>
     <div className="contain1" >
    <div className="card">
        <div className="imgcard">
           <img className="images" src={one}/>
        </div>
           <div className="detail">
               <h2 className="titl">VIRASAT</h2>
               <p className="info">VIRASAT is the official cultural extravaganza organized by SPIC MACAY NIT Durgapur Chapter.
                The perfect blend of gorgeous grace with sonorous tune swirls in the flavour of Indian culture
                and tradition. Esteemed artists of the likes of Pt Viswa Mohan Bhatt(Grammy Award
                Winner), Dr. N. Rajam, Pt. Ajoy Chakraborty etc. have been show stealers in the recent past. So
                what are you waiting for? Fasten your seatbelts and get ready to soak in India's rich heritage at
                its finest.</p>
                    {/* <button onclick=""><a href="./loader2.html">READ MORE</a></button> */}
                    <Link to={{pathname:"/event",state:{
                          type:"virasat"
                      }}}>
                          SEE ARTICLES
                          </Link>  

           </div> 
    </div>

    <div className="card">
            <div className="imgcard">
               <img className="images" src={twonine}/>
            </div>
               <div className="detail">
                   <h2 className="titl">UTTRAYAN</h2>
                   <p className="info">Uttarayan is the annual kite festival of SPIC MACAY NIT Durgapur Chapter. It is celebrated every
                    year in the day of Makar Sankranti. The fierce battle of kites and the energetic dance moves
                    creates a vibrant environment . Everyone delves into the madness of this colourful festival and
                    enjoys every bit of time.</p>
                        {/* <button onClick=""><a href="https://m.facebook.com/story.php?story_fbid=2868811669881868&id=840463576050031">READ MORE</a></button> */}
                      <Link to={{pathname:"/eventdis",state:{
                          type:"UTTRAYAN"
                      }}}>
                          SEE ARTICLES
                          </Link>  
               </div> 
            
        </div>
        <div className="card">
                <div className="imgcard">
                   <img className="images" src={seventeen}/>
                </div>
                   <div className="detail">
                       <h2 className="titl">ANUBHAV</h2>
                       <p className="info" style={{fontSize:"10px"}}>" Creativity is intelligence having fun." With this mantra, SPIC MACAY NIT Durgapur Chapter and
                        BMEP join hands every year to organise its annual art workshop, Anubhav. This one of a kind art
                        workshop focuses to bring the colourful flare of creativity among the underprivileged children
                        of Durgapur. With a plethora of colourful art, craft and intricate origami, it is truly a magnificent
                        opportunity for the children to explore the depths of their imagination and unleash its vibrancy</p>
                            {/* <button onClick=""><a href="https://x.facebook.com/pg/spicmacaynitd/posts/?ref=page_internal&mt_nav=0">READ MORE</a></button> */}
                            <Link to={{pathname:"/eventdis",state:{
                          type:"ANUBHAV"
                      }}}>
                          SEE ARTICLES
                          </Link>  
                   </div> 
            
            </div>
                        
</div>        


     <div className="contain1" >
    <div className="card">
        <div className="imgcard">
           <img className="images" src={indika}/>
        </div>
           <div className="detail">
               <h2 className="titl">INDIKA</h2>
               <p className="info">VIRASAT is the official cultural extravaganza organized by SPIC MACAY NIT Durgapur Chapter.
                The perfect blend of gorgeous grace with sonorous tune swirls in the flavour of Indian culture
                and tradition. Esteemed artists of the likes of Pt Viswa Mohan Bhatt(Grammy Award
                Winner), Dr. N. Rajam, Pt. Ajoy Chakraborty etc. have been show stealers in the recent past. So
                what are you waiting for? Fasten your seatbelts and get ready to soak in India's rich heritage at
                its finest.</p>

                    <Link to={{pathname:"/eventdis",state:{
                          type:"INDIKA"
                      }}}>
                          SEE ARTICLES
                          </Link>  
           </div> 
    {/* <div className="card">
            <div className="imgcard">
               <img className="images" src={twonine}/>
            </div>
               <div className="detail">
                   <h2 className="titl">ADITI</h2>
                   <p className="info">Uttarayan is the annual kite festival of SPIC MACAY NIT Durgapur Chapter. It is celebrated every
                    year in the day of Makar Sankranti. The fierce battle of kites and the energetic dance moves
                    creates a vibrant environment . Everyone delves into the madness of this colourful festival and
                    enjoys every bit of time.</p>
                        <Link to={{pathname:"/eventdis",state:{
                          type:"ADITI"
                      }}}>
                          SEE ARTICLES
                          </Link>  
               </div> 
            
        </div>
        <div className="card">
                <div className="imgcard">
                   <img className="images" src={seventeen}/>
                </div>
                   <div className="detail">
                       <h2 className="titl">ANUBHAV</h2>
                       <p className="info" style={{fontSize:"10px"}}>" Creativity is intelligence having fun." With this mantra, SPIC MACAY NIT Durgapur Chapter and
                        BMEP join hands every year to organise its annual art workshop, Anubhav. This one of a kind art
                        workshop focuses to bring the colourful flare of creativity among the underprivileged children
                        of Durgapur. With a plethora of colourful art, craft and intricate origami, it is truly a magnificent
                        opportunity for the children to explore the depths of their imagination and unleash its vibrancy</p>
                            
                            <Link to={{pathname:"/eventdis",state:{
                          type:"ANUBHAV"
                      }}}>
                          SEE ARTICLES
                          </Link>  
                   </div> 
            
            </div>
                         */}
</div>        

</div>

 <br/><br/>


{/* <!-- wings --> */}
<h1 style={{textAlign:"center"}}> WINGS</h1>
<div className="row">
    <div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={ten} alt="Avatar" style={{width:"300px",height:"300px",border:'1px solid black',borderRadius:'10px'}}/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",fontFamily:"Algerian"}}>DANCE WING</h1>
    <p style={{marginTop:"20px",color:"black !important",fontFamily:"algerian"}}>This wing stuns everyone with their moves.</p>
    </div>
  </div>
</div>
</div>

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={twelve} alt="Avatar" style={{width:"300px",height:"300px",border:'1px solid black',borderRadius:'10px'}}/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",fontFamily:"Algerian"}}>MUSIC WING</h1>
    <p style={{marginTop:"20px",color:"black !important",fontFamily:"algerian"}}>This wings creates melody.</p>
    </div>
  </div>
</div>
</div>

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={thirteen} alt="Avatar" style={{width:"300px",height:"300px"}}/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",fontFamily:"Algerian"}}>IT WING</h1>
    <p style={{marginTop:"20px",color:"black !important",fontFamily:"algerian"}}>This wings handles the technical stuff.</p>
    </div>
  </div>
</div>
</div>


<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={eleven} alt="Avatar" style={{width:"300px",height:"300px",border:'1px solid black',borderRadius:'10px'}}/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",fontFamily:"Algerian"}}>ART WING</h1>
    <p style={{marginTop:"20px",color:"black !important",fontFamily:"algerian"}}>This wings add colors to the world.</p>
    </div>
  </div>
</div>
</div>

</div>
 <br/><br/>
            </div>
        );
    }
}

export default connect()(Main);  
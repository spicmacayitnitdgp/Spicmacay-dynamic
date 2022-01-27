import React from 'react'

export default function Members(props) {
    return (
        <div>
             {/* <div class="col-md-4 col-sm-6 col-xs-12">
            <article class="material-card Red">
                <h2>
                    <span>{props.name}</span>
                    <strong>
                        <i class="fa fa-fw fa-star"></i>
                        {props.designation}
                    </strong>
                </h2>
                <div class="mc-content">
                    <div class="img-container">
                        <img class="img-responsive" src={props.image}/>
                    </div>
                    
                </div>
                "https://i.ibb.co/JC4skS0/team-animate.jpg"
               
            </article>
        </div> */}

        <section class="team-page-section">
        <div class="container">
            <div class="row clearfix">
                <div class="team-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul class="social-icons">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-skype"></i></a></li>

                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                        <div class="image">
                            <a href="#"><img src={props.image} alt="" /></a>
                        </div>
                        <div class="lower-content">
                            <h3><a href="#">{props.name}</a></h3>
                            <div class="designation">{props.designation} </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
        </div>
    )
}

import React, { Component } from 'react';

import Members from "./team/Team"
import FinalYear from "./team/FinalYear"
import PreFinalYear from "./team/PreFinalYear"
import SecondYear from "./team/SecondYear"


class Team extends Component {
    render() {
        return (
            <div>

            <FinalYear/>
            <PreFinalYear/>
            <SecondYear/>

                {/* <h1 className="events" id="teammembers" style={{ color: "#AC3B61", fontFamily: 'Gilroy' }}>OUR TEAM</h1>

                <h3 className="events" id="teammembers" style={{ color: "#AC3B61", fontFamily: 'Gilroy' }}>4th Year</h3>
                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={rik} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Rik Dasgupta
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    President
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sujana} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sujana Pal
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Treasurer
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={somdatta} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Somdatta Paul
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Treasurer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={annasha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Annasha Dey
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    General Seceretary
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={adrija} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Adrija Biswas
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Vice-President,<br></br>Music Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={joy} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Joy Mallick
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Assistance General Secretary
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={madhumita} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Madhumita Mandal
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Sponsorship Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={abhishek} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Abhisek Dey
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Sponsorship Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sayani} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sayani Saha
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Publicity Head
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={saswata} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Saswata Bagchi
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Publicity Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={soumyajeet} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Saumyajeet Mukherjee
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Web-D Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={rittick} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Rittick Purkait
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    IT Wing Head
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={soumyajit} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Soumyajit Ganguly
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    IT Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={saikat} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Saikat Ghosh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    IT Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>




                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sneha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sneha Rani Dey
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                </div>



                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={madhura} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Madhura Ghosh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={trishika} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Trishikha Saha
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Art Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>




                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={tamogna} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Tamoghna Basak
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Art Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                </div>



                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={rangeet} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Rangeet Hait
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Art Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={suneha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Suneha Maiti
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>




                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={abhigyan} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Abhigyan Deoli
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                </div>



                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={anusha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Anusha Ghosh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Content Wing Head
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>



                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ananya} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ananya Nath
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={piyanjana} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Piyanjana Ghosh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                </div>


                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={pritam} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Pritam Mandal
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>



                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={tiyasha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Tiyasha Ghosh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={tapojyoti} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Tapojyoti Mohanta
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>

                </div>
                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={souvik} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Souvik Bose
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>



                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={arya} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Arya Verma
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={shivapriya} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Shivapriya Garigipati
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>

                </div>



                <div className="members row">





                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={mahumita} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Mahumita Bose
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>



                </div> */}








                {/* 3rd Years */}









                {/* <br />
                <br />

                <h3 className="events" id="teammembers" style={{ color: "black" }}>3rd Year</h3>
                <br />
                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ram} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Rama Charan
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={avishek} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Avishek Deb Abhi
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={avik} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                     Avik Ghatak
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sayang} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sayan Ghosh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={aishwariya} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Aishwarya Prakash
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={titas} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Titas Nath
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ankita} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ankita Mandal
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={archi} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Archi Saha
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={rajdeep} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Rajdeep Sinku
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={diksha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Diksha Senpati
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={aditi} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Aditi Gedam
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={chandrima} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Chandrima Roy Chowdhury
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={gayatri} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    V.Gayatri Deepshikha
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Dance Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={aashish} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Aashish Illa
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={chitrita} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Chitrita Roy
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ansh} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ansh Jha
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sankita} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sankita Mandal
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={prabhat} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Prabhat Rathod
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={akansha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Akansha Gautam
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={anupam} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Anupam Das
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sayantani} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sayantani Roy
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sayan} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sayan Majumdar
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={shubham} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Shubham Ghosal
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ramiz} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ramiz Mollah
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ananyaBiswas} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ananya Biswas
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={deboleena} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Deboleena Das
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={rageshree} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ragashree Bhattacharjee
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                </div>

                <div className="members row">


                    <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={rhiti} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Rhiti Mitra
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Music Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ritika} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Ritika Singh
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                        <input type="checkbox" className="checked" name=" " />
                        <div className="toogle">+</div>
                        <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={Sneha} /></div>
                        <div className="details">
                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                    Sneha Chattopadhyay
                                </div>
                            </div>

                            <div className="row">
                                <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                    Creative Wing
                                </div>
                            </div></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div> */}





                    {/* 2nd Year */}









                    {/* <br />
                    <br />
                    <h3 className="events" id="teammembers" style={{ color: "black" }}>2nd Year</h3>
                    <br />
                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={adarsh} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Adarsh Arya
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Content Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ankon} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Ankon Ghosh
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Art Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={arpan} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Arpan Sardar
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Art Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={Sabyasachi} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Sabyasachi Bose
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Content Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ayushi} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Ayushi Gupta
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Music Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sravanthi} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Banothu Sravanthi
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Dance Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={biswanath} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Biswanath Chakraborty
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Content Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={harika} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Boddu Harika
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Dance Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={debapriya} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Debapriya Saha
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Dance Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={debrup} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Debrup Chakraborty
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Music Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={drishita} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Drishita Nag
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Music Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={harshita} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Harshitha Yenna
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Dance Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={hridikalpa} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Hridikalpa Das
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Music Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={ishan} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Ishan Gupta
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        IT Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={joyraj} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Joyraj Longjam
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Music Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={pratiti} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Pratiti Pradhan
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Dance Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={prativa} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Prativa Sahu
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Dance Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={pritasmi} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Pritasmi Bhattacharyya
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Music Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={priyanshi} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Priyanshi Singh
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Art Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sharvani} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Sharvani Reddy Dommata
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Content Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={sourajit} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Sourajit Pal
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        Art Wing
                                    </div>
                                </div></div>
                        </div>
                    </div>

                    <div className="members row">


                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={souvikpal} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Souvik Pal
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        IT Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>


                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={yuvraj} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Yuvraj Amar
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        IT Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                        <div className=" col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={Saikat} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Saikat Sarkar
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        IT Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    </div>
                    <div className="members row">
                        <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 " id="card">
                            <input type="checkbox" className="checked" name=" " />
                            <div className="toogle">+</div>
                            <div className="imgbox"> <img alt="pic" style={{ objectFit: "cover !important" }} loading="lazy" className="cardimg " src={Debasmita} /></div>
                            <div className="details">
                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '5px' }} className="col-lg-12 name">
                                        Debasmita Das
                                    </div>
                                </div>

                                <div className="row">
                                    <div style={{ textAlign: 'center', marginLeft: '4px' }} className="col-lg-12 descp">
                                        IT Wing
                                    </div>
                                </div></div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"></div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Team;
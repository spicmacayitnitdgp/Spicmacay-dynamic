import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {addnews}  from './actions/recordactions'
import FormFields from '../utils/formfields';
import "./11.css"

class News extends Component {

    state={
        formSuccess:false,
        formError:false,
        val:'',
        formdata:{
            author: {
                element:'input',
                value:'',
                config:{
                    name:'author',
                    placeholder:'Enter your name here',
                    type:'text'
                },
                validation:{
                    required:true
                },
                valid:true,
                validationMessage:'',
                label:true
            },
            subject: {
                element:'textarea',
                value:'',
                config:{
                    name:'subject',
                    placeholder:'Enter the subject here',
                    type:'text'
                },
                validation:{
                    required:true
                },
                valid:true,
                validationMessage:'',
                label:true
            },
            date: {
                element:'input',
                value:'',
                config:{
                    name:'date',
                    placeholder:'Enter the date here',
                    type:'text'
                },
                validation:{
                    required:true
                },
                valid:true,
                validationMessage:'',
                label:true
            },
            link: {
                element:'input',
                value:'',
                config:{
                    name:'link',
                    placeholder:'Enter any link here',
                    type:'text'
                },
                validation:{
                    required:true
                },
                valid:true,
                validationMessage:'',
                label:true
            },
            month: {
                element:'input',
                value:'',
                config:{
                    name:'month',
                    placeholder:'Enter the month here',
                    type:'text'
                },
                validation:{
                    required:true
                },
                valid:true,
                validationMessage:'',
                label:true
            }
    }
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })

}

submitform=(event)=>{
    event.preventDefault();
    const isformvalid=validform(this.state.formdata,'register')
    const data=generatedata(this.state.formdata,'register')
    if(true){
        this.props.dispatch(addnews(data,this.state.val)).then((response)=>{
            if(response.payload.success){
                this.setState({
                    formSuccess:true,
                    formError:false
                })
                alert("Image added")
                window.location.reload();
            }
                else{

                    this.setState({
                        formError:true
                    })
                    alert("Wrong Password")
                }
            }
        )}
    }

entry=(event)=>{
    this.setState({
        val:event.target.value
    })
 
}
    render() {
        console.log(this.props)
        return (
            <div className="container">
            <div className='add'>
                <div className="headtitle row">
                    <h2 className="neon" style={{fontFamily:"sans serif"}}>ADD NEWS HERE</h2>
                </div>
              
            <div className="row"></div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="jumbotron">

             
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.author}
                  id={'author'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
 
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.subject}
                  id={'subject'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
             
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.date}
                  id={'date'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>

             
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.month}
                  id={'month'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>

             
            <div className="row">
             <div className="each">
               <FormFields
                  formdata={this.state.formdata.link}
                  id={'link'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
            <div className="row">
            <h4>PASSWORD</h4> <br></br> <br></br><br></br><br></br>
             <div className="each">
             <br></br>
               <input type="password" value={this.state.val} onChange={(event)=>{this.entry(event)}}/>
            </div>
            </div>

            <div className="block row">
          <center>   
            <button style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT THIS INFORMATION
             </button>
                </center>
                 </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(News);
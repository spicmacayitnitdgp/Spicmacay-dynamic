import React, { Component } from 'react';
import {searchyear} from './actions/recordactions'
import {connect} from 'react-redux'

class Eventdis extends Component {
    state={
    }
    componentWillMount=()=>{
        console.log(this.props.location.state.type)
            this.props.dispatch(searchyear(this.props.location.state.type)).then(res=>{
                this.setState({
                    results:res.payload.resyr
                })
                console.log(this.state.results[0].images[0].original)
            }).catch(err=>{
                console.log(err)
            })
        
    }
    render() {
        return (
            <div className="row">
                 {
                     this.state.results?
             this.state.results.length>0 ?
             this.state.results.map((item,i)=>(
                   <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6" key={i}>
                        <div className="row" id="imgBox">
                            <img src={item.images[0].original}/>
                        </div>
                             <div className="row">
                                <p>{item.name}</p>
                                <p>{item.content}</p>
                            </div>   
                       
                   </div>
        )):null
             :null
            }
            </div>
        );
    }
}


const mapStateToProps=(state)=>{    
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Eventdis);
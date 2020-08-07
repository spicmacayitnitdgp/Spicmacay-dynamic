import React, { Component } from 'react';
import {allgallery} from "./actions/recordactions"

import {connect} from 'react-redux'
import ImageGallery from 'react-image-gallery';
class GalleryDis extends Component {
    state={
        images:[]
    }
    componentWillMount=()=>{
        this.props.dispatch(allgallery()).then(res=>{
         console.log(res.payload)
            this.setState({
                images:res.payload
            })
            console.log(this.state.images[0])
        }).catch(err=>console.log(err))
    }
    render() {
        return (
        <div>
            {
                this.state.images?
             this.state.images.length>0 ?
             this.state.images.map((item,i)=>(
                   <div className="row" key={i}>
                        <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12" id="imgBox" >
                            <img src={item.images[0].original} style={{height:"200px",width:"200px"}} />
                        </div>
                             <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                                <p>{item.name}</p>
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
      record:state.record,
    }
      
}
export default connect(mapStateToProps)(GalleryDis);
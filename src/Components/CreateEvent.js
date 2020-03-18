import React,{Component} from 'react';
import './CreateEvent.css'
import Cookie from 'js-cookie';
import axios from 'axios';
import moment from 'moment';
class CreateEvent extends Component{
    submit = (e)=>{
        e.preventDefault()
        // console.log(e.target);
        let formData = new FormData();
        formData.append('title', e.target.title.value)
        formData.append('description', e.target.description.value)
        formData.append('location', e.target.location.value)
        
        let startDate = e.target.startDate.value;
        let startTime = e.target.startTime.value;
        let endDate = e.target.endDate.value;
        let endTime = e.target.endTime.value;


        let startDateTime = moment(startDate + " " + startTime).format();
        let endDateTime = moment(endDate + " " +endTime ).format();
        console.log(startDateTime);
        console.log(endDateTime)
        formData.append('startDateTime', startDateTime);
        formData.append('endDateTime', endDateTime);
   
        
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        let fileList = [...this.state.files]
        console.log(fileList)
        // console.log(this.state.files)
        for(let x= 0; x<fileList.length; x++){
            formData.append('pictures',fileList[x])
        }
        // formData.append('pictures[]',this.state.files)
        // console.log(formData.get('pictures'))
        
        axios.post('events/create',formData, config).then((response)=>{
                console.log(response)
        }).catch((err)=>{
            console.log(err);
        })
    }
    imageViewer = (event)=>{
        // console.log(e.target.files)
        let filesNo = event.target.files.length;
        let carouselImg = document.getElementsByClassName('carousel-img')
        let fileList = []
        for(let x =0; x < filesNo; x++){
            carouselImg[x].src = URL.createObjectURL(event.target.files[x]);
            fileList.push(event.target.files[x])
        }
        this.setState({files: fileList})
    }
    
    constructor(props){
        super(props)
        this.state = {
            files: []
        }
    }
    render(){
        return(
            <div className='container'>
                
                <div className='row' id='Wrapper'>

                    <form className='col s12 l9 offset-l1' onSubmit={this.submit}>

                        <div className="row">

                            <div className="input-field col s12 l6">
                                <input  id="title" type="text" className="validate" required/>
                                <label htmlFor="title">Title</label>
                            </div>

                            <div className="input-field col s12 l6">
                                <input id="location" type="text" className="validate" required/>
                                <label htmlFor="location">location</label>
                            </div>

                        </div>
                        
                        <div className='row'>
                            <div className="input-field col s12">
                                <textarea id="description" className="materialize-textarea" data-length="120" required></textarea>
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>

                        <div className="carousel">
                                <a className="carousel-item" href="#one!"><img src="" className="carousel-img"/></a>
                                <a className="carousel-item" href="#two!"><img src="" className="carousel-img"/></a>
                                <a className="carousel-item" href="#three!"><img src="" className="carousel-img"/></a>
                                <a className="carousel-item" href="#four!"><img src="" className="carousel-img"/></a>
                                <a className="carousel-item" href="#five!"><img src="" className="carousel-img"/></a>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn red darken-1">
                                <span>File</span>
                                <input type="file" multiple name="pictures[]" onChange={this.imageViewer} accept="image/png, image/jpeg" required/>
                            </div>
                           
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className='input-field col s6'>
                                 <input id='start-date' type="text" className="datepicker" name="startDate"/>
                                 <label htmlFor="start-date" >Start Date</label>
                            </div>

                            <div className='input-field col s6'>
                                 <input id='start-time' type="text" className="timepicker" name="startTime"/>
                                <label htmlFor="start-time" >Start Time</label>
                            </div>

                        </div>

                        <div className="row">
                            <div className='input-field col s6'>
                                 <input id='end-date' type="text" className="datepicker" name="endDate"/>
                                 <label htmlFor="end-date" >End Date</label>
                            </div>

                            <div className='input-field col s6'>
                                 <input id='end-time' type="text" className="timepicker" name="endTime"/>
                                <label htmlFor="end-time" >End Time</label>
                            </div>
                        </div>
                        <div className='row center-align'>
                            <button className="btn waves-effect waves-light light-blue darken-4" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
    componentDidMount(){
         if(Cookie.get('accessToken')===undefined){
              this.props.history.push('/login');
         }
    }
}

export default CreateEvent
import React,{Component} from 'react';
import './CreateEvent.css'
import Cookie from 'js-cookie';
import axios from 'axios';
import moment from 'moment';
import ErrorComponent from './Errors';
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
        this.props.fetching(true)

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
        
        axios.post('api/events/create',formData, config).then((response)=>{
                
            this.props.fetching(false);
            window.M.toast({html: 'Event Created Successful', classes: "light-blue darken-4"});
            this.props.history.push('/events');
        }).catch((err)=>{
            this.props.fetching(false);
            console.log(err);
            let error = "An error has occurred";
            this.props.addErrors(error)
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
                          {/* Add the preloader if it is loading*/}
                        {
                          this.props.loading===true?
                            <div className="progress" data-testid="progress">
                                <div className="indeterminate"></div>
                            </div>:
                            ""
                        }
                            {/* The error Handling */}
                        {this.props.errors.length> 0 ? <ErrorComponent errors={this.props.errors} removeErrors={this.props.removeErrors}/>: ""}
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
                                <a className="carousel-item" href="#one!"><img src="" className="carousel-img" alt=""/></a>
                                <a className="carousel-item" href="#two!"><img src="" className="carousel-img" alt=""/></a>
                                <a className="carousel-item" href="#three!"><img src="" className="carousel-img" alt=""/></a>
                                <a className="carousel-item" href="#four!"><img src="" className="carousel-img" alt=""/></a>
                                <a className="carousel-item" href="#five!"><img src="" className="carousel-img" alt=""/></a>
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
                                 <input id='start-date' type="text" className="datepicker" name="startDate" required/>
                                 <label htmlFor="start-date" >Start Date</label>
                            </div>

                            <div className='input-field col s6'>
                                 <input id='start-time' type="text" className="timepicker" name="startTime" required/>
                                <label htmlFor="start-time" >Start Time</label>
                            </div>

                        </div>

                        <div className="row">
                            <div className='input-field col s6'>
                                 <input id='end-date' type="text" className="datepicker" name="endDate" required/>
                                 <label htmlFor="end-date" >End Date</label>
                            </div>

                            <div className='input-field col s6'>
                                 <input id='end-time' type="text" className="timepicker" name="endTime" required/>
                                <label htmlFor="end-time" >End Time</label>
                            </div>
                        </div>
                        <div className='row center-align'>
                            <button className="btn waves-effect waves-light light-blue darken-4" type="submit" name="action" disabled={this.props.loading}>
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
    componentDidMount(){

        var textArea = document.getElementById('description');
        var textAreaInstance = window.M.CharacterCounter.init(textArea,{});
    
        var startDatePicker = document.getElementById('start-date');
        var startDatePickerInstance = window.M.Datepicker.init(startDatePicker, {});
    
        var startTimePicker = document.getElementById('start-time')
        var startTimePickerInstance = window.M.Timepicker.init(startTimePicker, {});
        
        var endDatePicker = document.getElementById('end-date');
        var endDatePickerInstance = window.M.Datepicker.init(endDatePicker, {});
    
        var endTimePicker = document.getElementById('end-time')
        var endTimePickerInstance = window.M.Timepicker.init(endTimePicker, {});
    
        var elems = document.querySelectorAll('.carousel');
        var instances = window.M.Carousel.init(elems, {});

         if(Cookie.get('accessToken')===undefined){
              this.props.history.push('/login');
              window.M.toast({html: 'Login Please.', classes: "red darken-1"})
         }
    }
}

export default CreateEvent
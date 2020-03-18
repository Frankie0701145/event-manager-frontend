import React,{Component} from 'react';
import './CreateEvent.css'
import Cookie from 'js-cookie';

class CreateEvent extends Component{
    render(){
        return(
            <div className='container'>
                
                <div className='row' id='Wrapper'>

                    <form className='col s12 l9 offset-l1'>

                        <div className="row">

                            <div className="input-field col s12 l6">
                                <input  id="title" type="text" className="validate"/>
                                <label htmlFor="title">Title</label>
                            </div>

                            <div className="input-field col s12 l6">
                                <input id="location" type="text" className="validate"/>
                                <label htmlFor="location">location</label>
                            </div>

                        </div>
                        {/* <div class="carousel">
                            <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
                            <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
                            <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
                            <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                            <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
                        </div> */}
                       

                        <div className='row'>
                            <div className="input-field col s12">
                                <textarea id="description" className="materialize-textarea" data-length="120"></textarea>
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>

                        <div className="file-field input-field">
                            <div className="btn red darken-1">
                                <span>File</span>
                                <input type="file" multiple/>
                            </div>
                           
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className='input-field col s6'>
                                 <input id='start-date' type="text" className="datepicker"/>
                                 <label htmlFor="start-date" >Start Date</label>
                            </div>

                            <div className='input-field col s6'>
                                 <input id='start-time' type="text" className="timepicker"/>
                                <label htmlFor="start-time" >Start Time</label>
                            </div>

                        </div>

                        <div className="row">
                            <div className='input-field col s6'>
                                 <input id='end-date' type="text" className="datepicker"/>
                                 <label htmlFor="end-date" >End Date</label>
                            </div>

                            <div className='input-field col s6'>
                                 <input id='end-time' type="text" className="timepicker"/>
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
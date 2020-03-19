import React, {Component} from 'react'
import axios from 'axios'
import './Events.css'
import moment from 'moment'
class Events extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            events: [],
            filteredEvents: []
        }
    }
    carouselHref = ["#one!", "#two!","#three!", "#four!"]

    eventOutPut=()=>{

        if(this.state.filteredEvents<1){
            return(
                <div className='container'>
                    No Events
                </div>
            )
        }else{
            return(
                <div className='container'>
                    {
                        this.state.filteredEvents.map((event)=>{
                            return(
                                <div className="row" key={event._id}>

                                    <div className="col" key={'carousel'+event._id}>
                                        <div className="carousel carousel-slider" id="carousel">
                                                {
                                                    event.pictures.map((picture,index)=>{
                                                        return(
                                                            <a className="carousel-item" href={this.carouselHref[index]} key={picture._id}>
                                                                <img src={`${picture.url}`} alt=""/> 
                                                            </a>
                                                        )
                                                    })
                                                }
                                        </div>
                                    </div>

                                    <div className='col' key={'info' +event._id}>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>    
            )
        }
        
    }

    render(){
        console.log(this.state);
        // return(
        //     this.eventOutPut()
        // )
        if(this.state.events.length>0){
            return(
                <div className='container'>
                            {/* Events */}
                    {
                        this.state.events.map((event)=>{
                            return(
                                <div className='row' id="eventWrapper" key={event._id}>
                                                {/* {info} */}
                                    <div className='col s12 l6' id="infoWrapper">
                                        
                                            <div className="row"> 
                                                   <h3 className='center-align'> {event.title}</h3>
                                                   <h6 className='center-align'>{event.location}</h6>
                                                  
                                            </div>

                                            <div className="row center-align" id="descriptionWrapper">
                                                    <span>{event.description}</span>
                                            </div>

                                            <div className="row">
                                                <div className="col l12 center-align">
                                                    <span className="prefix">from</span> 
                                                    <span className='date'>{moment(event.startDateTime).format("lll")}</span>
                                                </div>
                                                <div className="col l12 center-align">
                                                    <span className="prefix">to</span> 
                                                    <span className='date'>{moment(event.startDateTime).format("lll")}</span>
                                                </div>
                                                
                                            </div>

                                            <div className="row center-align">
                                                <button className='waves-effect waves-light btn-large green'>Send Invite </button>
                                            </div> 

                                            <div className="row center-align">
                                                    <span id="organizer">Organised by {"Moblex"}</span>
                                            </div> 
                                    </div>
                                         {/* carousel */}
                                    <div className='col s12 l6' id="carouselWrapper">          
                                        <div className="carousel carousel-slider" id="carousel">
                                            {
                                                event.pictures.map((picture, index)=>{
                                                    return(
                                                        <a className="carousel-item"  href={this.carouselHref[index]}  key={picture._id}>
                                                            <img src={picture.url}/>
                                                        </a>
                                                    )      
                                                })
                                            }
                                                
                                        </div> 
                                    </div>


                                </div>
                            )   
                        })
                            
                    }   

                </div>  
            )
        }else{
            return(
                <div className='container center-align' style={{margin: "10px !important"}}>
                    <h4>No Events For Now!</h4>
                </div>)
        }
     
    }
    componentDidMount(){
        this._isMounted = true;
        axios.get('api/events/all').then((response)=>{
            let events = response.data
            let state = {...this.state, events: events, filteredEvents: events}
            if(this._isMounted){
                this.setState(state)
                let elems = document.querySelectorAll('#carousel')
                let instance = window.M.Carousel.init(elems ,{})
            }   
        }).catch((err)=>{
            console.error(err);

        })
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
}

export default Events
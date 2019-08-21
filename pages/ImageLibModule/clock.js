import React, { Component } from 'react';
import Page from '../../components/page';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: "",
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    updateEvent = () => {

        const interval = setInterval(() => {
            if(this.state.data !== ""){
                const time = Date.parse(this.state.data) - Date.parse(new Date());
                
                const seconds = Math.floor((time/1000) % 60);
                const minutes = Math.floor((time/1000/60) % 60);
                const Hours = Math.floor(time/(1000*60*60) % 24);
                const days = Math.floor(time/(1000*60*60*24));
    
                // console.log('seconds' , seconds , 'minutes' , minutes , 'Hours' , Hours , 'days' , days);
                this.setState({
                    day: days,
                    hour: Hours,
                    minute: minutes,
                    second: seconds
                });
            }else{
                console.log('Cannot update blank data');
            }


        },1000);

    }

    getdata = (e) => {
        this.setState({data: e.target.value});
        console.log(this.state.data);
    }
    leading0(num){
        if(num < 10){
            return '0' + num;
        }else{
            return num;
        }
    }


    render(){

        const { day,hour,minute,second } = this.state;
        
        return (
            <div className="">
                <div className="row">
                    <div className="col">
                        <h2>CountDown to {this.state.data}</h2><br/>
                        <span>{ `${this.leading0(day)} Day ${this.leading0(hour)} Hour ${this.leading0(minute)} Minute ${this.leading0(second)} Second Remaning...` }</span><br/>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="New Event countDown"
                                onChange={this.getdata.bind(this)} />
                                <small id="emailHelp" className="form-text text-muted">We'll Update the abouve event as you like</small>
                            </div>
                            <button type="button" className="btn btn-primary"
                            onClick={() => this.updateEvent()}>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Page(Clock);
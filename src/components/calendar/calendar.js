import React, {Component} from 'react';
import moment from 'moment';
import './calendar.css';

export default class Calendar extends Component{
    state = {
        currentYear: moment().format("YYYY"),
        currentDay: moment().format("D"),
        currentMonth: moment().format("MMMM"),
        dayNames: moment.weekdays(),
        daysInMonth: moment().daysInMonth()
    }

    createGridDays(){
        let days=[];
        for(let i=1; i<=this.state.daysInMonth; i++){
            days.push(<div>{i}</div>);
        }
        return days;
    }

    render(){
        return(
            <div className='calendar-container'>
                    <div className='top-bar'>
                        <div className='month'>{this.state.currentMonth}</div>
                        <div className='year'>{this.state.currentYear}</div>
                    </div>

                    <div className='days-row'>
                        {this.state.dayNames.map(day =>{
                            return <div>{day}</div>
                            
                            })}
                    </div>

                    <div className='days-grid'>
                        
                            {this.createGridDays()}
                    
                    </div> 
            </div>
        );
    }

}
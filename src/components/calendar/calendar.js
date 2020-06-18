import React, {Component} from 'react';
import moment from 'moment';
import './calendar.css';
import { getJSDocReadonlyTag } from 'typescript';

export default class Calendar extends Component{
    constructor(){
        super();
        this.state = {
            currentYear: moment().format("YYYY"),
            currentDay: moment().format("D"),
            currentMonth: moment().format("MMMM"),
            dayNames: moment.weekdays(),
            daysInMonth: moment().daysInMonth(),
            dayStart: "none",
            start: undefined,
            daysGrid: []
        }
    }
    

    setDayStart(){
         var currentMonthNumber = moment().format("MM");
         var currentYearNumber = moment().format("YYYY");
         var myDate = `${currentYearNumber}-${currentMonthNumber}-01`;
         var dayStart = moment(myDate).format("dddd");
         this.setState({
             dayStart: dayStart
         });
     }

     process_days(){
        let days = [];
        let daystart = this.state.dayStart;
        console.log(daystart)
        this.state.dayNames.map((day)=>{ 
            if(day==daystart){
                this.setState({
                    start: 1
            });
            }
        });
        console.log(this.state.start)

            for(let i=1; i<=this.state.daysInMonth; i++){
                
                if (i<this.state.start+1){
                    days.push(<div className="blank" key={i}></div>);
                }
                else{
                    if(i-1==this.state.currentDay){
                        days.push(<div className="current-day" key={i}>{i-1}</div>);
                    }
                    else{
                        days.push(<div key={i}>{i-1}</div>);
                    }
                }
            }
            this.setState({
                daysGrid: days
            });            
    }

    async componentDidMount(){
        await this.setDayStart();//fix error cause function not wait longer for update the state
        await this.process_days();
    };


    
    render(){
 
        return(
            <div className='calendar-container'>
                    <div className='top-bar'>
                        <div className='month'>{this.state.currentMonth}</div>
                        <div className='year'>{this.state.currentYear}</div>
                    </div>

                    <div className='days-row'>
                        {this.state.dayNames.map(day =>{
                            return <div key={day}>{day}</div>
                            
                            })}
                    </div>

                    <div className='days-grid'>
                            {this.state.daysGrid}
                    </div> 
            </div>
        );
    };
}
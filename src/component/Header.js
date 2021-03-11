import React, {Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }


    componentDidUpdate(){

    }


    componentWillUnmount(){
        clearInterval(this.timerID);
    }


    tick(){
        this.setState({date : new Date()});
    }

    render(){
        return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 text-left">
                    <h1>เฮลตี้ คาเฟ่ </h1>
                </div>
                <div className="col-md-4 text-right">
                {this.state.date.toLocaleTimeString()}
                </div>

            </div>
            
        </div>
        );
    }
}
export default Header
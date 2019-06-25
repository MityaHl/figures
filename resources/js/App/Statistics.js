import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";

class Statistics extends Component{

    constructor(props){
        super(props);
        this.state = {figureSquare: [], typeList: [] , percents: []};
        //this.arrOfTypes = this.arrOfTypes.bind(this);
    }

    componentDidMount(){
        axios.get('/figures/showSquare')
            .then(response => {
                console.log(response.data);
                this.setState({
                    figureSquare : response.data});
            })
        axios.get('/types/getTypes')
            .then(response => {
                console.log(response.data);
                this.setState({
                    typeList : response.data});
            })
        axios.get('/figures/calcPercent')
            .then(response => {
                console.log(response.data);
                this.setState({
                    percents : response.data});
            })
    }

    render() {
        return (
            <div className="col-md-8 justify-content-md-center">
                {this.state.typeList.map((type, index) => (
                    <p  className="list-group-item" key={index}>{type} занимает {this.state.percents[index]} процентов от общей площади и составляет {this.state.figureSquare[index+1]}</p>
                ))}
            </div>
        )
    }
}

export default Statistics;
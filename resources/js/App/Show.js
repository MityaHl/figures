import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";

class Show extends Component{

    constructor(props){
        super(props);
        this.state = {figures: [], types: [] };
        //this.arrOfTypes = this.arrOfTypes.bind(this);
    }

    componentDidMount(){
        axios.get('/figures')
            .then(response => {
                console.log(response.data);
                this.setState({
                    figures : response.data});
            })
        axios.get('/types/getTypes')
            .then(response => {
                console.log(response.data);
                this.setState({
                    types : response.data});
            })
    }

    render() {
        return (
            <div className="col-md-8 justify-content-md-center">
                <h1 style={{paddingLeft: '40px'}}>Список фигур</h1>
                <ul className="list-group" style={{overflowY: 'scroll', height: '600px', border: '2px solid #e9ecef', borderRadius: '4px'}}>
                    {this.state.figures.map((figure, index) => (
                        <li  className="list-group-item" key={index}> {this.state.types[figure.type_id - 1]} c площадью: { figure.square }
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Show;
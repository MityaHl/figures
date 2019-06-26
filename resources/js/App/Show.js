import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";

class Show extends Component{

    constructor(props){
        super(props);
        this.state = {figures: [], types: [], idForDelete: '' };
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('/figures')
            .then(response => {
                    this.setState({
                        figures : response.data.reverse()
                    });
            })
        axios.get('/types/getTypes')
            .then(response => {
                console.log(response.data);
                this.setState({
                    types : response.data});
            })
    }

    deleteSubmit(e) {
        e.preventDefault();
        let isRemoving = confirm("Удалить фигуру?");
        if(isRemoving) {
            let idForDelete = {};
            idForDelete.id = e.target.attributes.getNamedItem('value').value;
            axios.post('/figures/delete', idForDelete)
                .then(
                    location.reload
                )
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    }


    render() {
        return (
            <div className="col-md-9 justify-content-md-center">
                <h3>Список фигур</h3>
                <ul className="list-group" style={{overflowY: 'scroll', height: '600px', border: '2px solid #e9ecef', borderRadius: '4px'}}>
                    {
                        this.state.figures.map((figure, index) => (
                        <li  className="list-group-item" key={figure.id}> {this.state.types[figure.type_id - 1]} c площадью: { figure.square }
                            <i className="fa fa-times" style={{float: 'right', color: 'red'}} aria-hidden="true" value={figure.id} onClick={this.deleteSubmit}></i> </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Show;
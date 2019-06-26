import React, {Component} from 'react';
import Circle from './figures/Circle';
import Square from './figures/Square';
import Triangle from './figures/Triangle';
import Rectangle from './figures/Rectangle';
import 'bootstrap/dist/css/bootstrap.css'

class Create extends Component{

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            type_id: ''
        };
        this.selectType = this.selectType.bind(this);
    }

    componentWillMount() {
        axios
            .get('/types')
            .then(response => {
                this.setState({ types: response.data });
            })
    }

    arrayOfTypes(){
        return this.state.types.map(function (type, index) {
            return <option key={index} value={type.id}>{type.type}</option>;
        })
    }

    selectType(e) {
        this.setState({
           type_id: Number(e.target.value)
        });
    }

    selectFigure() {
        switch (this.state.type_id) {
            case 1:
                return <Circle type_id={this.state.type_id}/>;
            case 4:
                return <Triangle type_id={this.state.type_id}/>;
            case 2:
                return <Square type_id={this.state.type_id}/>;
            case 3:
                return <Rectangle type_id={this.state.type_id}/>;
        }
    }

    render() {
        return (
            <div className="justify-content-md-center col-md-9">
                <h3>Добавление фигуры</h3>
                <select className="custom-select my-1 mr-sm-2" onChange={this.selectType} name="type_id" placeholder="Тип фигуры">
                    <option value="" disabled selected>Тип фигуры</option>
                    {this.arrayOfTypes()}
                </select>
                {this.selectFigure()}
            </div>
        )
    }
}

export default Create;

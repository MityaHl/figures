import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class Circle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radius = this.radius.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const products = {
            type_id: this.state.type_id,
            data: JSON.stringify(this.state.data)
        }
        let uri = '/figures';
        axios.post(uri, products).then((response) => {
            console.log(products);
        });
    }

    radius(e) {
        this.setState({
            data: {
                radius: Number(e.target.value)
            }
        });
    }

    render() {
        return (
            <div>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Group controlId="raius">
                        <br/>
                        <img src="../../../images/circle.png" alt=""/>
                        <br/>
                        <Form.Label> Радиус </Form.Label>
                        <Form.Control type="number" onChange={this.radius} name="radius" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Создать
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Circle;
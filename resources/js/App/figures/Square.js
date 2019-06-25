import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.length = this.length.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const products = {
            type_id: this.state.type_id,
            data: JSON.stringify(this.state.data)
        }
        let uri = '/figures';
        axios.post(uri, products).then((response) => {
            console.log('!!!');
        });
    }

    length(e) {
        this.setState({
            data: {
                length: Number(e.target.value)
            }
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="length">
                        <img src="../../../images/square.png" alt=""/>
                        <br/>
                        <Form.Label> Длина стороны </Form.Label>
                        <Form.Control type="number" onChange={this.length} name="length" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Создать
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Square;
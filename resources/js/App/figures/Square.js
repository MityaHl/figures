import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: '',
            inputClass: null,
            valid: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.length = this.length.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.data.length > 0) {
            this.setState({
                inputClass: 'is-valid'
            });
            const products = {
                type_id: this.state.type_id,
                data: JSON.stringify(this.state.data),
                inputClass: null
            }
            let uri = '/figures';
            axios.post(uri, products).then((response) => {
                console.log('!!!');
            });
            this.changeValid();
        }else {
            this.setState({
                inputClass: 'is-invalid'
            });
            if(this.state.valid) {
                this.changeValid();
            }
        }
    }

    changeValid() {
        this.setState({
            valid: !this.state.valid
        })
    }

    length(e) {
        this.setState({
            data: {
                length: Number(e.target.value)
            }
        });
    }

    render() {
        const mistake = !this.state.valid && <p className="invalid-feedback">Такого квадрата быть не может.</p>;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="length">
                        <img src="../../../images/square.png" alt=""/>
                        <br/>
                        <Form.Label> Длина стороны </Form.Label>
                        <Form.Control className={this.state.inputClass} type="number" onChange={this.length} name="length" />
                        {mistake}
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
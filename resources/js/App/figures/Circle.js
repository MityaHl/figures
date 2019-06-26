import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class Circle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {},
            inputClass: null,
            valid: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radius = this.radius.bind(this);
        this.changeValid = this.changeValid.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.data.radius > 0) {
            this.setState({
                inputClass: 'is-valid'
            });
            const products = {
                type_id: this.state.type_id,
                data: JSON.stringify(this.state.data)
            };
            let uri = '/figures';
            axios.post(uri, products).then((response) => {
                console.log(products);
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

    radius(e) {
        this.setState({
            data: {
                radius: Number(e.target.value)
            }
        })
    }

    render() {
        const mistake = !this.state.valid && <p className="invalid-feedback">Такого круга быть не может.</p>;
        return (
            <div>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Group controlId="raius">
                        <br/>
                        <img src="../../../images/circle.png" alt=""/>
                        <br/>
                        <Form.Label> Радиус </Form.Label>
                        <Form.Control className={this.state.inputClass} type="number" onChange={this.radius} name="radius" />
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

export default Circle;
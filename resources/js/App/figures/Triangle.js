import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

class Triangle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {},
            inputClass: null,
            valid: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.firstSide = this.firstSide.bind(this);
        this.secondSide = this.secondSide.bind(this);
        this.thirdSide = this.thirdSide.bind(this);
        this.changeValid = this.changeValid.bind(this);
        this.failValidation = this.failValidation.bind(this);
    }

    failValidation() {
        this.setState({
            inputClass: 'is-invalid'
        });
        if (this.state.valid) {
            this.changeValid();
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.data.secondSide > 0  && this.state.data.firstSide > 0 && this.state.data.thirdSide > 0) {
            if (this.state.data.firstSide < this.state.data.secondSide + this.state.data.thirdSide && this.state.data.secondSide < this.state.data.firstSide + this.state.data.thirdSide && this.state.data.thirdSide < this.state.data.secondSide + this.state.data.firstSide) {
                this.setState({
                    inputClass: 'is-valid'
                });
                const products = {
                    type_id: this.state.type_id,
                    data: JSON.stringify(this.state.data)
                };
                let uri = '/figures';
                axios.post(uri, products).then((response) => {
                });
                this.changeValid();
            } else {
                this.failValidation();
            }
        } else {
            this.failValidation();
        }
    }

    changeValid() {
        this.setState({
            valid: !this.state.valid
        })
    }

    firstSide(e) {
        this.setState({
            data: {
                firstSide: Number(e.target.value),
                secondSide: this.state.data.secondSide,
                thirdSide: this.state.data.thirdSide
            }
        });
    }
    secondSide(e) {
        this.setState({
            data: {
                secondSide: Number(e.target.value),
                firstSide: this.state.data.firstSide,
                thirdSide: this.state.data.thirdSide
            }
        });
    }
    thirdSide(e) {
        this.setState({
            data: {
                firstSide: this.state.data.firstSide,
                secondSide: this.state.data.secondSide,
                thirdSide: Number(e.target.value)
            }
        });
    }

    changeValid() {
        this.setState({
            valid: !this.state.valid
        })
    }

    render() {
        const mistake = !this.state.valid && <p className="invalid-feedback">Такого треугольника быть не может.</p>;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <img src="../../../images/triangle.png" alt=""/>
                    <br/>
                    <Form.Group controlId="firstSide">
                        <Form.Label> Первая сторона </Form.Label>
                        <Form.Control className={this.state.inputClass} type="number"  onChange={this.firstSide} name="firstSide" />
                    </Form.Group>
                    <Form.Group controlId="secondSide">
                        <Form.Label> Вторая сторона </Form.Label>
                        <Form.Control className={this.state.inputClass}  type="number"  onChange={this.secondSide} name="secondSide" />
                    </Form.Group>
                    <Form.Group controlId="thirdSide">
                        <Form.Label> Третья сторона </Form.Label>
                        <Form.Control className={this.state.inputClass}  type="number"  onChange={this.thirdSide} name="thirdSide" />
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

export default Triangle;
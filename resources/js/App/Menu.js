import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
class Menu extends Component{
    render() {
        return (
                <div className="list-group col-md-3">
                    <a href="#" className="list-group-item">
                    <Nav className="mr-auto" style={{verticalAlign: 'middle'}}>
                        <div >
                            <NavLink to='/' activeClassName='active' className="nav-link">Главная</NavLink>
                        </div>
                    </Nav>
                    </a>
                    <a href="#" className="list-group-item">
                        <Nav className="mr-auto" style={{verticalAlign: 'middle'}}>
                            <div >
                                <NavLink to='/create' activeClassName='active' className="nav-link">Добавить фигуру</NavLink>
                            </div>
                        </Nav>
                    </a>
                    <a href="#" className="list-group-item">
                        <Nav className="mr-auto" style={{verticalAlign: 'middle'}}>
                            <div >
                                <NavLink to='/show' activeClassName='active' className="nav-link">Все фигуры</NavLink>
                            </div>
                        </Nav>
                    </a>
                    <a href="#" className="list-group-item">
                        <Nav className="mr-auto" style={{verticalAlign: 'middle'}}>
                            <div >
                                <NavLink to='/statistics' activeClassName='active' className="nav-link">Статистика</NavLink>
                            </div>
                        </Nav>
                    </a>
                </div>
        )
    }
}

export default Menu;

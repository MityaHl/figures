import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './Create'
import Show from "./Show";
import Menu from './Menu'
import Statistics from "./Statistics";
import Header from './Header'
import PageInfo from "./PageInfo";

class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        <Header/>
                        <div className="row" style={{width: '1110px', margin: '0px'}}>
                            <Menu/>
                            <Switch>
                                <Route path={'/create'} exact component={ Create } />
                                <Route path={'/show'} exact component={ Show } />
                                <Route path={'/statistics'} exact component={ Statistics } />
                                <Route path={'/'} exact component={ PageInfo } />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;

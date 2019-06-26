import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './Menu'
import PageInfo from './PageInfo'
import Header from './Header'
class MainPage extends Component{
    render() {
        return (
            <div className='container'>
                <Header/>
                <div className="row" style={{ margin: '0px'}}>
                    <Menu/>
                    <PageInfo/>
                </div>
            </div>
        )
    }
}

export default MainPage;

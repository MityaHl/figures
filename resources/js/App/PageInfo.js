import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
class PageInfo extends Component{
    render() {
        return (
            <div className="col-md-9 justify-content-md-center">
                <h3>Главная страница</h3>
                    <img src="../../images/main.jpeg" alt="" style={{float: 'left', marginLeft: '80px'}}/>
            </div>
        )
    }
}

export default PageInfo;

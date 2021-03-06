import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <a className="navbar-brand" href="#">
                    <img src={require('../../assets/images/logo.png')} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Headers
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">List Users</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header
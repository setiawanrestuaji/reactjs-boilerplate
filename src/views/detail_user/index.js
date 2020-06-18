import React from 'react'
import Header from '../../components/header'
import Title from '../../components/title'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { GET_DETAIL_USER } from '../../redux/actions/users'

class DetailUser extends React.Component{
    componentDidMount(){
        this.props.dispatch(GET_DETAIL_USER(this.props.match.params.id))
    }
    render(){
        const props = this.props
        if(props.user.loadAllUsers){
            return(
                <div className="h1 text-center">Loading</div>
            )
        }else if(props.user.errAllUsers){
            return(
                <div className="h1 text-center">Error</div>
            )
        }
        return(
            <div className="container-fluid">
                <Header/>
                <div className="container">
                    <Title value="Detail User"/>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{props.user.detailUser.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{props.user.detailUser.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{props.user.detailUser.phone}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>{props.user.detailUser.website}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    user: state.userReducer
})
export default connect(mapStatetoProps)(withRouter(DetailUser))
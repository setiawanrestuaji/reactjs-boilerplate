import React from 'react'
import Header from '../../components/header'
import Title from '../../components/title'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { GET_ALL_USERS } from '../../redux/actions/users'

class ListUsers extends React.Component{
    componentDidMount(){
        this.props.dispatch(GET_ALL_USERS())
    }

    render(){
        const props = this.props
        if(props.users.loadAllUsers){
            return(
                <div className="h1 text-center">Loading</div>
            )
        }else if(props.users.errAllUsers){
            return(
                <div className="h1 text-center">Error</div>
            )
        }
        return(
            <div className="container-fluid">
                <Header/>
                <div className="container">
                    <Title value="List Users"/>
                    {
                        props.users.allUsers.map((item, i)=>(
                            <div key={i} className="card mt-2">
                                <div className="card-body">
                                    {`${item.name} ( ${item.email} )`}
                                    <div>
                                        <Link to={`/detail/${item.id}`}>Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    users: state.userReducer
})

export default connect(mapStatetoProps)(ListUsers)
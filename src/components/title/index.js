import React from 'react'

class Title extends React.Component{
    render(){
        const { title } = this.props
        return(
        <div className="h2">{this.props.value}</div>
        )
    }
}

export default Title
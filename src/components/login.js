import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component{
    render(){
        return <div>aa</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
    }
}

export default connect(mapStateToProps)(Login);
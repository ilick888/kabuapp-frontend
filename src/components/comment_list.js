import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { readCommentByStock } from '../actions/action_comment'
import { Card } from '@material-ui/core';
import { CardContent, Typography } from '@material-ui/core';
import Title from './title';

const formatDate = (date, format) => {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
}


class CommentList extends Component{

    constructor(props){
        super(props)
        const { id } = this.props.id
        this.state={
            slice_data : {}
        }
        if(id) this.props.readCommentByStock(id)
    }

    componentWillReceiveProps(){
        const slice_data = Object.fromEntries(
            Object.entries(this.props.comments).slice(0, 5)
        )
        this.setState({slice_data: slice_data})
    }

    renderComment(){
        const slice_data = Object.fromEntries(
            Object.entries(this.props.comments).slice(0, 5)
        )
        return _.map(this.state.slice_data, comment => (
            <Card key={comment.id}>
                <CardContent>
                    <Typography>{comment.comment}</Typography>
                    <Typography>{formatDate(new Date(comment.created_at),'yyyy-MM-dd HH:mm')}</Typography>
                </CardContent>
            </Card>
        ))
    }

    render(){
        return (
        <React.Fragment>
            <Title>みんなのコメント</Title>
            {this.renderComment()}
        </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({ comments : state.comment })
const mapDispatchToProps = { readCommentByStock }

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Card, TextField, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl'
import Title from './title';
import { Field, reduxForm } from 'redux-form';
import { createComment } from '../actions/action_comment'

const renderTextArea = ({
    input,
    label,
    meta: { touched, error },
    rows = 4,
    required = false,
    rootClass = '',
  }) => (
    <TextField
      required={required}
      classes={{root: rootClass}}
      multiline
      rows={rows}
      error={!!(touched && error)}
      label={label}
      variant='outlined'
      helperText={touched && error}
      {...input}
    />
  )

class CommentPost extends Component{

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }


    async onSubmit(values){
        await this.props.createComment(values)
    }

    render(){

        const { classes, handleSubmit, send } = this.props
    
        const style = {width : '100%'}
    
        return (
          <React.Fragment>
            <Title>コメント投稿</Title>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div>
              <Field name='textarea' label='comment' component={renderTextArea} required />              
              </div>
              <div>
              <Button type='submit' size='medium' variant='contained' color='primary' >送信</Button>
              </div>
            </form>
          </React.Fragment>
        )
      }

}

const validate = values => {
    const errors = {}
  
    if (!values.comment) errors.comment = "Enter a title, please."
  
    return errors
  }
  
  const mapDispatchToProps = { createComment }
  
  export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventNewForm' })(CommentPost)
  )
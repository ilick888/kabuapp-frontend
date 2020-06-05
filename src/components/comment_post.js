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

    submit = async (values) => {
        const params = {
            stock: this.props.id.id,
            comment: values.textarea
        }
        await this.props.createComment(params)
    }


    render(){

        const { handleSubmit } = this.props
    
        return (
          <React.Fragment>
            <Title>コメント投稿</Title>
            <form onSubmit={handleSubmit(this.submit)}>
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

    if (!values.comment) errors.comment = "Enter please."
    if (values.length > 140) errors.comment = "too Long"
    return errors
  }
  
  const mapDispatchToProps = { createComment }
  
  export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'createComment' })(CommentPost)
  )
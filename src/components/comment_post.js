import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import Title from './title';
import { Field, reduxForm, reset } from 'redux-form';
import { createComment } from '../actions/action_comment'
import { withSnackbar } from 'notistack';

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
      fullWidth
      rows={rows}
      error={!!(touched && error)}
      label={label}
      variant='outlined'
      helperText={touched && error}
      {...input}
    />
  )

class CommentPost extends Component{

    submit = async (values, dispatch) => {
        
        const params = {
            stock: this.props.id.id,
            comment: values.textarea
        }
        await this.props.createComment(params)
        dispatch(reset("createComment"));
        this.props.enqueueSnackbar('投稿しました', { variant: "success", autoHideDuration: 2000})
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
    reduxForm({ validate, form: 'createComment'})(withSnackbar(CommentPost))
  )
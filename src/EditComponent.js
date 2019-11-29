import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const Editname = this.getName.value;
    const Editmessage = this.getMessage.value;
    const data = {
      id : new Date(),
      Editname,
      Editmessage,
    }
  this.props.dispatch({
    type : "UPDATE",
    id : this.props.comment.id,
    data : data
  })    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" placeholder="ป้อนชื่อ" defaultValue={this.props.comment.name} ref={(input) => (this.getName) = input}/><br/><br/>
          <textarea required rows="5" cols="28" placeholder="ข้อความ" defaultValue={this.props.comment.message} ref={(input) => (this.getMessage) = input}/><br/><br/>
          <button>Update</button>
        </form>
      </div>
    )
  }
}

export default connect()(EditComponent)

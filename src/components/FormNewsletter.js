import React from "react"

export default class IndexPage extends React.Component {
    // Create Email Newsletter
    state = {
        EmailName: "", // String when the form is submit. 
    }

    
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Thank you for subscribing to our newsletter ${this.state.EmailName}!`) 
        // This is thank you massage after the user fill out the form.
    }

    render() {
      return (
        <form method="post" onSubmit={this.handleSubmit} action=""> 
            <input 
                type="text" 
                name="EmailName" 
                placeholder="Enter your email address"
                value={this.state.EmailName}
                onChange={this.handleInputChange}
                />

            <button
                type="submit">Send
            </button>
        </form>
      );
    }
  }
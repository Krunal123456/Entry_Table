import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
 
  };

  change = e => {
    
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    
  
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      this.setState({
        
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
        
          name="us"
         
          floatingLabelText="US City"
          value={this.state.us}
          onChange={e => this.change(e)}
          
         
        />
        <br />
        <TextField
       
          name="states" 
          floatingLabelText="State"
          value={this.state.states}
          onChange={e => this.change(e)}
         
        />
        <br />
        <TextField
        
          name="pop"
          floatingLabelText="Population"
          value={this.state.pop}
          onChange={e => this.change(e)}
          
        />
        <br />
        <RaisedButton label="Add to Table" onClick={e => this.onSubmit(e)} />
      </form>
    );
  }
}

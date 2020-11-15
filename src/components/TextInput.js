import React from 'react';

function TextInput (props) {
  return (
    <div>
      <form>
        <label>Enter your message to be encrypted</label>
        <input type="text" id="message" onChange={props.updateText}></input>
      </form>
      {/* <div>
        <span>Grid Id: {props.gridId}</span>
      </div> */}
    </div>
  )
}

export default TextInput


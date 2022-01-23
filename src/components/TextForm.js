import React,{useState} from 'react'


export default function TextForm(props) {

  const [text,setText]=useState('');

  const handleOnChange= (event)=>{
    // console.log("on Change");
    setText(event.target.value)
  }

  const handleUpClick=()=>{
    // console.log("Uppercase btn was clicked");
    setText(text.toUpperCase())
    props.showalert("Converted to Uppercase!","success") 
  }

  const handleLowClick=()=>{
    setText(text.toLowerCase())
    props.showalert("Converted to Lowercase!","success") 
  }

  const handleClearText=()=>{
    setText('') 
    props.showalert("Text cleared!","success") 
  }

  const copyToClipboard=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard!","success") 
   
  }

  const removeSpaces=()=>{
    setText(text.replace(/ +/g, ' '))
    props.showalert("Extra spaces removed!","success") 
  }

    return (     
       <> 
       <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
       {/* <h1>{props.heading: this.props.mode==='light'?color}</h1> */}
         <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} value={text} rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy to Clipboard</button>
      <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove extra Spaces</button>
      </div>

      <div className="container my-4" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(' ').length} words and {text.length} characters</p> */}
        <p>{text.trim().split(' ').filter(word=>word!=='').length} words and {text.length} characters</p>
       
        <p>{text.length>0?0.004 * text.split(" ").length:0} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in the textbox above to preview it here"}</p>
      </div>
     

</>
    )
}

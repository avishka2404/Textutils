import React from 'react'

export default function About(props) {

    return (
        
        <div className="container" >
            
            <h1 style={{color: props.mode==='light'?'black':'white'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne" >
      <button  className="accordion-button" type="button" style={{backgroundColor: props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}}>
        TextUtils gives you a way to analyze your text quickly and efficiently. 
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.Thus its suitable to write text with words/chars limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" >
      <button  className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'rgb(36 74 104)', color: props.mode==='light'?'black':'white'}}>
    This word counter software works in any browser such as chrome, Internet Explorer, Firefox, Safari, Opera. It suits to count characters in facebook, blog, books,excel document, pdf document, etc.
      </div>
    </div>
  </div>
</div>

</div>
      
    )
}

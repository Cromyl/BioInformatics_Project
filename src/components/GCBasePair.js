import React from 'react'
import { useState } from 'react';

export default function GCBasePair() {
    const[input,setInput] = useState('');
    const[text,setText]=useState('');

    const handleButtonClick = (event)=>{
        event.preventDefault();
        const dnaSequence=input
        var count=0;
        for(var i=0;i<dnaSequence.length;i++){

            if(dnaSequence[i]!='A'&& dnaSequence[i]!='T'&&dnaSequence[i]!='G'&&dnaSequence[i]!='C'){
                setText('Incorrect Input !!')
                return;
            }
            if(dnaSequence[i]=='G'|| dnaSequence[i]=='C')
                count++;
        }
        
        setText('Count = '+count+" bps");
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        
      <form style={{ width: '50%' }}>
      <h3><u>Count of G-C  Base Pair in DNA</u></h3>
      <br></br>
  <div className="mb-3">
    <label htmlFor="" className="form-label"><b>Enter 5' to 3' DNA Sequence</b></label>
    <div style={{display:'flex'}}>
        <p>5'&nbsp;&nbsp;</p>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="form-control" id="" aria-describedby=""/>
    <p> &nbsp;&nbsp;3'</p>
    </div>
  </div>
  <button type="submit" onClick={handleButtonClick} className="btn btn-primary">Calculate</button>
  <br></br>
  <br></br>
  <h3> {text} </h3>
  
</form>

    </div>
  )
}

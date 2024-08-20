import React from 'react'
import { useState } from 'react';

export default function StartStopCodon() {
    const[input,setInput] = useState('');
    const[text,setText]=useState('');

    function startStopCodon(dnaSequence) {
        const startCodon = 'ATG';
        const stopCodons = new Set(['TAA', 'TAG', 'TGA','UAA','UAG','UGA']);
        var start=[];
        var stop=[];
        const sequenceLength = dnaSequence.length;
        for(var i=0;i<=sequenceLength-3;i++){
            if (dnaSequence.substr(i, 3) === startCodon) {
                start.push(i+1);
            }
            if(stopCodons.has(dnaSequence.substr(i,3))){
                stop.push(i+1);
            }
        }
        setText("Start Codon Position = "+start.toString()+"\n Stop Codon Position = "+stop.toString())
      }

    const handleButtonClick = (event)=>{
        event.preventDefault();
        const dnaSequence=input
        startStopCodon(dnaSequence);
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        
      <form style={{ width: '50%' }}>
      <h3><u>Start Stop Codon Position</u></h3>
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
  <pre className="wrap-text"><h3> {text} </h3></pre>
  
</form>

    </div>
  )
}

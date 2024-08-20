import React from 'react'
import { useState } from 'react'

export default function ORFSequence() {
    const[input,setInput] = useState('');
    const[text,setText]=useState('');

    function findORFs(dnaSequence) {
        const startCodon = 'ATG';
        const stopCodons = new Set(['TAA', 'TAG', 'TGA']);
        let orfs = [];
        const sequenceLength = dnaSequence.length;
      
        for (let i = 0; i <= sequenceLength - 3; i++) {
          if (dnaSequence.substr(i, 3) === startCodon) {
            let orf = '';
            for (let j = i; j <= sequenceLength -3; j += 3) {
              const codon = dnaSequence.substr(j, 3);
              if (stopCodons.has(codon)) {
                orf+=codon;
                break;
              }
              orf += codon;
            }
            if (orf.length > 0 && stopCodons.has(orf.substr(-3))) {
              orfs.push(orf);
            }
          }
        }
      
        return orfs;
      }

    const handleButtonClick = (event)=>{
        event.preventDefault();
        const dnaSequence=input
        const orfs = findORFs(dnaSequence);
        var result='ORFs of the given sequence: \n';
        for(const str of orfs){
            result+="• "+str;
            result+='\n';
        }
        setText(result);
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        
      <form style={{ width: '50%' }}>
      <h3><u>ORF of DNA Sequence</u></h3>
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

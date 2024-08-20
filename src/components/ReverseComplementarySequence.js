import React from 'react'
import { useState } from 'react';

export default function ReverseComplementarySequence() {
    const[input,setInput] = useState('');
    const[text,setText]=useState('');

    const ComplementarySequence = (input_seq)=>{
        const dnaSequence=input_seq;
        const complement = {
            'A': 'T',
            'T': 'A',
            'G': 'C',
            'C': 'G'
          };
          for (let nucleotide of dnaSequence) {
            if (!complement[nucleotide]) {
              return '!! tupnI tcerrocnI';
            }
          }
          let complementarySequence = '';
          for (let i = 0; i < dnaSequence.length; i++) {
            const nucleotide = dnaSequence[i];
            complementarySequence += complement[nucleotide];
          }
          
          return (complementarySequence);
    }

    const handleButtonClick = (event)=>{
        event.preventDefault();
        const dnaSequence=ComplementarySequence(input);
        const validNucleotides = new Set(['A', 'T', 'G', 'C']);
  
  let reversedSequence = '';

  for (let i = 0; i < dnaSequence.length; i++) {
    const nucleotide = dnaSequence[i];
    
    if (!validNucleotides.has(nucleotide)) {
        setText('Incorrect Input !!')
      return ;
    }
  }
  
  for (let i = dnaSequence.length - 1; i >= 0; i--) {
    reversedSequence += dnaSequence[i];
  }
  setText("5' "+reversedSequence+" 3'")

    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        
      <form style={{ width: '50%' }}>
      <h3><u>Reverse Complementary DNA Sequence</u></h3>
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

import React from 'react'
import { useState } from 'react'

export default function Mutation() {

    const[input1,setInput1] = useState('');
    const[input2,setInput2] = useState('');
    const[text,setText]=useState('');

    const codonToAminoAcid = {
        'ATA': 'I', 'ATC': 'I', 'ATT': 'I', 'ATG': 'M',
        'ACA': 'T', 'ACC': 'T', 'ACG': 'T', 'ACT': 'T',
        'AAC': 'N', 'AAT': 'N', 'AAA': 'K', 'AAG': 'K',
        'AGA': 'R', 'AGG': 'R', 'CTA': 'L', 'CTC': 'L',
        'CTG': 'L', 'CTT': 'L', 'CCA': 'P', 'CCC': 'P',
        'CCG': 'P', 'CCT': 'P', 'CAC': 'H', 'CAT': 'H',
        'CAA': 'Q', 'CAG': 'Q', 'CGA': 'R', 'CGC': 'R',
        'CGG': 'R', 'CGT': 'R', 'GTA': 'V', 'GTC': 'V',
        'GTG': 'V', 'GTT': 'V', 'GCA': 'A', 'GCC': 'A',
        'GCG': 'A', 'GCT': 'A', 'GAC': 'D', 'GAT': 'D',
        'GAA': 'E', 'GAG': 'E', 'GGA': 'G', 'GGC': 'G',
        'GGG': 'G', 'GGT': 'G', 'TCA': 'S', 'TCC': 'S',
        'TCG': 'S', 'TCT': 'S', 'TTC': 'F', 'TTT': 'F',
        'TTA': 'L', 'TTG': 'L', 'TAC': 'Y', 'TAT': 'Y',
        'TAA': '-', 'TAG': '-', 'TGA': '-', 'TGC': 'C',
        'TGT': 'C', 'TGG': 'W'
      };
      
      function translateDNA(dnaSequence) {
        let protein = '';
      
        for (let i = 0; i <= dnaSequence.length - 3; i += 3) {
          const codon = dnaSequence.substr(i, 3);
          const aminoAcid = codonToAminoAcid[codon];
          if (aminoAcid) {
            protein += aminoAcid;
          }
        }
      
        return protein;
      }

      function determineMutationType(normalDNA, mutatedDNA) {
        if (normalDNA.length !== mutatedDNA.length) {
          return 'Frameshift mutation';
        }
      
        let isSubstitution = false;
        for (let i = 0; i < normalDNA.length; i++) {
          if (normalDNA[i] !== mutatedDNA[i]) {
            if (isSubstitution) {
              return 'Multiple Substitution mutations';
            }
            isSubstitution = true;
          }
        }
      
        if (isSubstitution) {
          return 'Single Substitution mutation';
        }
      
        return 'No mutation';
      }

      const handleButtonClick = (event)=>{
        event.preventDefault();
        const normalDNA=input1;
        const mutatedDNA=input2;
        const normalProtein = translateDNA(normalDNA);
        const mutatedProtein = translateDNA(mutatedDNA);
        const mutationType = determineMutationType(normalDNA, mutatedDNA);

        setText('Normal Protein Sequence:'+ normalProtein+'\nMutated Protein Sequence:'+ mutatedProtein+'\nType of Mutation:'+ mutationType)
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        
      <form style={{ width: '50%' }}>
      <h3><u>Mutation Type and Protein Sequence</u></h3>
      <br></br>
  <div className="mb-3">
    <label htmlFor="" className="form-label"><b>Enter 5' to 3' Original DNA Sequence</b></label>
    <div style={{display:'flex'}}>
        <p>5'&nbsp;&nbsp;</p>
    <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)} className="form-control" id="" aria-describedby=""/>
    <p> &nbsp;&nbsp;3'</p>
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label"><b>Enter 5' to 3' Mutated DNA Sequence</b></label>
    <div style={{display:'flex'}}>
        <p>5'&nbsp;&nbsp;</p>
    <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)} className="form-control" id="" aria-describedby=""/>
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

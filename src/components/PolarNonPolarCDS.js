import React from 'react'
import { useState } from 'react';

export default function PolarNonPolarCDS() {
    const[input,setInput] = useState('');
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
      

      const polarAminoAcids = new Set(['R', 'N', 'D', 'Q', 'E', 'H', 'K', 'S', 'T', 'Y']);
      const nonPolarAminoAcids = new Set(['A', 'C', 'G', 'I', 'L', 'M', 'F', 'P', 'W', 'V']);
      

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
      
      function countAminoAcids(proteinSequence) {
        let polarCount = 0;
        let nonPolarCount = 0;
      
        for (const aminoAcid of proteinSequence) {
          if (polarAminoAcids.has(aminoAcid)) {
            polarCount++;
          } else if (nonPolarAminoAcids.has(aminoAcid)) {
            nonPolarCount++;
          }
        }
      
        return { polarCount, nonPolarCount };
      }

    const handleButtonClick = (event)=>{
        event.preventDefault();
        const dnaSequence=input
        const proteinSequence = translateDNA(dnaSequence);
        const counts = countAminoAcids(proteinSequence);
        setText("Protein Sequence = "+proteinSequence+"\nCount of Polar Amino Acids = "+counts.polarCount+"\nCount of Non-Polar Amino Acids = "+counts.nonPolarCount);
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
        
      <form style={{ width: '50%' }}>
      <h3><u>Count of Polar and Non-Polar Amino Acids</u></h3>
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

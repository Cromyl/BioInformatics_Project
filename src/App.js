import './App.css';
import Heading from './components/Heading';
import ComplementarySequence from './components/ComplementarySequence';
import ReverseSequence from './components/ReverseSequence';
import ReverseComplementarySequence from './components/ReverseComplementarySequence';
import GCBasePair from './components/GCBasePair';
import ORFSequence from './components/ORFSequence';
import StartStopCodon from './components/StartStopCodon';
import PolarNonPolarCDS from './components/PolarNonPolarCDS';
import Mutation from './components/Mutation';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#fdfdaf'}}>
      <Heading/>
      <hr></hr>
      <ComplementarySequence/>
      <hr></hr>
      <ReverseSequence/>
      <hr></hr>
      <ReverseComplementarySequence/>
      <hr></hr>
      <GCBasePair/>
      <hr></hr>
      <hr></hr>
      <ORFSequence/>
      <hr></hr>
      <StartStopCodon/>
      <hr></hr>
      <PolarNonPolarCDS/>
      <hr></hr>
      <hr></hr>
      <Mutation/>
    </div>
  );
}

export default App;

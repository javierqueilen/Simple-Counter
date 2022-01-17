import './App.css';
import Estruc from './component/estruc';

function App(props) {
  return (
    <>
    <Estruc 
    num1 = {props.counter}
    num2 = {props.counter2}
    num3 = {props.counter3}
    num4 = {props.counter4}
    num5 = {props.counter5}
    num6 = {props.counter6}
    />
    </>
  );
}

export default App;


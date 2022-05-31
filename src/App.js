import logo from './logo.svg';
import './App.css';
import{Quastion} from './Quastion'
import{Likebutton} from './Likebutton'

function App() {
 
  
    
   
  return (
    <>
    <div className="App">
       <h1 className='App__head'>Quora</h1>
       <h3 >Demo quastion..!</h3>
       <h2 >Why is React the best?</h2>
       <h3>Answer</h3> 
       <h2 >These are the main motivations for React being a top choice for many developers.<br/> ReactJS is a performative, structured, and productive library with numerous advantages.<br/> With features such as virtual DOM, reusable components, one-way data binding,<br/> Hooks, and JSX, the library provides a robust environment</h2>
       <Likebutton/><Quastion/>
       
     
    </div>
    
  </>
  );

  }

export default App;

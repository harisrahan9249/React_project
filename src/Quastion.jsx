import { useState } from "react"
export function Quastion (props){


    /*State*/
    const [input, setInput] = useState("");
    const [inputcomment, setInputcomment] = useState("");
    /*On Form Submit*/
  
    return (
      <>
        <div className="App">
          <form onSubmit={(e) => e.preventDefault()} className="Search__form">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="answer"
              
            ></input>
            <button onclick={console.log(input)}>Submit</button>
          </form>
          <h2>New answer:{input}</h2>
        </div>
        <div className="App">
          <form onSubmit={(e) => e.preventDefault()} className="Search__form">
            <textarea
              value={inputcomment}
              onChange={(e) => setInputcomment(e.target.value)}
              type="text"
              placeholder="comment"
              
            ></textarea>
            <button onclick={console.log(inputcomment)}>Submit</button>
            <h2>comment:{inputcomment}</h2>
          </form>
         
        </div>
      </>
    );
  
}
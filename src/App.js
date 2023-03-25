import { useEffect } from "react";
import axios from "axios";
const App = () => {

  const newInfo = () =>{
    return (
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) =>console.log("data",data))
    )
  } 
  
    


  return (
    <div className="App">
      <button onClick={()=> newInfo()}>save</button>
    </div>
  );
}

export default App;

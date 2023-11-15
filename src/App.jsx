
import "./App.css";
import {Link, Route, Routes} from 'react-router-dom'
import Fields from "./components/Fields";
import About from "./components/About";

function App() {

  return (
    <>
      <div className="">
        
        <div className="content">
          <h1>Notes App</h1>
          <h2>Hello, user!</h2>
          <Fields/>
          
        </div>

        <Link to='/about'>About the app</Link>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

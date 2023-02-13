import './Style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Awards from './Pages/Awards';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Interests from './Pages/Interests';
import Skills from './Pages/Skills';

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Awards' element={<Awards/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Interests' element={<Interests/>}/>
          <Route path='/Skills' element={<Skills/>}/>
        </Routes>
       </BrowserRouter>
    </>
  );
}
export default App;

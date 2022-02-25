import {  SignIn_page } from './components/Sign-in-page';
import {Register} from './components/Register';
import {Navbar} from './components/navbar';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';


function App() {
  const location = useLocation();
 
  return (
    <div >
     
     {location.pathname === "/" ? <Navbar/>:null}
     <Routes>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<SignIn_page/>}/>
     </Routes>
    
    </div>
  );
}

export default App;

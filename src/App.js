import {Routes, Route} from 'react-router-dom';

import PostDetail from './pages/PostDetail';
import PostGallery from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';


function App() {
  return (
  
  <div className='text-light'>    
   
    <Navbar/>
    <div className='container p-4'>
    <Routes>      
      <Route path="/posts/:id" element={<PostDetail/>}/>
      <Route path="/" element={<PostGallery/>}/>    
    </Routes>
    </div>
    </div>
    
  );
}

export default App;

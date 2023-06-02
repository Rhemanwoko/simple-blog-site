import Navbar from './Navbar';
import Land from './pages/land';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to Rhemas Blog';
  // const google = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Land />} />
            <Route path='/newblog' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
            {/* <Home />
              <Home2 />
              <Home3 /> */}
          </Routes>
          {/* <h1>{title}</h1>
        <p>{ Math.random() * 20}</p>
        <a href={google}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

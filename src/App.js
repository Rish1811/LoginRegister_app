// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navigation';
// import Registerpage from './components/register';
// import Login from './components/login';
// import Dashboard from './components/dashboard';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/register" element={<Registerpage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Login />} /> {/* Default to login */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <div>
        <Login />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<Login />} /> Default to login
        </Routes>
      </div>
    </Router>
  );
}

export default App;
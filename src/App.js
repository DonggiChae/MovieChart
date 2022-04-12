//npm install react-router-dom prop-types
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Descriptions from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/abot-us" element={<h1>Hello</h1>}/>
        <Route path="/movie/:id" element={<Descriptions />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frige from "./components/Frige";
import Home from "./components/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/frige" element={<Frige />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;

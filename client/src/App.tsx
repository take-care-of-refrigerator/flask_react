import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frige from "./components/Frige";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./public/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/frige" element={<Frige />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default App;

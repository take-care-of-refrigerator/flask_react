import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frige from "./components/Frige";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./public/theme";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/frige" element={<Frige />} />
              <Route path="/diary/:id" element={<Frige />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
};
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frige from "./routes/Frige";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Nutritionist from "./routes/Nutritionist";
import Diary from "./routes/Diary";
import GlobalStyle from "./public/theme";
import { RecoilRoot } from "recoil";

const App = () => {

    return (
    <RecoilRoot>
        <GlobalStyle />
        <Router>
        <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/frige" element={<Frige />} />
            <Route path="/nutritionist" element={<Nutritionist />} />
            <Route path="/menu" element={<Nutritionist />} />
            <Route path="/diary/:id" element={<Diary />} />
            </Route>
        </Routes>
        </Router>
    </RecoilRoot>
    );
};
export default App;

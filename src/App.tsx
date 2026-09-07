import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='/pictures' element={<Pictures />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

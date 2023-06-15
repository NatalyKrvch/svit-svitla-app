import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsCatalogue from "module";
import Authorisation from "./pages/AuthorisationPage";
import Authors from "./pages/AuthorsPage";
import CreateCard from "./pages/CreateCardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsCatalogue />} />
        <Route path="/authorisation" element={<Authorisation />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/createcard" element={<CreateCard />} />
      </Route>
    </Routes>
  );
}

export default App;

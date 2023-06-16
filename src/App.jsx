import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import ProductsCatalogue from "./module";
import Authorisation from "./pages/AuthorisationPage";
import Authors from "./pages/AuthorsPage";
import CreateCard from "./pages/CreateCardPage";
import CreateCataulogCard from "./pages/CreateCataulogCardPage";
import CreateProductCard from "./pages/CreateProductCardPage";
import EditCataulogueCard from "./pages/EditCataulogueCardPage";
import EditProductCard from "./pages/EditProductCardPage";
import PaymentDetails from "./pages/PaymentDetailsPage";
import ProductCard from "./pages/ProductCardPage";
import QrCodeGeneration from "./pages/QrCodeGenerationPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsCatalogue />} />
        <Route path="/authorisation" element={<Authorisation />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/createcard" element={<CreateCard />} />
        <Route path="/createcataulogcard" element={<CreateCataulogCard />} />
        <Route path="/createproductcard" element={<CreateProductCard />} />
        <Route path="/editcatauloguecard" element={<EditCataulogueCard />} />
        <Route path="/editproductcard" element={<EditProductCard />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/qrcodegeneration" element={<QrCodeGeneration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

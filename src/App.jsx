import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import ProductsCataloguePage from "./pages/ProductsCatalogPage/ProductsCataloguePage";
import Authorization from "./pages/AuthorizationPage";
import Authors from "./pages/AuthorsPage";
import EditCatalogueCard from "./pages/EditCatalogueCardPage";
import EditProductCard from "./pages/EditProductCardPage";
import PaymentDetails from "./pages/PaymentDetailsPage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import QrCodeGeneration from "./pages/QrCodeGenerationPage";
import SelectCardPage from "./pages/SelectCardPage/SelectCardPage";
import NotFound from "./pages/NotFoundPage";
import CreateCardPage from "./pages/CreateCardPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsCataloguePage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/selectcreatecard" element={<SelectCardPage />}/>
        <Route path="/createcard" element={<CreateCardPage/>}/>  
        <Route path="/editcatauloguecard" element={<EditCatalogueCard />} />
        <Route path="/editproductcard" element={<EditProductCard />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/productcard" element={<ProductCardPage />} />
        <Route path="/qrcodegeneration" element={<QrCodeGeneration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

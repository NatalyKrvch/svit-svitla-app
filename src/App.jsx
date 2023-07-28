import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./pages/Layout/Layout";
const ProductsCataloguePage = lazy(() =>
  import("./pages/ProductsCatalogPage/ProductsCataloguePage")
);
const Authorization = lazy(() => import("./pages/AuthorizationPage"));
const Authors = lazy(() => import("./pages/AuthorsPage/AuthorsPage"));
const EditCatalogueCard = lazy(() =>
  import("./pages/EditCatalogueCardPage/EditCatalogueCardPage")
);
const EditProductCard = lazy(() =>
  import("./pages/EditProductCardPage/EditProductCardPage")
);
const PaymentDetails = lazy(() =>
  import("./pages/PaymentDetailsPage/PaymentDetailsPage")
);
const ProductCardPage = lazy(() =>
  import("./pages/ProductCardPage/ProductCardPage")
);
const QrCodeGeneration = lazy(() =>
  import("./pages/QrCodeGenerationPage/QrCodeGenerationPage")
);
const SelectCardPage = lazy(() =>
  import("./pages/SelectCardPage/SelectCardPage")
);
const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Feedback = lazy(() => import("./pages/FeedbackPage/FeedbackPage"));
const PreorderCataloguePage = lazy(() =>
  import("./pages/PreorderCataloguePage/PreorderCataloguePage")
);
const CreateCardPage = lazy(() =>
  import("./pages/CreateCardPage/CreateCardPage")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsCataloguePage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/preordercatalogue" element={<PreorderCataloguePage />} />
        <Route path="/selectcreatecard" element={<SelectCardPage />} />
        <Route path="/createcard" element={<CreateCardPage />} />
        <Route path="/editcatauloguecard/:id" element={<EditCatalogueCard />} />
        <Route path="/editproductcard/:id(\w+)" element={<EditProductCard />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/productcard/:id(\w+)" element={<ProductCardPage />} />
        <Route path="/qrcodegeneration" element={<QrCodeGeneration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

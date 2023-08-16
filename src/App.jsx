import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import Layout from "./pages/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "./redux/Auth/authOperations";
import { getIsLoggedIn, getUserId } from "./redux/Auth/authSelectors";
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
  const dispatch = useDispatch();
  const isLogined = useSelector(getIsLoggedIn);
  const userId = useSelector(getUserId);
  useEffect(() => {
    isLogined && dispatch(updateToken(userId));
  }, []);
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
        <Route path="/editproductcard/:id" element={<EditProductCard />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/productcard/:id" element={<ProductCardPage />} />
        <Route path="/qrcodegeneration" element={<QrCodeGeneration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Main, Wrapper } from "./LayoutStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../components/Spinner/Spinner";

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer />
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Layout;

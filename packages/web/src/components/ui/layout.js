/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
      <CookieConsent
        buttonText="I agree"
        containerClasses="text-white mx-auto mb-5 shadow-lg fixed bg-red-500 inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between"
        buttonClasses="bg-white px-5 py-2 text-red-500 font-bold rounded-md hover:bg-red-600 hover:text-white focus:outline-none"
        disableStyles={true}
      >
        This website uses cookies to improve your experience.{' '}
        <Link to="/privacy-policy/">
          Privacy policy
        </Link>
      </CookieConsent>
    </>
  );
};

export default Layout;

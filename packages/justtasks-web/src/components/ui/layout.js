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
        containerClasses=""
        buttonClasses=""
      >
        This website uses cookies to improve your experience.
        <Link to="/privacy-policy/">
          Privacy policy
        </Link>
      </CookieConsent>
    </>
  );
};

export default Layout;

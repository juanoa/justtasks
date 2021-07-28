import * as React from "react"
import Layout from "../components/ui/layout";
import Seo from "../components/ui/seo";
import {HeroSection} from "../components/sections/hero";
import {FeatureSection} from "../components/sections/feature";

const IndexPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <HeroSection />
        <FeatureSection />
      </Layout>
    </>
  )
}

export default IndexPage

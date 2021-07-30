import * as React from "react"

import Layout from "../components/ui/layout";
import Seo from "../components/ui/seo";
import {HeroSection} from "../components/sections/hero";
import {FeatureSection} from "../components/sections/feature";
import {StatsSection} from "../components/sections/stats";

const IndexPage = () => {
  return (
    <>
      <Seo title="JustTasks | The only task manager that focuses on what really matters" homepage={false} />
      <Layout>
        <HeroSection />
        <FeatureSection />
        <StatsSection />
      </Layout>
    </>
  )
}

export default IndexPage

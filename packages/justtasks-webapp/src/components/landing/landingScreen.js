import React from 'react'
import {HomeSection} from "./homeSection";
import {FeaturesSection} from "./featuresSection";
import {OpenSourceSection} from "./openSourceSection";
import {RegisterSection} from "./registerSection";
import {Seo} from "../seo";

export const LandingScreen = () => {
  return (
    <>
      <Seo title="JustTasks | Simple task manager" />
      <HomeSection />
      <FeaturesSection />
      <OpenSourceSection />
      <RegisterSection />
    </>
  )
}
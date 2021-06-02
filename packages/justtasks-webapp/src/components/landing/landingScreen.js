import React from 'react'
import {HomeSection} from "./homeSection";
import {FeaturesSection} from "./featuresSection";
import {OpenSourceSection} from "./openSourceSection";
import {RegisterSection} from "./registerSection";

export const LandingScreen = () => {
  return (
    <>
      <HomeSection />
      <FeaturesSection />
      <OpenSourceSection />
      <RegisterSection />
    </>
  )
}
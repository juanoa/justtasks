import React from 'react'
import {Navbar} from "./navbar";
import {HomeSection} from "./homeSection";
import {FeaturesSection} from "./featuresSection";
import {OpenSourceSection} from "./openSourceSection";
import {RegisterSection} from "./registerSection";

export const LandingScreen = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <FeaturesSection />
      <OpenSourceSection />
      <RegisterSection />
    </>
  )
}
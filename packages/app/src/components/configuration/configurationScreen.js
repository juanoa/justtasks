import React from 'react'
import {PersonalInfoConfiguration} from "./personalInfoConfiguration";
import {SecurityConfiguration} from "./securityConfiguration";
import {DeleteAccountConfiguration} from "./deleteAccountConfiguration";
import {Seo} from "../seo";
import {PremiumConfiguration} from "./premiumConfiguration";

export const ConfigurationScreen = () => {
  return (
    <>
      <Seo title="Configuration | JustTasks" />
      <div className="container mt-4">
        <h1>Configuration</h1>
        <p>Configuration page</p>
        <PersonalInfoConfiguration />
        <PremiumConfiguration />
        <SecurityConfiguration />
        <DeleteAccountConfiguration />
      </div>
    </>
  )
}
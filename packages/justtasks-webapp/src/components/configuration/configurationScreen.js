import React from 'react'
import {PersonalInfoConfiguration} from "./personalInfoConfiguration";
import {SecurityConfiguration} from "./securityConfiguration";
import {DeleteAccountConfiguration} from "./deleteAccountConfiguration";

export const ConfigurationScreen = () => {
  return (
    <div className="container mt-4">
      <h1>Configuration</h1>
      <p>Configuration page</p>
      <PersonalInfoConfiguration />
      <SecurityConfiguration />
      <DeleteAccountConfiguration />
    </div>
  )
}
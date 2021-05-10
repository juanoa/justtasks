import React from 'react'
import {DayColumn} from "./dayColumn";

export const DashboardScreen = () => {

  return (
    <div className="row m-4">
      <DayColumn weekDay="Monday" />
      <DayColumn weekDay="Tuesday" />
      <DayColumn weekDay="Wednesday" />
      <DayColumn weekDay="Thursday" />
    </div>
  )
}
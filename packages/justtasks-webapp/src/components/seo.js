import React from 'react'
import {Helmet} from "react-helmet";

export const Seo = ({title = 'Forum', description = ''}) => {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: "description",
            content: description
          }
        ]}
      />
    </div>
  )
}
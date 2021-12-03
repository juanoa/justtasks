import * as React from "react"
import Layout from "../components/ui/layout";
import Seo from "../components/ui/seo";

const NotFoundPage = () => {
  return (
    <><Seo title="404" index={false} />
      <Layout>
        <h1>404</h1>
      </Layout>
    </>
  )
}

export default NotFoundPage

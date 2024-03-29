import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/MainLayout"
import Image from "../components/gatsbyImage/image"
import SEO from "../components/seo/YoastSEO"

import Theme from '../vars/ThemeOptions'

const IndexPage = ({pageContext}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{background: Theme.hex('secondary')}}>
      {Theme.hex('secondary')}
    </div>
    <div style={{background: Theme.lighter('secondary')}}>
      {Theme.lighter('secondary')}
    </div>
    <div style={{background: Theme.darker('secondary')}}>
      {Theme.darker('secondary')}
    </div>
    <div style={{background: Theme.alpha('secondary',.5)}}>
      {Theme.alpha('secondary',.5)}
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

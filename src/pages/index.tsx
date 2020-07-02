import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'

export const IndexPage = () => (
  <>
    <h2>Hi,</h2>
    <p>My name is Nasar and I am an infrastructure engineer.</p>
    <p>
      I am responsible for designing, coordinating and maintaining the infrastructure of a complex
      network of services across multiple regions and cloud providers.
    </p>
    <p>
      <Link to="/another-page/">Go to another page</Link>
    </p>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage

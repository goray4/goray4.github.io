import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SiteMetadataQuery } from 'generated/types/gatsby'
import { css } from '@emotion/core'
import { Header } from './Header'
import { Footer } from './Footer'

const wrapper = css`
  flex: 1 0 auto;
`

const body = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <main css={body}>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          {
            name: 'keywords',
            content: 'gatsby, gatsbyjs, sample, demo, typescript',
          },
        ]}
      />
      <Header title={data.site.siteMetadata.title} />
      <div css={wrapper}>{children}</div>
      <Footer />
    </main>
  )
}

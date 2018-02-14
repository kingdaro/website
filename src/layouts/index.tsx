import React from "react"
import Helmet from "react-helmet"
import GatsbyLink from "gatsby-link"
import { PageWrapper, Header, Title, NavLinks, ContentWrapper } from "./styles"
import { routes, title, tagline } from "../constants"

const IndexTemplate = ({ children }: { children: () => React.ReactNode }) => (
  <PageWrapper>
    <Helmet
      title={`${title} - ${tagline}`}
      meta={[
        { name: "description", content: `${title} - ${tagline}` },
        { name: "keywords", content: "kingdaro, website, blog, programming" },
      ]}
    />

    <Header>
      <Title>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
      </Title>

      <NavLinks>
        <h5>
          <GatsbyLink to={routes.home}>Home</GatsbyLink>
        </h5>
        <h5>
          <GatsbyLink to={routes.blog}>Blog</GatsbyLink>
        </h5>
        <h5>
          <GatsbyLink to={routes.projects}>Projects</GatsbyLink>
        </h5>
        <h5>
          <GatsbyLink to={routes.contact}>Contact</GatsbyLink>
        </h5>
      </NavLinks>
    </Header>

    <ContentWrapper>{children()}</ContentWrapper>
  </PageWrapper>
)

export default IndexTemplate

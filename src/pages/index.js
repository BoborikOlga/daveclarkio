import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Img from "gatsby-image";
import Headline from "../components/headline";
import Bio from "../components/bio";
import BlockHeading from "../components/block-heading";
import StoryList from "../components/story-list";
import { useStaticQuery, graphql } from "gatsby";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Left = styled.div`
  max-width: 66.666667%;
  flex-basis: 66.666667%;
  flex-grow: 0;
`;

const Right = styled.div`
  max-width: 33.333333%;
  flex-basis: 33.333333%;
  flex-grow: 0;
`;

const RightContainer = styled.div`
  padding-left: 4em;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coding.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home | Dave Clark" />
      <Container>
        <Left>
          <Headline data={data.file.childImageSharp.fluid} />
          <StoryList />
        </Left>
        <Right>
          <RightContainer>
            <Bio />
            <BlockHeading text="popular" />
          </RightContainer>
        </Right>
      </Container>
    </Layout>
  );
};

export default IndexPage;
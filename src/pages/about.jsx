import styled from "@emotion/styled";
import React from "react";

import { theme } from "../../config/theme";
import SEO from "../components/seo";
import Layout from "../layouts/layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 17.5em - 57px);
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: ${theme.breakpoints.m}) {
    margin-top: 1.33em;
  }
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Dave Clark" />
      <Container>
        <h1>About Me</h1>
        <p>Coming soon 👷</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;

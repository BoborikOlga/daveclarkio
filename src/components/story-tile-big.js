import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import InlineImage from "./inline-image";
import FlatLink from "./flat-link";

const ImageWrapper = styled.div`
  width: 100%;
  flex-basis: 20%;
`;

const Container = styled.div`
  display: flex;
  padding-top: 2em;
  min-height: 148px;

  @media (max-width: ${theme.breakpoints.m}) {
    min-height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  padding-right: 2rem;
`;

const Title = styled.h3`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1em;
  }
`;

const Description = styled.h4`
  margin: 0;
  color: grey;
  font-weight: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 0.8em;
    -webkit-line-clamp: 2;
    margin-bottom: 0.5em;
  }
`;

const Date = styled.h4`
  margin: 0;
  font-weight: normal;

  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 0.8em;
  }
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StoryTileBig = ({ title, description, date, cover, path }) => {
  return (
    <Container>
      <TextWrapper>
        <div>
          <Title>
            <FlatLink to={path}>{title}</FlatLink>
          </Title>
        </div>
        <MetaWrapper>
          <Description>
            <FlatLink to={path}>{description}</FlatLink>
          </Description>
          <Date>{date}</Date>
        </MetaWrapper>
      </TextWrapper>
      <ImageWrapper>
        <FlatLink to={path}>
          <InlineImage url={cover.src} />
        </FlatLink>
      </ImageWrapper>
    </Container>
  );
};

export default StoryTileBig;

import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const UnderlinedSection = styled.div`
  border-bottom: 1px solid black;

  h4 {
    margin: 0.5em;
    margin-left: 0;
    margin-top: 2em;
    text-transform: uppercase;
  }
`;

const BlockHeading = ({ text }) => (
  <UnderlinedSection>
    <h4>{text}</h4>
  </UnderlinedSection>
);

BlockHeading.propTypes = {
  text: PropTypes.string,
};

export default BlockHeading;

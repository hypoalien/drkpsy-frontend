import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "../components/features/TwoColWithButton.js";

import Features from "../components/features/ThreeColSimple.js";

// import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "../components/images/support-icon.svg";
import ShieldIconImage from "../components/images/shield-icon.svg";
import CustomerLoveIconImage from "../components/images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <>
      <MainFeature1
        subheading={<Subheading>About Blowouts</Subheading>}
        heading="We are a ticketing and event promotion agency."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
     
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description=""
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: ""
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: ""
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: ""
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      </>
  );
};

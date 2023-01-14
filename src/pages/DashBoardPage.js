import React, { Fragment } from "react";
import Heading from "components/common/Heading";
import Gap from "components/common/Gap";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeatured from "modules/campaign/CampaignFeatured";
import { v4 } from "uuid";

const DashBoardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignFeatured></CampaignFeatured>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashBoardPage;

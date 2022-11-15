import React from "react";
import ReuseIndexPage from "../AComponetformainpages/ReuseIndexPage";

import { TeamLeadLinks } from "../PageNavlinks/Pagenavlinks";
const TeamLeadindexPage = ({ children }) => {
  return (
    <div>
      <ReuseIndexPage LinkMenu={TeamLeadLinks} children={children} />
    </div>
  );
};

export default TeamLeadindexPage;

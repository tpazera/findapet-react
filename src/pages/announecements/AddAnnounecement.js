import React, { Component } from "react";

import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";

class AddAnnounecement extends Component {
  state = {
    title: "",
    description: ""
  };

  render() {
    return (
      <PageWrapper>
        <SidebarMenu />
        <PageContent>
          <h2>Utwórz nowe zgłoszenie</h2>
        </PageContent>
      </PageWrapper>
    );
  }
}

export default AddAnnounecement;

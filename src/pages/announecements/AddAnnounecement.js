import React, { Component } from "react";

import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import AddAnnouncementForm from "../../components/forms/addAnnouncement/AddAnnouncementForm";

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
          <AddAnnouncementForm />
        </PageContent>
      </PageWrapper>
    );
  }
}

export default AddAnnounecement;

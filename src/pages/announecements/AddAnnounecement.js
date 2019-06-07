import React, { Component } from "react";

import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
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
        <Sidebar />
        <PageContent>
          <AddAnnouncementForm />
        </PageContent>
      </PageWrapper>
    );
  }
}

export default AddAnnounecement;

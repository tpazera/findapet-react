import React, { Component } from "react";

import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import ContentHeader from "../../components/contentHeader/ContentHeader";
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
          <ContentHeader>Utwórz ogłoszenie</ContentHeader>
          <AddAnnouncementForm />
        </PageContent>
      </PageWrapper>
    );
  }
}

export default AddAnnounecement;

import React, { Component } from "react";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import ContentHeader from "../../components/contentHeader/ContentHeader";
import './aboutPage.scss';

class AboutPage extends Component {
    render() {
        return (
            <PageWrapper>
                <Sidebar />
                <PageContent>
                    <ContentHeader>O nas</ContentHeader>
                    <div id="aboutContent">
                    Sed hendrerit. Vivamus laoreet. Quisque id odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Quisque id mi. Praesent venenatis metus at tortor pulvinar varius. Cras non dolor. Fusce convallis metus id felis luctus adipiscing.

Morbi mollis tellus ac sapien. Vestibulum volutpat pretium libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Proin magna.

Cras varius. Phasellus viverra nulla ut metus varius laoreet. Vivamus elementum semper nisi. Vestibulum volutpat pretium libero.

Sed fringilla mauris sit amet nibh. Praesent nec nisl a purus blandit viverra. Phasellus dolor. Praesent adipiscing.
                    </div>
                </PageContent>
            </PageWrapper>
        );
    }
}

export default AboutPage;
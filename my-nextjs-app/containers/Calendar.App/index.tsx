import React, { FC } from "react";
import Table from "./components/Table";
import { ToastProvider } from 'react-toast-notifications';
import { ContentContainer, GlobalStyles } from "./components/TableStyles";

const Layout: FC = () => {
  return (
    <>
      <GlobalStyles />
      <ToastProvider>
        <ContentContainer>
          <Table />
        </ContentContainer>
      </ToastProvider>
    </>
  );
};

export default Layout;
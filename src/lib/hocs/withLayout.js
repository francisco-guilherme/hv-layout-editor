import React from "react";
import clsx from "clsx";
import { Header } from "components/layout/header";
import Footer from "components/layout/Footer";
import useStyles from "./styles";

const withLayout = (Component, hasFooter = false) => props => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={clsx(classes.section, hasFooter && classes.hasFooter)}>
        <main className={clsx(classes.component)}>
          <Component {...props} />
        </main>
      </div>
      {hasFooter && <Footer />}
    </>
  );
};

export default withLayout;

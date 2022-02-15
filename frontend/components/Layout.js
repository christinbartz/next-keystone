import React from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Layout;

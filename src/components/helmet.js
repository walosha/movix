import React from "react";
import { Helmet } from "react-helmet";

export default function ReactHelmet({ title, children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

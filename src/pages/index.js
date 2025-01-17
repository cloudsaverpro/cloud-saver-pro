import React from 'react';
import LandingPage from '../components/LandingPage';
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Cloud Saver Pro</title>
      </Helmet>
      <LandingPage />
    </>
  );
}

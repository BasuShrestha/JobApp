import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobsBtn from "../components/ViewAllJobsBtn";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Developer"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCard />
      <JobListings isHome={true} />
      <ViewAllJobsBtn />
    </>
  );
};

export default HomePage;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
  return <RouterProvider router={router} />;
};

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <Hero
//         title="Become a React Dev"
//         subtitle="Find the React job that fits your skills and needs"
//       />
//       <Card />
//       <HomeCard />
//       <JobListings />
//       <ViewAllJobsBtn />
//     </>
//   );
// };

export default App;

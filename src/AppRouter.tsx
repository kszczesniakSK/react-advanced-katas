import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Create examples of lazy and suspense.
const MainPage = React.lazy(() => import("./pages/MainPage"));
const WebsocketsPage = React.lazy(() => import("./pages/WebsocketsPage"));
const GraphqlPage = React.lazy(() => import("./pages/GraphqlPage"));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/example" element={<WebsocketsPage />} />
          <Route path="/graphql" element={<GraphqlPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;

import React from "react";

const Home = React.lazy(() => import("components/home/home"));
const Blog = React.lazy(() => import("components/blog/blog"));
const About = React.lazy(() => import("components/about/about"));
const ContactUs = React.lazy(() => import("components/common/contact/contact"));
const NotFound = React.lazy(() => import("components/not-found/not-found"));
const MobileApps = React.lazy(() =>
    import("components/services-offered/mobile-apps")
);
const WebDevelopment = React.lazy(() =>
    import("components/services-offered/web-development/web-development")
);
const CloudServices = React.lazy(() =>
    import("components/services-offered/cloud")
);
const DataAnalytics = React.lazy(() =>
    import("components/services-offered/data-analytics")
);
const PrivacyPolicy = React.lazy(() =>
    import("components/policies/privacy/privacy")
);

const routes = [
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/mobile-apps", element: <MobileApps /> },
    { path: "/web-development", element: <WebDevelopment /> },
    { path: "/data-analytics", element: <DataAnalytics /> },
    { path: "/cloud", element: <CloudServices /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "*", element: <NotFound /> },
];

export default routes;

// const getSubdomain = () => {
//   const hostname = window.location.hostname;
//   const domainParts = hostname.split(".");
//   console.log("this is hostname", domainParts);
//   if (domainParts.length > 1) {
//     localStorage.setItem("subDomain", domainParts[0]);
//     return domainParts[0];
//   }
//   return null;
// };
// export default getSubdomain;

// const getSubdomain = () => {
//   const hostname = window.location.hostname;

//   // Split the hostname by periods
//   const domainParts = hostname.split(".");

//   // Handle 'localhost' and similar cases where it's not a true subdomain
//   if (hostname === "localhost" || hostname.startsWith("localhost:")) {
//     return null; // No subdomain for pure localhost
//   }

//   // Handle typical domain cases (like dimpified.com or localhost.com)
//   if (domainParts.length === 2) {
//     return null; // No subdomain for base domain like dimpified.com
//   }

//   // Handle cases like "paullo.localhost.com" or "paullo.dimpified.com"
//   if (domainParts.length > 2) {
//     const subDomain = domainParts.slice(0, domainParts.length - 2).join(".");
//     localStorage.setItem("subDomain", subDomain);
//     return subDomain;
//   }

//   return null;
// };

// export default getSubdomain;

const getSubdomain = () => {
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");

  console.log("this is hostname", domainParts);

  // Case 1: Handle 'localhost' (with or without a port)
  if (hostname === "localhost" || hostname.startsWith("localhost:")) {
    return null; // No subdomain for localhost
  }

  // Case 2: Handle base domain like 'dimpified.com'
  if (
    hostname === "dimpified.com" ||
    hostname === "www.dimpified.com" ||
    hostname === "dimpified-frontend-testing.azurewebsites.net"
  ) {
    return null; // No subdomain for these base domains
  }

  // Case 3: Handle subdomains (like 'paullo.dimpified.com' or 'paullo5.localhost:5173')
  if (domainParts.length > 1) {
    const subDomain = domainParts[0];
    localStorage.setItem("subDomain", subDomain);
    return subDomain;
  }

  return null;
};

export default getSubdomain;

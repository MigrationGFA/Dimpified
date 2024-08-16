const getSubdomain = () => {
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  if (domainParts.length > 1) {
    localStorage.setItem("subDomain", domainParts[0]);
    return domainParts[0];
  }
  return null;
};
export default getSubdomain;

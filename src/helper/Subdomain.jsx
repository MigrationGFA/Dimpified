const getSubdomain = () => {
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  if (domainParts.length > 1) {
    return domainParts[0];
  }
  return null;
};
export default getSubdomain;

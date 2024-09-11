import { Typewriter } from "react-simple-typewriter";

const EcoLoadingPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="text-center">
        <h1 style={{ fontSize: "2rem", color: "#2c3e50", fontWeight: "bold" }}>
          <span className="text-blue-600 pl-4">
            <Typewriter
              words={["DOMAIN CREATION"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className="mt-3 text-muted">
          Your subdomain is being created. <br /> This might take up to 15
          seconds...
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoLoadingPage;

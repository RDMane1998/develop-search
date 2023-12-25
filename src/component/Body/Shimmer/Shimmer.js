import "./shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((e) => (
          <div className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;

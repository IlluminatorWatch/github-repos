function InfoRepo({ info }) {
  return (
    <div className="info-repo-container">
      <div className="info-row">
        <label className="info-label">Name: </label>
        <span className="info-value">{info.name}</span>
      </div>
      <div className="info-row">
        <label className="info-label">Forks Count: </label>
        <span className="info-value">{info.forks}</span>
      </div>
      <div className="info-row">
        <label className="info-label">Language: </label>
        <span className="info-value">{info.language}</span>
      </div>
      <div className="info-row">
        <label className="info-label">Stars: </label>
        <span className="info-value">{info.stargazers_count}</span>
      </div>
      <div className="info-row" id="homepage">
        <label className="info-label">Homepage: </label>
        <span className="info-value">{info.homepage}</span>
      </div>
      <div className="info-row">
        <label className="info-label">Watchers Count: </label>
        <span className="info-value">{info.watchers_count}</span>
      </div>
      <div className="info-row" id="description">
        <label className="info-label">Description: </label>
        <span className="info-value">{info.description}</span>
      </div>
    </div>
  );
}

export default InfoRepo;

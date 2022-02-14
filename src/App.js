import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import InfoRepo from "./components/InfoRepo";

function App() {
  const [userName, setUsername] = useState(""); // username variable
  const [gitHubRepos, setGitHubRepos] = useState([]); // array of GitHub repos
  const [info, setInfo] = useState({}); // object

  useEffect(() => {
    setGitHubRepos([]);
    setInfo({});
  }, [userName]);

  function submitForm(event) {
    event.preventDefault();
    searchGitHubRepos();
  }

  function searchGitHubRepos() {
    axios({
      method: "GET",
      url: `https://api.github.com/users/${userName}/repos`,
    }).then((response) => {
      setGitHubRepos(response.data);
    });
  }

  // To do, future improvement:
  // 100 repos a page:
  // &per_page=100
  // &per_page=1000 maye not allowed?
  // or pages (pagination)
  // &page=2
  // https://docs.github.com/en/rest/guides/traversing-with-pagination
  // url: `https://api.github.com/users/${userName}/repos\?page=1\&per_page=100`,
  // Also add css for the left container of repo rows making it responsive to the size of info requested (nr of repos)

  function showGitHubRepo(githubRepo) {
    // console.log(githubRepo);
    return (
      <li
        className="repo-row-container"
        // className="list-item"
        onClick={() => getRepoInfo(githubRepo.name)}
        key={githubRepo.id}
      >
        <h3 className="repo-name">{githubRepo.name}</h3>
        <h3 className="repo-language">{githubRepo.language}</h3>
        <img
          src={githubRepo.owner.avatar_url}
          className="github-repo-name-img"
          alt="small avatar of the repo user"
        />
      </li>
    );
  }

  function getRepoInfo(githubRepoName) {
    axios({
      method: "GET",
      url: `https://api.github.com/repos/${userName}/${githubRepoName}`,
    }).then((response) => {
      setInfo(response.data);
    });
  }

  return (
    <div className="App">
      <div className="main-container">
        <form className="form">
          <input
            className="input"
            placeholder="GitHub User Name"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
          />
          <div className="button-container">
            <button className="button" onClick={submitForm}>
              Search
            </button>
          </div>
        </form>
        <ul className="list-item-container-left">
          <li className="user-name">{userName}</li>
        </ul>
        <div className="flex-container">
          <div className="left-container-list">
            <ul className="list-item-container-left">
              <li className="left-container-row">
                {gitHubRepos.map(showGitHubRepo)}
              </li>
            </ul>
            <ul>
              {/* <li className="animate-charcter">{userName}</li> */}
              {/* <li className="left-container-row">
                {gitHubRepos.map(showGitHubRepo)}
              </li> */}
              {/* Can only use the map method on arrays and something that is defined as useState([]); */}
              {/* <div className="result-container-something">
                {gitHubRepos.owner.avatar_url}
              </div> */}
            </ul>
          </div>
          {/* <div className="info-repo-right-container">
            <ol>
              <li>
                <InfoRepo info={info} />
              </li>
            </ol>
          </div> */}
          <div className="info-repo-right-container">
            <ol className="">
              <li className="">
                <InfoRepo info={info} />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

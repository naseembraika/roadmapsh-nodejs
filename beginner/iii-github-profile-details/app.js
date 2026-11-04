const printError = (message) => {
  console.error(`error: ${message}`);
};

const displayData = (profile) => {
  if (!profile) return;
  console.log("Name:", profile.name);
  console.log("Username:", profile.login);
  console.log("Profile:", profile.html_url);
  console.log("Public repos:", profile.public_repos);
  console.log("Followers:", profile.followers);
};

const fetchData = async (username) => {
  if (!username) return printError("please provide a GitHub username");

  let response;
  try {
    response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`,
    );
  } catch (error) {
    return printError("Could not reach github");
  }

  if (response.status === 404) {
    return printError(`GitHub user not found: ${username}`);
  }

  const data = await response.json();
  if (!response.ok) {
    return printError(
      data?.message || `GitHub request failed with status ${response.status}`,
    );
  }

  displayData(data);
};

const username = process.argv[2];
fetchData(username);

const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const envObj = core.getInput('envars');
  const envs = JSON.parse(envObj);
  console.log(envs);
  Object.keys(envs).forEach((key) => {
    console.log(key, envObj[key]);
    core.setOutput(`${key}`, envs[key]);
  });
  // Get the JSON webhook payload for the event that triggered the workflow
} catch (error) {
  core.setFailed(error.message);
}

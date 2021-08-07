const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const envObj = core.getInput('envars');

  Object.keys(JSON.parse(envObj)).forEach((key) => {
    core.setOutput(`${key}`, envObj[key]);
  });
  // Get the JSON webhook payload for the event that triggered the workflow
} catch (error) {
  core.setFailed(error.message);
}

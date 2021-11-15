const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  const envObj = core.getInput('envars');
  const envs = JSON.parse(envObj || '{}');

  fs.readFile('./spec', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    const spec = JSON.parse(data)
    core.setOutput('build_vars', spec.envs);
  });
  // console.log(envs);
  // console.log(envs['url']);
  // core.setOutput('url', envs.url);
  // Object.keys(envs).forEach(function (key) {
  //   console.log(key, envs[key]);
  // });
  

  // Get the JSON webhook payload for the event that triggered the workflow
} catch (error) {
  core.setFailed(error.message);
}

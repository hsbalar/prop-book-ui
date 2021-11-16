const core = require('@actions/core');
const fs = require('fs');

try {
  fs.readFile('./spec', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    core.setOutput('build_vars', spec.envs);
  });
} catch (error) {
  core.setFailed(error.message);
}

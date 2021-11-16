const core = require('@actions/core');
const fs = require('fs');

try {
  fs.readFile('./spec0s', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    const spec = JSON.parse(data)
    core.setOutput('build_vars', spec.envs || {});
  });
} catch (error) {
  core.setFailed(error.message);
}

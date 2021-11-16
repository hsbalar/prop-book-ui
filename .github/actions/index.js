const core = require('@actions/core');
const fs = require('fs');

try {
  const envars = process.env.envars;
  console.log(`Hello ${envars}!`);

  fs.readFile('./spec', 'utf8', function (err,data) {
    if (err) {
      console.log('1');
      core.setOutput('build_vars', {});
      return console.log(err);
    }
    console.log('2');
    const spec = JSON.parse(data)
    core.setOutput('build_vars', spec.envs || {});
  });
} catch (error) {
  console.log('3');
  core.setOutput('build_vars', {});
}

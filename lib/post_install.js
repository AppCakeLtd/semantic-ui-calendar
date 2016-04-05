var execSync = require('child_process').execSync;
var stat = require('fs').stat;

if (!execSync) {
    execSync = require('sync-exec');
}

function exec(command) {
    execSync(command, {
        stdio: [ 0, 1, 2 ]
    });
}

stat('dist-modules', function(error, stat) {
    if (error || !stat.isDirectory()) {
        exec('npm i babel-cli babel-preset-es2015 babel-preset-react');
        exec('npm run dist:modules');
    }
});

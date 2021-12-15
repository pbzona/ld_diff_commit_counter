const core = require('@actions/core');
const github = require('@actions/github');

const payload = github.context.payload
core.setOutput('commitCount', payload.commits.length + 1); // Need to add one to account for current commit
const core = require('@actions/core')
const github = require('@actions/github')

const generate = require('./generator')

try {
    const ctx  = {
        runId: github.context.runId,
        runNumber: github.context.runNumber,
        sha: github.context.sha,
        refName: github.context.ref
    }

    const template = core.getInput('template')
    const timeFormat = core.getInput('timeFormat')
    const shortShaLength = core.getInput('shortShaLength')

    core.setOutput('tag', generate({
        template,
        timeFormat,
        shortShaLength
    }, ctx))
} catch (error) {
    core.setFailed(error.message)
}

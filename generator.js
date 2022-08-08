const moment = require('moment')

function generate(opts, ctx) {
    const { template, timeFormat, shortShaLength } = opts
    const { runId, runNumber, sha, refName } = ctx

    const formattedTime = moment().utc().format(timeFormat)
    const shortSha = sha.substr(0, shortShaLength)

    return template.replace('{time}', formattedTime)
                .replace('{runId}', runId)
                .replace('{runNumber}', runNumber)
                .replace('{sha}', sha)
                .replace('{shortSha}', shortSha)
                .replace('{refName}', refName)
}

module.exports = generate

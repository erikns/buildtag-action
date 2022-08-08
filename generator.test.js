const generate = require('./generator')

const res = generate({
    template: '{time}-{shortSha}',
    timeFormat: 'YYYYMMDDHH',
    shortShaLength: 7
}, {
    runId: 42,
    sha: '3b9f2706607b966acb716b2ccf5aad5aaf93e05d'
})

console.log(res)

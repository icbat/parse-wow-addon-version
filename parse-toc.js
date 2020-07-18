const core = require('@actions/core')
const fs = require('fs')


function parseValueFromLine(line) {
    const [_, ...value] = line.split(':')
    return value.join(':').trim()
}

const tocFilePath = core.getInput('tocfile', {required: true})
core.debug(`Reading file ${tocFilePath}`)

const lines = fs.readFileSync(tocFilePsath)
    .toString()
    .split('\n')

core.debug(`Found lines: ${lines}`)

const interfaceLine = lines.find(line => line.includes('## Interface:'))
const versionLine = lines.find(line => line.includes('## Version:'))

const supported_version = parseValueFromLine(interfaceLine)
const addon_version = parseValueFromLine(versionLine)

core.debug(`Found supported_version: ${supported_version}`)
core.setOutput('supported_version', supported_version)

core.debug(`Found addon_version: ${addon_version}`)
core.setOutput('addon_version', addon_version)
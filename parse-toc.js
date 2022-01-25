const core = require('@actions/core')
const fs = require('fs')


function parseValueFromLine(line) {
    const [_, ...value] = line.split(':')
    return value.join(':').trim()
}

// sample input:  90105
// sample output: 9.1.5
function convertToSemantic(supported_version) {
    const len = supported_version.length
    const patch = supported_version.substring(len - 2)
    const minor = supported_version.substring(len - 4, len - 2)
    const major = supported_version.substring(0, len - 4)

    return `${Number(major)}.${Number(minor)}.${Number(patch)}`
}

const tocFilePath = core.getInput('tocfile', { required: true })
core.debug(`Reading file ${tocFilePath}`)

const lines = fs.readFileSync(tocFilePath)
    .toString()
    .split('\n')

core.debug(`Found lines: ${lines}`)

const interfaceLine = lines.find(line => line.includes('## Interface:'))
const versionLine = lines.find(line => line.includes('## Version:'))

const addon_version = parseValueFromLine(versionLine)
const supported_version = parseValueFromLine(interfaceLine)
const supported_version_semantic = convertToSemantic(supported_version)

core.debug(`Found addon_version: ${addon_version}`)
core.setOutput('addon_version', addon_version)

core.debug(`Found supported_version: ${supported_version}`)
core.setOutput('supported_version', supported_version)

core.debug(`Found supported_version_semantic: ${supported_version_semantic}`)
core.setOutput('supported_version_semantic', supported_version_semantic)

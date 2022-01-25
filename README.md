# parse-wow-addon-version
This action extracts the addon version and the supported version from your TOC file and exposes them as outputs for the rest of your workflow

## Inputs

### tocfile

**Required** The path to your addon's TOC file

## Outputs

### addon_version

The version of your addon as you have defined it in the TOC

### supported_version

The version of WoW your addon supports in the format Blizzard uses, e.g. `90105`

### supported_version_semantic

The version of WoW your addon supports in semantic version format, e.g. `9.1.5`

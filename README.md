# parse-wow-addon-version
This action extracts the addon version and the supported version from your TOC file and exposes them as outputs for the rest of your workflow

## Inputs

### tocfile

**Required** The path to your addon's TOC file

## Outputs

### supported_version

The version of WoW your addon supports

### addon_version

The version of your addon as you have defined it in the TOC

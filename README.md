# Minecraft Bedrock Action: Create MCWorld

- [Minecraft Bedrock Action: Create MCWorld](#minecraft-bedrock-action-create-mcworld)
  - [Actions](#actions)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Example usage](#example-usage)

The github action that will create a mcworld in a given repository and performs configurable actions on the world:

## Actions

- Minify and removing comments from json files
- Removing unwanted files from folders

## Inputs

**folder**:  
The folder where the world is, example `${{github.workspace}}/world`

**processJson**:  
Whether or not to format json and minify json, defaults to true

**trimFiles**:  
Whether or not to remove unwanted files, defaults to true

**outputFile**:  
Defaults to the folder above the specified source folder with file name: word.mcworld, but this parameter can be overwritten.

## Outputs

**worldFilepath**:  
The outputted mcworld filepath

## Example usage

See [Create-Mcworld-On-Tag](examples/Create-Mcworld-On-Tag.yml) for a workflow that creates a release for each git tag created.

```yml
# This is a basic workflow to help you get started with Actions
name: create-mcworld

# Controls when the action will run.
on:
  push:
    # Sequence of patterns matched against refs/tags
    tags:
      - "v*"

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - uses: Blockception/MB-Action-Create-MCWorld@v1.0
        id: create_mcworld
        with:
          # Path to the folder, assume ${{github.workspace}} leads to root of the repo
          folder: ${{github.workspace}}/world
          processJson: false
          trimFiles: true
```

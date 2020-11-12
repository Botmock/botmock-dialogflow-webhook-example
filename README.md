# botmock-dialogflow-webhook-example

Node.js project for importing [Botmock](https://botmock.com) projects in [Dialogflow](https://console.dialogflow.com/)

## Table of Contents

* [Overview](#overview)
  * [Usage](#usage)

## Overview

### Usage

> **Note**: prerequisites
> - [Node.js LTS version](https://nodejs.org/en/)

Running the following commands should allow you to generate restorable content from your Botmock project.

- `git clone git@github.com:Botmock/botmock-dialogflow-webhook-example.git`
- `cd botmock-dialogflow-webhook-example`
- `npm install`
- Replace `condition.json`, `function.js` and `blocks.json` with files generated by [botmock-dialogflow-export](https://github.com/Botmock/botmock-dialogflow-export)
- Deploy index.js and use your deployed url in Dialogflow webhook

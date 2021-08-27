"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const github_action_helper_1 = require("@technote-space/github-action-helper");
const issue_1 = require("./utils/issue");
const misc_1 = require("./utils/misc");
const execute = async (logger, octokit, context) => {
    logger.startProcess('Dump context');
    console.log((0, misc_1.getPayload)(context));
    logger.startProcess('Command test');
    const command = new github_action_helper_1.Command(logger);
    await command.execAsync({
        command: 'ls -lat',
    });
    logger.startProcess('Color text');
    logger.info('green text: %s', logger.c('green', { color: 'red', attribute: 'bold' }));
    logger.warn('warning!');
    logger.error('error!!!');
    logger.debug('debug...');
    logger.log('log log log');
    logger.startProcess('Get issues');
    const issues = await (0, issue_1.getIssues)(octokit, context);
    console.log(issues.map(issue => issue.title));
    logger.endProcess();
};
exports.execute = execute;

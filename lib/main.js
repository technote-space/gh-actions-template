"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const core_1 = require("@actions/core");
const context_1 = require("@actions/github/lib/context");
const github_action_helper_1 = require("@technote-space/github-action-helper");
const github_action_log_helper_1 = require("@technote-space/github-action-log-helper");
const filter_github_action_1 = require("@technote-space/filter-github-action");
const constant_1 = require("./constant");
const process_1 = require("./process");
(async () => {
    const logger = new github_action_log_helper_1.Logger();
    const context = new context_1.Context();
    github_action_helper_1.ContextHelper.showActionInfo((0, path_1.resolve)(__dirname, '..'), logger, context);
    if (!(0, filter_github_action_1.isTargetEvent)(constant_1.TARGET_EVENTS, context)) {
        logger.info('This is not target event.');
        return;
    }
    await (0, process_1.execute)(logger, github_action_helper_1.Utils.getOctokit(), context);
})().catch(error => {
    console.log(error);
    (0, core_1.setFailed)(error.message);
});

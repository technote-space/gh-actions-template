"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssues = void 0;
const getIssues = async (octokit, context) => (await octokit.paginate(octokit.issues.listForRepo, {
    ...context.repo,
})).map(item => item).filter(item => !('pull_request' in item));
exports.getIssues = getIssues;

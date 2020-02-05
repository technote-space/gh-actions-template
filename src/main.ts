import path from 'path';
import { setFailed } from '@actions/core';
import { Context } from '@actions/github/lib/context';
import { Logger, ContextHelper, Utils } from '@technote-space/github-action-helper';
import { isTargetEvent } from '@technote-space/filter-github-action';
import { getPayload } from './utils/misc';
import { TARGET_EVENTS } from './constant';

/**
 * run
 */
async function run(): Promise<void> {
	const logger  = new Logger();
	const context = new Context();
	ContextHelper.showActionInfo(path.resolve(__dirname, '..'), logger, context);

	if (!isTargetEvent(TARGET_EVENTS, context)) {
		logger.info('This is not target event.');
		return;
	}

	const octokit = Utils.getOctokit();
	console.log(octokit);
	console.log(getPayload(context));
}

run().catch(error => setFailed(error.message));

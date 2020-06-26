import {Context} from '@actions/github/lib/context';
import {Octokit} from '@technote-space/github-action-helper/dist/types';
import {IssuesListForRepoResponseData} from '@octokit/types/dist-types/generated/Endpoints';

export const getIssues = async(octokit: Octokit, context: Context): Promise<IssuesListForRepoResponseData> => (await octokit.paginate(
  octokit.issues.listForRepo.endpoint.merge({
    ...context.repo,
  }),
)).map(item => item as IssuesListForRepoResponseData[number]).filter(item => !('pull_request' in item));

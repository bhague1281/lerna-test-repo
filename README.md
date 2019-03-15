# lerna-test-repo

## Notes

* Created these packages:
  * @bhague1281/lerna-constants@(1.0.1|2.0.0)
  * @bhague1281/lerna-consumer@(1.0.1|2.0.0)
* Setup with babel. You can build via
  * `npm run packages:build` at the monorepo level (builds all changed subrepos)
  * `npm run build` at the subrepo level (builds just that repo, regardless if it changed)
* Setup with jest. You can test via
  * `npm run packages:test` at the monorepo level (tests all changed subrepos)
  * `npm run test` at the subrepo level (tests just that repo, regardless if it changed)
* You can setup your local development environment, "linking" the repos by running
  * `npm run packages:bootstrap` at the monorepo level
  * TODO: If you make a change in a repo, you currently have to rebuild. There should be a watch command for the entire repo setup instead.
* Publish to npm looks like this:
  * Commit changes
  * Run `npm run packages:publish` at the monorepo level
  * Select which semver version you want for each package (this can be automated along with the CHANGELOG).
    * TODO: Implement this https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits
  * Only changed packages will be published

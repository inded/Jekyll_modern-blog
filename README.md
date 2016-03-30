# Jekyll-Bootstrap

The quickest way to start and publish your Jekyll powered blog. 100% compatible with GitHub pages

## Usage

For all usage and documentation please see: <http://jekyllbootstrap.com>

## Version

0.3.0 - stable and versioned using [semantic versioning](http://semver.org/).

**NOTE:** 0.3.0 introduces a new theme which is not backwards compatible in the sense it won't _look_ like the old version.
However, the actual API has not changed at all.
You might want to run 0.3.0 in a branch to make sure you are ok with the theme design changes.

## Milestones

[0.4.0](https://github.com/plusjade/jekyll-bootstrap/milestones/v%200.4.0) - next release [ETA 03/29/2015]

### GOALS

* No open PRs against master branch.
* Squash some bugs.
* Add some new features (low-hanging fruit).
* Establish social media presence.


### Bugs

|Bug |Description
|------|---------------
|[#86](https://github.com/plusjade/jekyll-bootstrap/issues/86)  |&#x2611; Facebook Comments
|[#113](https://github.com/plusjade/jekyll-bootstrap/issues/113)|&#x2611; ASSET_PATH w/ page & post
|[#144](https://github.com/plusjade/jekyll-bootstrap/issues/144)|&#x2610; BASE_PATH w/ FQDN
|[#227](https://github.com/plusjade/jekyll-bootstrap/issues/227)|&#x2611; Redundant JB/setup

### Features

|Bug |Description
|------|---------------
|[#98](https://github.com/plusjade/jekyll-bootstrap/issues/98)  |&#x2611; GIST Integration
|[#244](https://github.com/plusjade/jekyll-bootstrap/issues/244)|&#x2611; JB/file_exists Helper
|[#42](https://github.com/plusjade/jekyll-bootstrap/issues/42)  |&#x2611; Sort collections of Pages / Posts
|[#84](https://github.com/plusjade/jekyll-bootstrap/issues/84)  |&#x2610; Detecting production mode

### TODOS

Review existing pull requests against plusjake/jekyll-bootstrap:master. Merge or close each.

* Create twitter account. Add link / icon on jekyllbootstrap.com.
* Create blog posts under plusjade/gh-pages, expose on jekyllbootstrap.com, feed to twitter account.
* Announce state of project, announce roadmap(s), announce new versions as they’re released.

## Contributing


To contribute to the framework please make sure to checkout your branch based on `jb-development`!!
This is very important as it allows me to accept your pull request without having to publish a public version release.

Small, atomic Features, bugs, etc.
Use the `jb-development` branch but note it will likely change fast as pull requests are accepted.
Please rebase as often as possible when working.
Work on small, atomic features/bugs to avoid upstream commits affecting/breaking your development work.

For Big Features or major API extensions/edits:
This is the one case where I'll accept pull-requests based off the master branch.
This allows you to work in isolation but it means I'll have to manually merge your work into the next public release.
Translation : it might take a bit longer so please be patient! (but sincerely thank you).

**Jekyll-Bootstrap Documentation Website.**

The documentation website at <http://jekyllbootstrap.com> is maintained at https://github.com/plusjade/jekyllbootstrap.com


## License

[MIT](http://opensource.org/licenses/MIT)

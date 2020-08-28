# Developer workflow

Our workflow is entirely driven off of Git, and we find that Gitflow maps wonderfully on to our desired release process. The following mapping of Git branches to releases is used:

|Branch|Purpose|Audience|
|:----:|:-----:|:------:|
|`feat/*`|New feature|Developers|
|`fix/*`|A bug fix|Developers|
|`doc/*`|Documentation only changes|Developers|
|`ref/*`|A code change that neither fixes a bug or adds a feature|Developers|
|`test/*`|Adding missing tests|Developers|
|`chore/*`|Changes to the build process or auxiliary tools and libs|Developers|
|`develop`|Continuous integration testing|Developers|
|`staging/x.y.z`|Beta Candidate on Test fase|QA testers|
|`beta/x.y.z`|Release Candidate on Test fase|External/Product testers|
|`release/x.y.0`|Release candidates|External testers|
|`hotfix/x.y.z`|Hotfix release candidates|External testers|
|`main`|Latest public release|Store available|

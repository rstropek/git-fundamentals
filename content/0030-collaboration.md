# Collaboration with Git

Teamworking with Git


## Remotes

* Versions of your project hosted on the Internet or network somewhere
  * Here: GitHub
* 0..n remotes
  * Some read-only, some read-write
* Collaborate by pulling and pushing data to and from them
* Credentials
  * Store credentials with [credential helpers](https://git-scm.com/docs/gitcredentials)
  * Check configured credential helper: `git config --global credential.helper`
  * Example: [GitHub on Windows](https://help.github.com/en/github/using-git/caching-your-github-password-in-git)
  * Example: [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git#git-credential-manager-setup)


## Overview

| Git Command                                         | Description                                        |
| --------------------------------------------------- | -------------------------------------------------- |
| [`remote`](https://git-scm.com/docs/git-remote)     | Maintain remotes                                   |
| [`clone`](https://git-scm.com/docs/git-clone)       | Clone a repository into a new directory            |
| [`fetch`](https://git-scm.com/docs/git-fetch)       | Fetch branches and/or tags from other repositories |
| [`pull`](https://git-scm.com/docs/git-pull)         | Fetch from and integrate with another repository   |
| [`push`](https://git-scm.com/docs/git-push)         | Update remote branches and/or tags                 |
| [`checkout`](https://git-scm.com/docs/git-checkout) | Restore working tree files                         |


## `git remote` ([ref](https://git-scm.com/docs/git-remote))

* List <!-- .element: class="fragment" --> remotes: `git remote -v`
* Add <!-- .element: class="fragment" --> remote: `git remote add <name> <url>`
* Remove <!-- .element: class="fragment" --> remote: `git remote remove <name>`
* Get <!-- .element: class="fragment" --> URL of remote: `git remote get-url <name>`


## `git fetch` ([ref](https://git-scm.com/docs/git-fetch)), `git pull` ([ref](https://git-scm.com/docs/git-pull))

* Fetch <!-- .element: class="fragment" --> gets latest meta-data from remote repository
  * Does not do any file transfer
* Fetches <!-- .element: class="fragment" --> latest meta-data and integrates change in local repository


## Exercises, Further Readings

* Exercises
  * [Lab: Building a Website with GitHub](https://github.com/rstropek/git-fundamentals/blob/master/content/labs/0040-remotes.md)
* Further readings:
  * [*Working with Remotes* in Git book](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)

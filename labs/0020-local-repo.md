# Building a Website in a Local Repository

## Introduction

You are a web developer and you have to develop a new website from scratch. You want to use Git for version control.

This lab assumes that you have correctly set up your local environment as shown in the previous [*Setting up Your Git Environment* lab](0010-setup.md).

## Creating the Repository

* Create a new, empty folder called *AcmeCorpWebsite*.
* Open a command shell in the new folder.
* Make the folder a Git repository: `git init`
* Open folder in your favorite editor. Here we are going to use VSCode: `code .`

## Add First Version of Website

* Simulate the creation of the first, draft version of the website by copying [*index.html*](0020-local-repo/010-simple-content/index.html) into the created folder.
  * If you want, double-click on *index.html* to see the website.
* Check the status of your Git repository: `git status`
* Add the change (=creation of file) to the Git repository: `git add index.html`
* Check the status of your Git repository again
* Commit changes:
  * Option 1 - enter commit message in editor: `git commit`
  * Option 2 - provide commit message in command line: `git commit -m 'Add first draft of website'`
* Check version history log: `git log`

## Create a Styled Version of the Website

* Simulate enhancing your website by copying [*index.html*](0020-local-repo/020-with-css/index.html) and [*index.css*](0020-local-repo/020-with-css/index.css) into your project folder.
  * If you want, double-click on *index.html* to see the enhanced website.
* Check the status of your Git repository
* View the changes in *index.html*: `git diff index.html`
* Add the changes (=one file changed, one added) to the Git repository: `git add .`
* Commit changes like in the previous exercise. The commit message should be *Add styling to website*

## Navigate Back in Time

* Check version history log
* Copy the first few letters of the commit hash of the first commit (*A first draft of website*). Here I assume the hash is `55119c9f`.
* Move back to first commit: `git checkout 55119c9f`
* Display *index.html* and verify that no styling is present: `cat index.html` (on Windows: `type index.html`)
* Move back to the commit that we came from: `git checkout -`
* Display *index.html* and verify that styling is present again

## Move Styling Into HTML

* You decided to get rid of the *.css* file and use *inline CSS* instead. Simulate doing that changes by removing *index.css* (`rd index.css`, on Windows `del index.css`) and copying [*index.html*](0020-local-repo/030-with-inline-styles/index.html).
  * If you want, double-click on *index.html* to check that the website still works.
* Check the status of your Git repository
* Add the changes (=one file changed, one deleted) to the Git repository: `git add --all .`
* Commit changes like in the previous exercise. The commit message should be *Switch to inline styles*
* Check version history log
* View the latest commit: `git show HEAD`
* View the previous commit: `git show HEAD~1`
* Compare the first commit with the last one: `git diff HEAD~2..HEAD`

## Amending Commits

* Simulate switching to a blue design by copying [*index.html*](0020-local-repo/040-blue-background/index.html) into your project folder.
* Check the status of your Git repository and view differences of *index.html* compared to last commit.
* Add and commit the changes. The commit message should be *Switch to blue design*.
* You realize that you forgot to change the border color to blue. Simulate fixing that by copying [*index.html*](0020-local-repo/050-blue/index.html) into your project folder.
* Add the change to your repository.
* Change previous commit by using the `--amend` switch: `git commit --amend --no-edit`
  
## Undoing Changes

* It turns out that you do not like the blue design, you would like to switch back to red.
* Add a new commit undoing previous one: `git revert HEAD`
* Check version history log.

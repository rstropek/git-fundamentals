# Building a Simple Game with Branching

## Introduction

In this lab we are building the same game as in the [*Building a Simple Game in a Local Repository* lab](0030-tags-stashing.md). Yet, this time we are going to use Git branches.

This lab assumes that you are already familiar with basic Git commands as shown in the previous [*Building a Simple Game in a Local Repository* lab](0030-tags-stashing.md).

## Creating the Repository

* Create a new, empty folder called *TicTacToeBranching*.
* Open a command shell in the new folder.
* Make the folder a Git repository: `git init`
* Open folder in your favorite editor. Here we are going to use VSCode: `code .`

## Add TicTacToe Board

* Simulate the creation of the first, draft version of the game by copying [*010-basic-game/index.html*](0050-branching/010-basic-game/index.html) into the created folder. It displays the TicTacToe board and adds basic game logic.
  * If you want, double-click on *index.html* to see the website.
* Add and commit your changes. The commit message should be *Implement basic game*.

## Create a Feature Branch

* Our next job is to add a possibility to restart a game after one player has one.
* Create a new branch in which we are going to implement the new feature: `git branch feat/restart`
  * Verify that the branch has been created: `git branch`
* Switch to the new branch: `git checkout feat/restart`
* Simulate adding a *Restart* button by copying [*020-restart-game/index.html*](0050-branching/020-restart-game/index.html) into the created folder.
  * If you want, double-click on *index.html* to see the website.
  * Use `git diff` to check the changes.
* Add and commit your changes. The commit message should be *Add restart logic*.

## Create an Urgent Bugfix

> Somebody calls and tells you that published version 1.0 has a severe bug. It does not recognice a winner if e.g. the first row is empty.

* Switch back to *master* branch: `git checkout master`
  * Look into *index.html* to make sure that restart logic is not present yet. It is only in the feature branch.
* Create new branch and check it out in one statement: `git checkout -b fix/game-logic`
* Simulate fixing the bug by copying [*030-game-logic-bugfix/index.html*](0050-branching/030-game-logic-bugfix/index.html) into the created folder.
  * If you want, double-click on *index.html* to see the website.
  * Use `git diff` to check the changes.
* Add and commit your changes. The commit message should be *Fixed bug in game-logic*.

## Merge Bugfix and Restart Logic into Master

* Switch back to *master* branch: `git checkout master`
* Merge changes from bugfix-branch: `git merge fix/game-logic`
* Merge changes from feature-branch: `git merge feat/restart`
  * If you want, double-click on *index.html* to see the website.
* View branch structure: `git log --graph --decorate --oneline --all`
 
# Building a Simple Game in a Local Repository

## Introduction

You are a web developer and you have to develop a simple *TicTacToe* game.

This lab assumes that you are already familiar with basic Git commands as shown in the previous [*Building a Website in a Local Repository* lab](0020-local-repo.md).

## Creating the Repository

* Create a new, empty folder called *TicTacToe*.
* Open a command shell in the new folder.
* Make the folder a Git repository: `git init`
* Open folder in your favorite editor. Here we are going to use VSCode: `code .`

## Add TicTacToe Board

* Simulate the creation of the first, draft version of the game by copying [*010-game-board/index.html*](0030-tags-stashing/010-game-board/index.html) into the created folder. It displays the TicTacToe board but does not contain any game logic yet.
  * If you want, double-click on *index.html* to see the website.
* Add and commit your changes. The commit message should be *Implement game board*.

## Add TicTacToe Board

* Simulate programming the game logic by copying [*020-game-logic-v1/index.html*](0030-tags-stashing/020-game-logic-v1/index.html) into the created folder.
  * If you want, double-click on *index.html* to see the website.
  * Use `git diff` to check the changes.
* Add and commit your changes. The commit message should be *Add game logic*.
* As this is the first version of the game that we ship, create a tag for the current HEAD: `git tag v1.0`
  * See list of tags: `git tag`
  * Inspect details of tag: `git show v1.0`
  * See tag noted in log: `git log`

## Add Restart Logic

* Simulate adding a *Restart* button by copying [*030-restart-game/index.html*](0030-tags-stashing/030-restart-game/index.html) into the created folder.
  * If you want, double-click on *index.html* to see the website.
  * Use `git diff` to check the changes.

## Create an Urgent Bugfix

> Somebody calls and tells you that published version 1.0 has a severe bug. It does not recognice a winner if e.g. the first row is empty.

* Stash your work on the *Restart* button so that you can finish it later: `git stash push -m 'Restart logic'`
  * Check the status, it should be clean now.
  * See list of stashes: `git stash list`
* Simulate fixing the bug by copying [*040-game-logic-bugfix/index.html*](0030-tags-stashing/040-game-logic-bugfix/index.html) into the created folder.
  * If you want, double-click on *index.html* to see the website.
  * Use `git diff` to check the changes.
* Add and commit your changes. The commit message should be *Fix bug in winner detection*.
* We publish this fixed version of the game as version 1.0. Therefore, add a corresponding tag: `git tag -a v1.1`
  * See list of tags: `git tag`
  * See tags noted in log: `git log`

## Resume Work on Restart Logic

* Apply last stash: `git stash pop`
  * Use `git diff` to check the changes.
* Add and commit your changes. The commit message should be *Add restart logic*.
* This will become our version 2.0. Therefore, add a tag: `git tag -a v2.0 -m 'V2 with restart logic'`
  * See list of tags: `git tag`
  * See tags noted in log: `git log`

## Tips for Further Exercises

* If you plan to use a Git GUI tool in practice, repeat the exercise with your tool of choice.

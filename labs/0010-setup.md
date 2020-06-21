# Setting up Your Git Environment

## Git Installation

* Open a command shell window
  * Windows: `cmd` or [Windows Terminal](https://www.microsoft.com/de-at/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)
  * Linux: `bash`
  * Mac: [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac)
* Enter `git --version`
* `git` not found on your computer? Please [download and install the Git client](https://git-scm.com/). After that, run `git --version` again.
* Any *version >= 2.20* is ok, you will probably be able to follow even with older versions

## Basic Git Settings

We have to change our user name and email address because this information will be stored in very Git commit that we create.

* Enter `git config user.name` and `git config user.email` to get the current user name for Git.
* Settings not present yet? Execute the following two statements replacing *John Doe* and his email address with your name and your email address.

  ```bash
  git config --global user.name "John Doe"
  git config --global user.email johndoe@example.com
  ```

## Editor

In this course, we will use [Visual Studio Code](https://code.visualstudio.com) (short *VSCode*) as our main editor. You are invited to install it, too.

* Download and install [Visual Studio Code](https://code.visualstudio.com)
* Configure VSCode as your Git main editor:

  ```bash
  git config --global core.editor "code --wait"
  ```

## Check Settings

Check all your settings using `git config --list`

# Building a Website with GitHub

## Introduction

You are a web developer and volunteer at [CoderDojo Linz](https://linz.coderdojo.net). You agreed to extent the website of the programming club.

This lab assumes that you are already familiar with basic Git commands as shown in the previous [*Building a Simple Game in a Local Repository* lab](0030-tags-stashing.md).

## Prerequisites

You can do this hands-on lab without installing any additional software locally. However, if you want to take a look at the website you build, you have to install [Hugo](https://gohugo.io/getting-started/installing/).

## Create Base Repository on GitHub

To get started for this lab, create your own GitHub repository with starter code based on a template that has been created for you. To create your starter code repository, visit [https://classroom.github.com/a/sIsD3Ma-](https://classroom.github.com/a/sIsD3Ma-) and *accept the assignment*. As a result, a new GitHub repository will be created containing the starter code for this lab.

## Clone Repository

* Open the repository that you created in the previous step in GitHub.
* Use GitHub's *Clone or download* button to get the *Clone with HTTPS*-link.

![GitHub Download URL](../0020-basic-commands/github-get-repository.png)

* Open a command shell and navigate to a parent folder into which you want to clone your GitHub repository.
* Clone the repository from GitHub: `git clone https://github.com/.../git-fundamentals-hugo-website-....git`
  * As a result, you will have the starter code in a subfolder named *git-fundamentals-hugo-website-...*.

If you installed *Hugo* you can try the website. Navigate into the cloned folder and run `hugo serve`. Open a browser and navigate to [*http://localhost:1313/*](http://localhost:1313/). You should now see the website.

## Explore Remotes

* Get a list of all remotes: `git remote -v`
  * Note that the *origin* remote was automatically created because repository was cloned.
* View details or *origin* remote: `git remote show origin`

## Pulling Changes

### Add License File with GitHub's License Picker

* Create a new file
  ![Create file in GitHub](0040-remotes/github-create-file.png)

* Call file *LICENSE.md* and start license picker
  ![Create License File and Start Picker](0040-remotes/github-license-picker.png)

* Select MIT license
  ![Select MIT License](0040-remotes/github-mit-license.png)

* Add and commit license file *directly to main branch*. The commit message should be *Create LICENSE*.

### Refreshing Local Repository

* Pull changes from remote repository: `git pull origin`
  * Changes are automatically merged. You should now have *LICENSE* locally, too.
  
## Push Changes

* You want to create an exercise for learning JavaScript. Simulate that by creating the file *content/uebungsbeispiele/web/javascript.md*. The content should be as follows:

  ```md
  ---
  title: "Lerne die Grundlagen von JavaScript"
  date: 2020-06-23
  level: 2
  draft: false
  ---
  
  # Space Shooter mit JavaScript
  
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  ```

* Add and commit your changes. The commit message should be *Add JavaScript exercise*.
* Take a look at the log and note that local HEAD is ahead of origin's HEAD: `git log`
* Push local changes to GitHub: `git push origin main`
  * Verify that new exercise is on GitHub

## Adding Remotes

* Your friend Jane maintains a [copy of the website in *Azure DevOps*](https://dev.azure.com/rainerdemotfs-westeu/_git/git-fundamentals-jane-doe). There, she has added a great exercise for Scratch: [The Wizard Game](https://dev.azure.com/rainerdemotfs-westeu/_git/git-fundamentals-jane-doe?version=GBmaster&path=%2Fcontent%2Fuebungsbeispiele%2Fscratch%2Foff-to-be-a-wizard.md&_a=preview). You want to get that file from there and add it to your GitHub repository.
* Add Jane's repository as a remote: `git remote add jane https://rainerdemotfs-westeu@dev.azure.com/rainerdemotfs-westeu/git-fundamentals-jane-doe/_git/git-fundamentals-jane-doe`
  * Verify that remote has been correctly created: `git remote -v`
* Fetch information about Jane's repository: `git fetch jane`
* Copy a single file from Jane's repository with `git checkout`: `git checkout jane/master -- content/uebungsbeispiele/scratch/off-to-be-a-wizard.md`
  * Check the status of your repository to verify that Jane's exercise was created
  * Verify content of exercise: `cat content/uebungsbeispiele/scratch/off-to-be-a-wizard.md` (on Windows use `type`)
* Add and commit your changes. The commit message should be *Add wizard game*.
* Push local changes to GitHub: `git push origin main`
  * Verify that new exercise is on GitHub

---
layout: post
title: "Launch complex command and automation scripts from anywhere"
date: 2026-07-02 00:00:00 +0700
categories: [bash, workflow, GitHub]
image: Broadcast_Mail.png
---

Often, I find myself in a fresh container/VM or even a freshly installed Linux on an embded board or a server.
From there I usually want to run something I am used to run (installing and setting up a software, run a long CLI).
`https://cheat.sh/` is of great help in many case but what about my "custom" stuff?
Nowadays you cannot skip the universal software installation process: `curl my-url | bash`
Trusting a random script from the internet is bad, but what if it was your scripts?
I wanted a simple and easy to remember place to share useful shell scripts, so I published my scripts repository as a website at [sh.beuzeboc.com](https://sh.beuzeboc.com), powered by GitHub Pages.

Now when I launch a new machine I can `curl sh.beuzeboc.com/ros2` and install ROS 2 without opening any documentation.

The source repository is here: [Guillaumebeuzeboc/scripts](https://github.com/Guillaumebeuzeboc/scripts/).

---

## Prerequisite of this project

- Keep practical shell scripts in one place
- Make scripts always reachable without having to open anything
- Spend zero euros

---

## Repository structure

{% highlight bash %}
.github/workflows
docs/
├── ...
└── ...
{% endhighlight %}

The `.github/workflows` simply contains a `docs-scripts-list.yml`. This is simply used to keep an updated list of the scripts as a homepage. Just in case I forget one script name.

The `docs` directory contains the scripts. GH pages only supports `docs` as a directory name.
I tried to symlink. It broke everything. So it stays in `docs`.

---

## Hosting with GitHub Pages

### Enable GitHub Pages

- Follow the instructions of [GitHub Pages](https://docs.github.com/en/pages/quickstart).

### Configure custom domain

While you can keep the GH pages (free) URL, it not convinient to type since it's going to be 
be something like: `<username>.github.io`.

So I decided to use a subdomain name:
- Set the custom domain to `sh.beuzeboc.com`
- Ensure the repository includes a `CNAME` file
- Configure DNS records (on my domain name provider) to point to GitHub Pages

### Validate deployment

- Make sure to have a `readme.md` in your `docs/`
- Check the latest Pages deployment status
- Open `https://sh.beuzeboc.com`
- Verify HTTPS is enabled

Make sure to follow exactly the steps mentioned.
If anything goes wrong, GH is going to throw an error 500 to you,
without any further informations.

---

## The scripts

For the scripts this is up to you.
Try to keep them as simple as possible and relying as much as possible
on posix tools.
You never know what is installed on the host machine.

### Automate the homepage

In order to have a homepage always up to date,
you can automate that with a workflow.

The [workflow](https://github.com/Guillaumebeuzeboc/scripts/blob/main/.github/workflows/docs-scripts-list.yml) simply list all the files add them to the readme and pushes the changes.

This way no need to maintain the file list.


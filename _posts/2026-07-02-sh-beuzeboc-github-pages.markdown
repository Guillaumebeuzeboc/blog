---
layout: post
title: "Launch complex commands and automation scripts from anywhere"
date: 2026-07-02 00:00:00 +0700
categories: [bash, workflow, jekyll]
image: Broadcast_Mail.png
---

Often, I find myself in a fresh container, a VM, or even with a freshly installed Linux system on an embedded board or a server.
From there, I usually want to run tasks I am used to: installing and setting up software, or running a long CLI commands.

`https://cheat.sh/` is a great help in many cases, but what about my custom stuff?
I wanted a simple and easy to remember place to share custom shell scripts, so I published my scripts repository as a website at [sh.beuzeboc.com](https://sh.beuzeboc.com), powered by GitHub Pages.

Now when I launch a new machine I can `curl sh.beuzeboc.com/lxd-vm` and configure and launch an LXD VM without having to remember the complex CLI.

Source repository: [Guillaumebeuzeboc/scripts](https://github.com/Guillaumebeuzeboc/scripts/).

---

## Goals of this project

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

The `.github/workflows` directory contains `docs-scripts-list.yml`. Run on every push to keeps an updated list of the scripts on the README.
This way, if I forget a script name I can simply go to the [sh.beuzeboc.com](sh.beuzeboc.com) to see the list.

The `docs/` directory contains the scripts. In this setup, GitHub Pages publishes from `docs/`.
I tried to symlink. It broke everything. So it stays in `docs`.

---

## Hosting with GitHub Pages

### Enable GitHub Pages

- Follow the instructions of [GitHub Pages](https://docs.github.com/en/pages/quickstart).

### Configure custom domain

While you can keep the free GitHub Pages URL, it is not convenient to type since it is going to be something like: `<username>.github.io`.

So I decided to use a subdomain name:
- Set the custom domain to `sh.beuzeboc.com`
- Ensure the repository includes a `CNAME` file
- Configure DNS records (on my domain name provider) to point to this GitHub Page

### Validate deployment

- Make sure to have a `README.md` in your `docs/`
- Check the latest Pages deployment status
- Open `https://sh.beuzeboc.com`
- Verify HTTPS is enabled

Make sure to follow exactly the steps mentioned.
If anything goes wrong, GitHub may throw an HTTP 500 error,
without any further information.

---

## The scripts

For scripts, this is up to you.
Try to keep them as simple as possible and rely as much as possible
on POSIX tools.
You never know what is installed on the host machine.

### Automate the homepage

In order to have a homepage always up to date, you can automate that with a workflow.

The [workflow](https://github.com/Guillaumebeuzeboc/scripts/blob/main/.github/workflows/docs-scripts-list.yml) simply lists all files, adds them to the README, and pushes the changes.

This way, there is no need to maintain the file list.

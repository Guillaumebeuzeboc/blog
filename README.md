# blog.beuzeboc.com

Source code for my personal blog at [blog.beuzeboc.com](https://blog.beuzeboc.com) and based on a [fork of agusmakmun's theme](https://github.com/agusmakmun/agusmakmun.github.io).

## Local development

### Prerequisites

- Ruby (with `ruby-dev`)
- Bundler (`gem install bundler`)

```bash
sudo apt-get install ruby ruby-dev
gem install bundler
```

### Install dependencies

```bash
bundle install
```

### Build and serve

```bash
./start.sh
```

### Adding content

**Posts** go in `_posts/` as Markdown files named `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Your Title"
date: 2024-01-01 12:00:00 +0100
categories: [category]
tags: [tag1, tag2]
---

Your content here...
```

**Projects** are defined in `_data/projects.json` (listing metadata) and `_project/*.md` (detail pages).

**Categories** are defined in `category/`.

---
layout: page
title: Adding content to this site
---

To add content to this site follow these steps:

1. Add a new makedown file with the md extention in the folder /docs. For example: `docs/example.md`
2. At the top of the new file add layout and title options in this format:
```
---
layout: page
title: Example page
---
```
Where:
- `page` is the layout you wish to use. These are listed on the [GOV.UK Eleventy layout docs page](https://x-govuk.github.io/govuk-eleventy-plugin/layouts/)
- `title` is the page title which will also appear as the main heading.

3. Add markdown content below the code entered at step 2. The [GOV.UK Eleventy docs](https://x-govuk.github.io/govuk-eleventy-plugin/markdown/) provide markdown syntax guides.
4. Save the file

To help a user find this new content you can add a link to the home screen. That is, add a link to /index.md with the path to the new file:

```
## List of docs

- [Example](docs/example.md)
```

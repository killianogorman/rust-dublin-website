## Talk Submission: [Talk Title]

### Description
<!-- Provide a brief description of the talk and the modifications made in this PR. -->

- **Title:** [Talk Title]
- **Date:** [Date of the Talk]
- **Description:** [Brief description of the talk]
- **Author:** [Speaker's Name]
- **Tags:** [Comma-separated list of tags]

### Checklist
- [ ] I have included the talk title, date, and description in the frontmatter.
- [ ] I have included my author details in the `people` collection.
- [ ] I have added a link to the video recording of the talk (if available).
- [ ] I have added a link to the slides (if available).
- [ ] I have provided a cover image for the talk (or used a placeholder).
- [ ] I have included any additional markdown content related to the talk.

### Frontmatter for `talks/[talk-slug].md`
```yaml
---
title: ''
pubDate: 2021-04-04
description: ''
author: 
image:
  src: ''
  alt: ''
video_url: ''
slides_url: ''
tags: ["rust", "2021"]
event_location: 'Online'
---
```
### Markdown Content for `talks/[talk-slug].md`
<!-- Add any markdown content related to the talk below the frontmatter. -->
#### Additional Content

This section can contain any additional information, such as:

- Code snippets
- Detailed explanations
- Links to related resources

Example:

```rust
fn main() {
    println!("Hello, world!");
}

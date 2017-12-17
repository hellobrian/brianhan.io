---
path: "/blog/test"
date: "2015-12-16"
title: "test"
tags: ["dev", "test"]
excerpt: "this is a test and I'm amazing"
---

Gatsby uses a React component to server render the and other parts of the HTML outside of the core Gatsby application.

Most sites should use the default html.js shipped with Gatsby. But if you need to customize your site’s html.js, simply copy the default one into your source tree by running:

```javascript
import React from 'react';

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter);
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <p>{frontmatter.title}</p>
        <p>{frontmatter.date}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
```

what about css?

```css
/* from prism */
code[class*='language-'],
pre[class*='language-'] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
```

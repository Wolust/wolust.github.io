---
title: Willkommen bei WOLUST
---

**WOLUST** steht für *Wormser Linux User Stammtisch*. Wir treffen uns jeden ersten Dienstag im Monat zum lockeren Austausch über Linux, Open Source und andere nerdige Themen.

Wenn Dich Linux interessiert, komm vorbei und setz dich dazu!

![Tux mit Wolust-Schild](/img/wolust-tux.png)

Weitere Informationen findest du in den folgenden Dokumenten und in unserem Blog.

---

## Neueste Blogposts

<BlogTeaser />

[Weitere Blogposts anzeigen →](/blog)

export function BlogTeaser() {
  const posts = useAllBlogPosts();
  return (
    <ul>
      {posts.slice(0, 2).map(post => (
        <li key={post.id}>
          <Link to={post.metadata.permalink}>{post.metadata.title}</Link>
          <br />
          <em>{post.metadata.description || post.metadata.frontMatter.summary || ''}</em>
        </li>
      ))}
    </ul>
  );
}

// This file is obsolete and should be deleted. The homepage is now implemented in index.js for full Docusaurus layout support.

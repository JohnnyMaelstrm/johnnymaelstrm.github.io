---
icon: fas fa-book
order: 5
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --accent: #e4e4e7;
  --accent-dim: #a1a1aa;
  --bg-dark: #09090b;
  --border: rgba(255, 255, 255, 0.08);
  --text: #d4d4d8;
  --text-dim: #52525b;
}

/* Rajataan vain books-page sisällä */
#page-books .books-page,
.books-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.6;
}

#page-books .page-intro,
.books-page .page-intro {
  font-size: 1rem;
  color: var(--text-dim);
  margin-bottom: 3rem;
  line-height: 1.7;
}

#page-books .book-item,
.books-page .book-item {
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border);
}

#page-books .book-item:last-child,
.books-page .book-item:last-child {
  border-bottom: none;
}

#page-books .book-item img,
.books-page .book-item img {
  width: 250px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

#page-books .book-item img:hover,
.books-page .book-item img:hover {
  transform: scale(1.02);
}

#page-books .book-title,
.books-page .book-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
}

#page-books .book-description,
.books-page .book-description {
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.7;
}

@media (max-width: 600px) {
  #page-books .book-item img,
  .books-page .book-item img {
    width: 100%;
    max-width: 250px;
  }
}
</style>

<div class="books-page">

<p class="page-intro">
These are some of the cybersecurity-related books that I have read and use in my projects.
</p>

<div class="book-item">
  <img src="{{ '/assets/books/pic2.jpg' | relative_url }}" alt="The Red Team Field Manual V2">
  <div class="book-title">The Red Team Field Manual V2</div>
  <p class="book-description">
    The Red Team Field Manual V2 is really good book. This book covers everything from basic penetration testing techniques to advanced attack scenarios. It provides practical examples and step-by-step instructions that are useful for hands-on practice. My go-to book!
  </p>
</div>

<div class="book-item">
  <img src="{{ '/assets/books/pic1.jpg' | relative_url }}" alt="Hacking: The Art of Exploitation">
  <div class="book-title">Hacking: The Art of Exploitation</div>
  <p class="book-description">
    Hacking: The Art of Exploitation provides a deep dive into the technical side of hacking, especially on the code-side.
  </p>
</div>

</div>
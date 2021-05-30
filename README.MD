# Vanilla Scroll To Top | Modern Scroller | Scroll To Top Button

Simple and Back To Top button with no dependencies. Hides by default until window scrolled passed 700px, scrolls up smoothly when clicked.
Modern Scroller using HTML, CSS and Vanilla JS.

[![GitHub stars](https://img.shields.io/github/stars/mogrady-git/vanilla-scroll-to-top.svg?style=social&label=Stars)](https://github.com/mogrady-git/vanilla-scroll-to-top)
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mogrady-git/vanilla-scroll-to-top">
<a href="https://mogrady-git.github.io/vanilla-scroll-to-top/"><img alt="GitHub last commit" src="https://img.shields.io/badge/Version%201.0-Launch%20Demo-green"></a>

<img src="https://github.com/mogrady-git/vanilla-scroll-to-top/blob/master/preview-image.gif" width="100%"/>

### Features

> Runs on window scroll, when the window has spanned over 700px in height, Scroll to Top Button is displayed. Clicking on the button Scrolls to Page Top.

> CSS required for Smooth Scrolling Effect - add html{scroll-behavior: smooth;}

## How to use

Add this to `<body>` of your HTML:

```html
<!-- Arrow Button -->
<div class="arrow-btn" id="arrowBtn">
  <a href="#"><span class="fas fa-angle-up"></span></a>
</div>
<!-- End Arrow Button -->
```

Add this to your main JS file:

```javascript
const arrowBtn = document.getElementById("arrowBtn");

window.onscroll = function () {
  scrollToTop();
};

function scrollToTop() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    // console.log("Scrolled over 700");
    arrowBtn.style.opacity = "1";
    arrowBtn.style.pointerEvents = "auto";
  } else {
    arrowBtn.style.opacity = "0";
    arrowBtn.style.pointerEvents = "none";
  }
}
```

Add this to yourmain CSS file:

```css
html {
  scroll-behavior: smooth;
}

/* Arrow Navigation Scroller */

.arrow-btn {
  position: fixed;
  bottom: 45px;
  right: 30px;
  z-index: 9999;
  opacity: 0;
}

.arrow-btn a {
  height: 39px;
  width: 39px;
  text-align: center;
  background: #0d0d0dd8;
  display: block;
  border-radius: 3px;
  color: #f2f2f2;
  font-size: 25px;
}

.arrow-btn a span {
  line-height: 39px;
  font-size: 25px;
  cursor: pointer;
}

.arrow-btn a:hover {
  background: #1b1b1b;
  color: #4ceb95;
}

/* EndArrow Navigation Scroller */
```

[Support me with a star ♥](https://github.com/mogrady-git/vanilla-scroll-to-top)

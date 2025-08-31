/* eslint-disable no-shadow */
'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const spiderImg = document.querySelector('img[src*="spider.svg"]');

  if (!spiderImg) {
    return;
  }

  function centerSpider() {
    const wall = document.querySelector('.wall');

    if (!wall) {
      return;
    }

    const border = 10;
    const wallRect = wall.getBoundingClientRect();
    const imgW = spiderImg.clientWidth;
    const imgH = spiderImg.clientHeight;

    // left/top відносно документа
    const left = wallRect.left + wall.clientWidth / 2 + border - imgW / 2;
    const top = wallRect.top + wall.clientHeight / 2 + border - imgH / 2;

    spiderImg.style.position = 'fixed';
    spiderImg.style.left = left + 'px';
    spiderImg.style.top = top + 'px';
    spiderImg.style.transform = 'none';
    spiderImg.style.margin = '0';
    spiderImg.style.zIndex = '1000';
  }

  centerSpider();
  window.addEventListener('resize', centerSpider);
});

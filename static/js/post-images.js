document.querySelectorAll('.post img').forEach(function(image) {
  if (image.closest('a')) {
    return;
  }

  var link = document.createElement('a');
  link.href = image.currentSrc || image.src;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  image.parentNode.insertBefore(link, image);
  link.appendChild(image);
});

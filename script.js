// script.js
// alert("Welcome to my basic webpage!");
  
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
  post.addEventListener('mouseover', () => {
    post.style.backgroundColor = '#d6c0a1'; /* Darker shade on hover */
  });

  post.addEventListener('mouseout', () => {
    post.style.backgroundColor = '#e5d4ba'; /* Muted warm tile color */
  });
});

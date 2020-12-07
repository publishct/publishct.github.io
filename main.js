
const myLinkedInBtn = document.querySelector('.linkedInContainer');
const linkedInLink = document.createElement('a');

linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/cynthiathey/');
linkedInLink.setAttribute ('target','_blank');
linkedInLink.setAttribute('class', 'btn btn-primary btn-sm');
linkedInLink.setAttribute('role','button');
linkedInLink.textContent = 'LinkedIn';

myLinkedInBtn.appendChild(linkedInLink);

const mygithubBtn = document.querySelector('.githubContainer');
const githubLink = document.createElement('a');

githubLink.setAttribute('href', 'https://github.com/publishct');
githubLink.setAttribute ('target','_blank');
githubLink.setAttribute('class', 'btn btn-primary btn-sm');
githubLink.setAttribute('role','button');
githubLink.textContent = 'github';

mygithubBtn.appendChild(githubLink);
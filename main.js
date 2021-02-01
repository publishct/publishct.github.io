
const myLinkedInBtn = document.querySelector('.linkedInContainer');
const linkedInLink = document.createElement('a');

linkedInLink.setAttribute('href', 'https://linkedin.com/in/1codylake');
linkedInLink.setAttribute('target', '_blank');
linkedInLink.setAttribute('class', 'btn btn-primary btn-sm');
linkedInLink.setAttribute('role', 'button');
linkedInLink.textContent = 'LinkedIn';

myLinkedInBtn.appendChild(linkedInLink);

const mygithubBtn = document.querySelector('.githubContainer');
const githubLink = document.createElement('a');

githubLink.setAttribute('href', 'https://github.com/publishct');
githubLink.setAttribute('target', '_blank');
githubLink.setAttribute('class', 'btn btn-primary btn-sm');
githubLink.setAttribute('role', 'button');
githubLink.textContent = 'github';

mygithubBtn.appendChild(githubLink);

const seeMore = document.querySelector('.collapseLive');
seeMore.textContent = 'see Cody\'s live learning samples'

function textChange(e) {
    if (e.target.textContent === 'see Cody\'s live learning samples') {
        e.target.textContent = '...see fewer samples';
    } else {
        e.target.textContent = 'see Cody\'s live learning samples';
    }
}

seeMore.addEventListener('click', textChange);
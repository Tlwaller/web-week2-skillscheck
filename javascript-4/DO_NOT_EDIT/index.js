const title = document.getElementById('superhero-title');
const intro = document.getElementById('intro');
const powersList = document.getElementById('powers-list');
const profileImg = document.getElementById('profile-pic');
const redactBtn = document.getElementById('redact-btn');
title.innerText = `${regularName} aka ${superName.toUpperCase()}`;
intro.innerText = `In the not-so-sleepy town of ${homeTown}, lives a super hero waiting to save the day...`;

profileImg.src = me.profileImage;
setColor(faveColors);

redactBtn.addEventListener('click', () => redactInfo(me));

function createLi(text) {
  const item = document.createElement('li');
  text !== 'redacted'
    ? (item.innerText = `${text} ${me.superPowerXP}XP`)
    : (item.innerText = text);
  powersList.appendChild(item);
}

function background(a, b, c) {
  document.getElementById('color-container').style.backgroundImage = `linear-gradient(222deg, ${a} 0%, ${b} 46%, ${c} 100%)`;
}

function redacted() {
  title.innerText = `${me.firstName} aka ${me.superHeroName.toUpperCase()}`;
  intro.innerText = `In the not-so-sleepy town of ${me.homeTown}, lives a super hero waiting to save the day...`;
  powersList.innerHTML = '';
  profileImg.src = '';
  createLi(me.superPowers);
}

setPowers(me.superPowers);

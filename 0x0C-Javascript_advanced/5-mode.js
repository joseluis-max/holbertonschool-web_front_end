#!/usr/bin/node

function changeMode (size, weight, transform, background, color) {
  return () => {
    const html = document.querySelector('html');
    let styleStr = 'font-size:' + size + ';';

    styleStr += 'font-weight:' + weight + ';';
    styleStr += 'text-transform:' + transform + ';';
    styleStr += 'background-color:' + background + ';';
    styleStr += 'color:' + color + ';';

    html.style = styleStr;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'whilte', 'black');

  const spookyBtn = document.createElement('button');
  const darkModeBtn = document.createElement('button');
  const screamModeBtn = document.createElement('button');

  const WH = 'Welcome Holberton!';
  const pTag = document.createElement('p');
  const body = document.querySelector('body');

  pTag.textContent = WH;
  body.appendChild(pTag);

  spookyBtn.onclick = spooky;
  spookyBtn.textContent = 'Spooky';

  darkModeBtn.onclick = darkMode;
  darkModeBtn.textContent = 'Dark mode';

  screamModeBtn.onclick = screamMode;
  screamModeBtn.textContent = 'Scream mode';

  body.appendChild(spookyBtn);
  body.appendChild(darkModeBtn);
  body.appendChild(screamModeBtn);
}

main();

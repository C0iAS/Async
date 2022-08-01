const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCkHa8ro0g85v0VSze2M3AnQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': '812e23ace4mshe3d8da002e58b6dp12a99ajsne1d239cf2e2d'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none gray">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between gray">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();

const aboutButton = document.querySelector('.boton-about');
const about = document.getElementById('p2e');
const videos = document.querySelector('.videos');
const homeButton = document.getElementById('home');

aboutButton.addEventListener('click', aboutSection);
homeButton.addEventListener('click', aboutSection)

function aboutSection() {
  videos.classList.toggle('inactive');
  homeButton.classList.toggle('inactive');
  aboutButton.classList.toggle('inactive');
  about.classList.toggle('inactive');
}

//DARK MODE

let relative = [];
relative = document.querySelectorAll('.relative');
let white = [];
white = document.querySelectorAll('.bg-white');

const darkmode = document.getElementById('darkmode');
const lightmode = document.getElementById('lightmode');

darkmode.addEventListener('click', darkLightMode);
lightmode.addEventListener('click', darkLightMode2);

function darkLightMode() {
  for(let i = 0; i < relative.length; i++) {

    relative[i].classList.add('mode');
    
  }
  for(let i = 0; i < white.length; i++) {

    white[i].classList.add('mode');
    
  }
  about.classList.add('mode');
  darkmode.classList.toggle('inactive');
  lightmode.classList.remove('inactive');
}

function darkLightMode2() {
  for(let i = 0; i < relative.length; i++) {

    relative[i].classList.remove('mode');
    
  }
  for(let i = 0; i < white.length; i++) {

    white[i].classList.remove('mode');
    
  }
  lightmode.classList.toggle('inactive');
  darkmode.classList.toggle('inactive');
  about.classList.toggle('mode');
}



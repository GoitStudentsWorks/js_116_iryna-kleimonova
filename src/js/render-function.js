import { refs } from './refs.js';
import spriteUrl from '../images/sprite.svg?url';

export function renderArtists(data) {
  const markup = data.artists
    .map(artist => {
      const { _id, strArtist, strBiographyEN, strArtistThumb, genres } = artist;
      return `
              <li class="artist-card" data-id="${_id}">
              
                <img class="artist-card-img" src="${strArtistThumb}" alt="${strArtist}" />
            
                <ul class="artist-card-genres">
                  ${genres.map(genre => `<li>${genre}</li>`).join('')}
                </ul>

                <h3 class="artist-card-name">${strArtist}</h3>
            
                <p class="artist-card-info">
                  ${
                    strBiographyEN
                      ? strBiographyEN.slice(0, 100) + '...'
                      : 'No description available'
                  }
                </p>
            
                <button class="artist-card-btn" type="button">
                 Learn More
                 <svg class="artist-card-icon" width="24" height="24">
                 <use href="${spriteUrl}#icon-caret-right"></use>
                 </svg>
                </button>
              </li>
            `;
    })
    .join('');

  refs.artistCardsContainer.insertAdjacentHTML('beforeend', markup);
}
export function renderModal(artistData) {
  console.log(artistData);

  const {
    strArtist = '-',
    strArtistThumb,
    intFormedYear,
    intDiedYear,
    strGender = '-',
    intMembers,
    strCountry = '-',
    strBiographyEN = '-',
    genresList = [],
    albumsList = [],
  } = artistData;

  const yearsActive = intFormedYear
    ? intDiedYear
      ? `${intFormedYear} - ${intDiedYear}`
      : `${intFormedYear} - present`
    : '-';

  const genresMarkup = genresList.length
    ? genresList
        .map(genre => `<button class="genre-btn">${genre}</button>`)
        .join('')
    : '-';

  const albumsMarkup = albumsList.length
    ? albumsList
        .map(album => {
          const tracksMarkup =
            album.tracks && album.tracks.length
              ? album.tracks
                  .map(
                    track =>
                      console.log(track)`
                    <li class="track-item">
                      <span class="track-name">${track.trackTitle || '-'}</span>
                      <span class="track-duration">${
                        track.trackDuration || '-'
                      }</span>
                      ${
                        track.youtubeLink
                          ? `<a class="track-link" href="${track.youtubeLink}" target="_blank" rel="noopener noreferrer">🔗</a>`
                          : `<span class="track-link empty">-</span>`
                      }
                      
                    </li>`
                  )
                  .join('')
              : '<li>-</li>';

          return `
            <div class="album">
              <h4>${album.albumTitle || '-'}</h4>
              <ul class="track-list">${tracksMarkup}</ul>
            </div>`;
        })
        .join('')
    : '-';
  // console.log(album.tracks)

  const markupModal = `
    <div>
      <h2 class="artist-title">${strArtist}</h2>
    </div>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${strArtistThumb || ''}" alt="${strArtist}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${yearsActive}</li>
        <li><b>Sex:</b> ${strGender}</li>
        <li><b>Members:</b> ${intMembers != null ? intMembers : '-'}</li>
        <li><b>Country:</b> ${strCountry}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${genresMarkup}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${strBiographyEN}</p>
      </div>
      <div class="artist-albums">
        <h3>Albums</h3>
        ${albumsMarkup}
      </div>
    </div>`;

  refs.modal.innerHTML = markupModal;
  refs.modal.classList.remove('hidden');
}

export function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('visually-hidden');
}

export function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('visually-hidden');
}

export function showLoader() {
  refs.loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('visually-hidden');
}

export function renderStars(containerSelector, rating) {
  const container =
    typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

  if (!container) return;

  
  const starDiv = document.createElement('div');
  starDiv.className = 'stars';

  const percent = Math.min(100, Math.max(0, (rating / 5) * 100));
  starDiv.style.setProperty('--rating-percent', `${percent}%`);

  container.appendChild(starDiv);
}

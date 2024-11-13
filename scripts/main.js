const genreData = {
  rock: {
    imgSrc: 'images/Shed-cover.jpg',
    albumName: 'Shed',
    artist: 'Title Fight',
    year: '2011',
    spotifyEmbed: `
      <iframe src="https://open.spotify.com/embed/track/1csPfS6y1zVsZx7SbXJDXJ?utm_source=generator" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `,
  },
  hiphop: {
    imgSrc: 'images/Alternative_cover.jpg',
    albumName: 'Alternative Trap',
    artist: 'Lucki',
    year: '2013',
    spotifyEmbed: `
      <iframe src="https://open.spotify.com/embed/track/0ZFQxmNIOj03o7OMaiPcVX?utm_source=generator" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `,
  },
  indie: {
    imgSrc: 'images/Couples-therapy.jpg',
    albumName: 'Couples therapy',
    artist: 'Marietta // Modern Baseball',
    year: '2015',
    spotifyEmbed: `
      <iframe src="https://open.spotify.com/embed/track/3BepuSCt7eLXv98kbVIp7L?utm_source=generator" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `,
  },
};

$(document).ready(function() {
  $('.dropdown-item').click(function(e) {
    e.preventDefault();
    const selectedGenre = $(this).data('genre');
    const genreText = $(this).text();

    $('#genreDropdown').text(genreText);

    const data = genreData[selectedGenre];
    if (data) {
      $('#albumArt').attr('src', data.imgSrc);
      $('#albumName').text(data.albumName);
      $('#artistName').text(data.artist);
      $('#albumYear').text(data.year);

      $('#spotifyPlayer').html(data.spotifyEmbed);
    }
  });
});

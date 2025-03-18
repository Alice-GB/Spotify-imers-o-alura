const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');
/* não usamos mas existe o querySelect, mas ele utiliza apenas o primeiro elemento e o querySelectAll utiliza todos mas não é viavel para nós*/

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name; /* para aparecer o nome do artista nos resultados*/
        artistImage.src = element.urlImg; /* Para exibir a imagem do artista*/ 
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden'); /* Para esconder os cards*/
        resultArtist.classList.remove('hidden'); /* para remover o hidden e mostrar todos os cards*/
        return;

    }
    
    requestApi(searchTerm);
}) /* pode declarar um função anônima*/
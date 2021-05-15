function searchLyric() {
    const search = document.querySelector('#searchLyrics').value;

    fetch(`https://api.lyrics.ovh/suggest/${search}`)
        .then(res => res.json())
        .then(data => {
            const songInfo = data.data.slice(0,10)
            showLyrics(songInfo)
        })
  document.querySelector('#searchLyrics').value = '';

}
async function showLyricsDetails(singur, song, id) {
    const url = `https://api.lyrics.ovh/v1/${singur}/${song}`
    try {
        const res = await fetch(url)
        const data = await res.json();
        const strId = `'${id}'`

       if(data.lyrics){
        document.getElementById(strId).innerHTML=`
        <pre style="color: #fff;">${data.lyrics}</pre>
        <bold style="cursor:pointer">❌</bold>
        `;
       }else{
        document.getElementById(strId).innerHTML=`
        <pre style="color: #fff;">This singer have no lyrics Here</pre>
        <bold style="cursor:pointer">❌</bold>
        `;  
       }
        hideLyrics(strId)
    } catch (e) {
        console.log(e.message);
    }

}
function hideLyrics(id){
    document.getElementById(id).addEventListener('click', function(){
        document.getElementById(id).innerText= ''
    })
}

function showLyrics(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        document.querySelector('.search-result').innerHTML += `
        <div>
        <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${element.title}</h3>
                    <p class="author lead">Album by <span>${element.artist.name}</span></p>
                    <audio controls>
                        <source src="${element.preview}" type="audio/mpeg"
                    </audio>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button class="btn btn-success" onclick="showLyricsDetails('${element.artist.name}', '${element.title}', '${element.id}')" data-toggle="collapse" data-target="#'${element.id}'">Get Lyrics</button>
                </div>
            </div>
            <p id="'${element.id}'" class="show-lyric"></p>
           </div> 
    `
    }

}
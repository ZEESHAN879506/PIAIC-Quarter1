function make_album(artist, album_title, tracks) {
    var music_album = {
        artist: artist,
        album_title: album_title,
    };
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    ;
    return music_album;
}
;
var album1 = make_album("ahmed", "Musafir");
console.log(album1);
var album2 = make_album("irfan", "Ghalib");
console.log(album2);
var album3 = make_album("haroon", "Meer taqi", 3);
console.log(album3);

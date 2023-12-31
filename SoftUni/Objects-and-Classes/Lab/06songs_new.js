function songs(songsData) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = +songsData.shift();
    let typeOfSongs = songsData.pop();
    

    for (let i = 0; i < songsData.length; i++) {
        let [type, name, time] = songsData[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (typeOfSongs === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeOfSongs);
        filtered.forEach((i) => console.log(i.name));
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
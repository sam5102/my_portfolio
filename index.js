const jsmediatags = window.jsmediatags;

let songs = ["./music/Aaja We Mahiya (Imran Khan).mp3", "./music/Elevated.mp3", "./music/Let Me Down Slowly.mp3", "./music/Manjha - Vishal Mishra.mp3", "./music/Mask-Off.mp3", "./music/Shubh - No Love.mp3", "./music/We Rollin - Shubh.mp3", "./music/Woh Lamhe Woh Baatein - Atif Aslam.mp3"]

const songMetaData = () => {
    songs.forEach(element => {
        console.log(element);

        jsmediatags.read("https://file-examples.com/storage/fe332cf53a63a4bd5991eb4/2017/11/file_example_MP3_2MG.mp3", {
            onSuccess: function(tag) {
                console.log(tag, tag.tags.artist);
            },
            onError: function(error) {
                console.log(':(', error.type, error[error.type]);
              }
        })
    });
}

const togglePlaylist = () => {
    document.getElementById("songs_list").style.visibility = "visible";
}


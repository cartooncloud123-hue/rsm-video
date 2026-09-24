const videos = [
    {
        title: "મારી નવી Comedy Video 🤣",
        channel: "RSM DESI COMEDY",
        views: "1.2K views",
        time: "2 days ago",
        category: "comedy",
        thumbnail: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "2:35"
    },

    {
        title: "મારો New Daily Vlog 🎥",
        channel: "Rohit Lifestyle Vlogs",
        views: "850 views",
        time: "1 day ago",
        category: "vlog",
        thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
        video: "https://www.w3schools.com/html/movie.mp4",
        duration: "4:20"
    },

    {
        title: "New Trending Music 🎵",
        channel: "RSM Music",
        views: "5.4K views",
        time: "3 days ago",
        category: "music",
        thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "3:45"
    },

    {
        title: "BGMI Gaming Challenge 🎮",
        channel: "RSM Gaming",
        views: "10K views",
        time: "5 hours ago",
        category: "gaming",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        duration: "8:15"
    }
];


const container = document.getElementById("videoContainer");


function displayVideos(list) {

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<h3>😔 Video not found</h3>";
        return;
    }

    list.forEach((video) => {

        const card = document.createElement("div");

        card.className = "video-card";

        card.innerHTML = `
            <div class="thumbnail">

                <img
                    src="${video.thumbnail}"
                    alt="${video.title}"
                >

                <span class="duration">
                    ${video.duration}
                </span>

            </div>

            <div class="video-info">

                <div class="channel-icon">
                    ▶
                </div>

                <div>

                    <div class="video-title">
                        ${video.title}
                    </div>

                    <div class="channel-name">
                        ${video.channel}
                    </div>

                    <div class="channel-name">
                        ${video.views} • ${video.time}
                    </div>

                </div>

            </div>
        `;

        card.onclick = function () {
            openPlayer(video);
        };

        container.appendChild(card);
    });
}


function openPlayer(video) {

    const modal = document.getElementById("playerModal");
    const player = document.getElementById("videoPlayer");
    const title = document.getElementById("playerTitle");

    player.src = video.video;

    title.innerText = video.title;

    document.getElementById("likeCount").innerText = "0";

    modal.style.display = "flex";

    player.play().catch(() => {});
}


function closePlayer() {

    const modal = document.getElementById("playerModal");
    const player = document.getElementById("videoPlayer");

    player.pause();

    player.src = "";

    modal.style.display = "none";
}


function likeVideo() {

    const count = document.getElementById("likeCount");

    let likes = Number(count.innerText);

    likes++;

    count.innerText = likes;
}


function searchVideos() {

    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const result = videos.filter(video =>
        video.title.toLowerCase().includes(search) ||
        video.channel.toLowerCase().includes(search)
    );

    displayVideos(result);
}


function filterVideos(category) {

    if (category === "all") {
        displayVideos(videos);
        return;
    }

    const result = videos.filter(video =>
        video.category === category
    );

    displayVideos(result);
}


function shareVideo() {

    if (navigator.share) {

        navigator.share({
            title: "RSM Video",
            text: "Check out this video!",
            url: window.location.href
        });

    } else {

        alert(
            "આ website ની link copy કરીને share કરો 👍"
        );
    }
}


function loginAlert() {

    alert(
        "🔐 Login system STEP 4 માં આવશે!"
    );
}


function scrollToVideos() {

    document
        .getElementById("videosSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


displayVideos(videos);

function playVideo(stream, idVideo) {
    const  video = document.getElementById(idVideo);
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
}
module.exports = playVideo;
const openStream = require('./openStream');

const Peer = require('simple-peer');
const playVideo = require('./playVideo');
const $ = require('jquery');

openStream(stream =>{
    playVideo(stream,'local-video')
    const p = new Peer({initiator : location.hash === '#1', trickle : false, stream });
    p.on('signal', token => {
        $('#txtMySignal').val(JSON.stringify(token))

    });
    $('#btnConnect').click( () => {
        const FriendSignal = JSON.parse($('#txtFriendSignal').val());
        p.signal(FriendSignal);

    });

    p.on('stream', friendStream => playVideo(friendStream,'remote-video'));
});

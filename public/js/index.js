var socket = io();

socket.on('connect', function () {
    console.log('conncet to server');
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});

socket.emit('createMessage', {
    from:'Marry',
    text:'OK'
}, function(data){
    console.log(data);
});
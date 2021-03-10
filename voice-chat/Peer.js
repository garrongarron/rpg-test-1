let peer = null
let getPeer = () => {
  if (peer != null) return peer
  peer = new Peer(undefined, {
    host: 'mmorpg-peerjs.herokuapp.com', 
    secure: true
  })

  peer.on('close', function () {
    console.log('Connection destroyed');
  });
  return peer
}

export default getPeer
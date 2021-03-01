let peer = null
let getPeer = () => {
  if (peer != null) return peer
  peer = new Peer(undefined, {
    host: '0.peerjs.com',
    // port: '3001'
  })

  peer.on('close', function () {
    console.log('Connection destroyed');
  });
  return peer
}

export default getPeer
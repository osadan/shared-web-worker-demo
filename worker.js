messageCounter = 0;
connections = 0
const portsMap = new Map();

onconnect = function (e) {
  const port = e.ports[0];
  const connect = ++connections;
  portsMap.set('c' + connect, port);
  console.log('connection established',connect);
  
  port.addEventListener('message', function (e) {
    console.log('worker message', messageCounter);
    e.data.apiCall = `w${connect},${++messageCounter},${e.data.apiCall}`
    
    portsMap.forEach(portItem => {
      if(portItem !== port){
        portItem.postMessage(e.data);
      } 
    })

  }, false);
  
  port.start();
}


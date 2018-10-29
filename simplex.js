class Simplex{
    init(simplex){
        this.worker = new SharedWorker('./worker.js');
        
        this.worker.port.start('a2');

        this.worker.port.onmessage = e => {
            if(e.data.type === 'request'){
                console.log('simplex api request', e.data.apiCall, e.data.args);
                e.data.apiCall = `s,${e.data.apiCall}`
                this.sendResponse(e.data.apiCall);
            }
        }
    }

    sendResponse(result){
        const message = {
            type: "response",
            result,
        }
        this.worker.port.postMessage(message);  
    }
}
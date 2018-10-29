class SimplexApi {
    init() {
        this.worker = new SharedWorker('./worker.js');
        /*this.worker.onmessage(message , () => {
            console.log(message);
        })*/

        this.worker.port.start('a1');

        this.worker.port.onmessage = function (e) {
            if(e.data.type === 'response'){
                console.log('Simplex App said: ', e.data.result);
            }
        };

    }

    sendRequest(apiCall,args) {
        const message = {
            type: "request",
            apiCall,
            args
        }
        this.worker.port.postMessage(message);
    }
}
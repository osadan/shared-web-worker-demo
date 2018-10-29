class Client{
    init(simplex){
       const el =  document.querySelector('#click');
       el.addEventListener('click',() => {
           this.send(document.querySelector('input').value);
       })
       this.simplex = simplex;
    }
    send(message,args){
        this.simplex.sendRequest(message,args);    
    }
}
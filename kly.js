class animal{
    constructor(name , color){
        this.name  = ""
        this.color = ""
    }

    running(){
        console.log(this.name + '会跑步')
    }

};

let tiger = new animal('康刘勇','红色')
tiger.running();
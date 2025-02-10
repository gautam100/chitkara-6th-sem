let laptop = {
    "name": "HP",
    "display": function(){
        console.log(this.name);//HP
    }
}
laptop.display();


let mobile = Object.create(laptop,{
    "name":{
        value: "Samsung M52"
    }
});



mobile.display();//Samsung M52


let laptop = {
    name: "Dell",
    display: function(){
        console.log(this.name);
    }
}
laptop.display();

let mobile = Object.create(laptop,{
    name:{
        value: "samsung m52"
    }
})
mobile.display();//samsung m52
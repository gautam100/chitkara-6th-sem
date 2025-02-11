let electronics = {
    "name":"mobile",
    "category":function(){
        console.log("Category: Electronics");
    }
}

let mobile = Object.create(electronics,{
    "name":{
        value: "I Phone 16"
    }
});

console.log(mobile.name);
mobile.category();
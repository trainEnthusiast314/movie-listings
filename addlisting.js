if(data == undefined) {
    data = {};
}

let dataBind = function() {
    
}

dataBind.get = function(key) {
    return data[key];
}

dataBind.set = function(key, value) {
    data[key] = value;
}

dataBind.display = function() {
    document.querySelectorAll('[name], [data]').forEach((item)=>{
        if(item.name == undefined) {
            let key = item.getAttribute("data");
            item.innerText = data[key];
        } 
    })
}

dataBind.save = function() {
    console.log(JSON.stringify(data));
    sessionStorage.setItem('data', JSON.stringify(data));
}
 
dataBind.display();

document.addEventListener("input", function(e) {
    dataBind.set(e.target.name, e.target.value);
    dataBind.display();
})


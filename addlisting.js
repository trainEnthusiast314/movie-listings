function add(item) {
    let node = document.createElement("li");
    node.innerHTML = `<input id="time" type="time" name ="date1time" />`;
    document.getElementById(item).appendChild(node);
}







let data = {

}

let dataBind = function() {
    
}

dataBind.get = function(key) {
    return data[key];
}

dataBind.set = function(key, value) {
    data[key] = value;
}

/*dataBind.display = function() {
    document.querySelectorAll('[name], [data]').forEach((item)=>{
        if(item.value != "" && item.value != undefined) {
            console.log(item.name, item.value);
            let key = item.getAttribute("data");
            item.innerText = data[key];
        } 
    })
}*/

dataBind.display = function() {
    document.querySelectorAll('[name], [data]').forEach((item)=>{
        if(item.name == undefined) {
            let key = item.getAttribute("data");
            item.innerText = data[key];
        } 
    })
}

window.addEventListener("load", function() {

    document.getElementById("date1").value = "2024-02-02";
    document.getElementById("date2").value = "2024-02-03";
    document.getElementById("date3").value = "2024-02-04";
    document.getElementById("date4").value = "2024-02-05";
    document.getElementById("date5").value = "2024-02-06";
    document.getElementById("date6").value = "2024-02-07";
    document.getElementById("date7").value = "2024-02-08";

    this.document.querySelector('form').addEventListener("input", function(e)
    {
        dataBind.set(e.target.name, e.target.value);
        dataBind.display()
    })

    
})




let task = {
    "html":{
        "1": {
            "element": "div",
            "class": "soso"
        }
    }
}

const next = "" //java script write please


setInterval(()=>{
    Object.keys(task["html"]).forEach(key=>{
        const taskEmlem = task["html"][key]
        document.querySelector(".render").querySelectorAll(taskEmlem.element).forEach(elem=>{
            if ("class" in taskEmlem){
                if (elem.classList.contains(taskEmlem["class"])){
                    alert("hi")
                    delete task["html"][key]
                    if (Object.values(task["html"]).length == 0){
                        
                    }
                }
            }
        })
    })
}, 1000)



// on development stage
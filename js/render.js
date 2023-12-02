let choice = "html"
let html = ""
let css = ""
let js = ""

document.querySelector(".choice").addEventListener("change", (e)=>{
    choice = e.target.value
    document.querySelector(".codeInput").value = eval(e.target.value)
})

document.querySelector(".codeInput").addEventListener("change", (e)=>{
    if (choice == "html"){
        html = e.target.value
        document.querySelector(".render").innerHTML = html
        let style = document.createElement("style")
        style.innerHTML = css
        document.querySelector(".render").appendChild(style)
    }
    if (choice == "css"){
        css = e.target.value
        let style = document.createElement("style")
        style.innerHTML = css
        document.querySelector(".render").appendChild(style)
    }
    if (choice == "js"){
        js = e.target.value
        eval(js)
    }
})
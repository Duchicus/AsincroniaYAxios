// 1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder

axios.get("https://jsonplaceholder.typicode.com/users")
    
 .then((users) => {
    console.log(users.data)

    let arrayUsuarios = users.data

    arrayUsuarios.forEach(us => {
       console.log(us.name)
    })
})
 .catch((err) => console.error(err));



let usuarios = []

axios.get("https://jsonplaceholder.typicode.com/users")
    
 .then((users) => {
    usuarios = users.data
})
      
 .catch((err) => console.error(err)); 

 console.log(usuarios)


let boton = document.getElementById("button")
let divUser = document.getElementById("divUser")

function showUsers(){
    console.log(usuarios);
    let nombres = ""
    usuarios.forEach(us => {
        nombres += us.name + "<br>"
        divUser.innerHTML = `
        <p>${nombres}</p>`
     })
}
  
// boton.addEventListener("click", ()=> showUsers(usuarios))
boton.addEventListener("click",  showUsers)


// Extras
let divRazas = document.getElementById("divRazas")


axios.get("https://dog.ceo/api/breeds/list/all")
    
 .then((res) => {
    console.log(res.data.message)
    let razas = Object.keys(res.data.message)
    let totalrazas = ""
    razas.forEach(us => {
        totalrazas += us + "<br>"
        divRazas.innerHTML = `
        <p>${totalrazas}</p>`
     })
    })
      
 .catch((err) => console.error(err));


axios.get("https://dog.ceo/api/breeds/image/random")
    
 .then((res) => {
   console.log(res.data.message)

   let img = document.getElementById("divImgRandom")
      img.innerHTML = `<img src='${res.data.message}' style="width="100px" height="100px""><img>`
   })
      
 .catch((err) => console.error(err));


axios.get(" https://dog.ceo/api/breed/hound/afghan/images")
    
 .then((res) =>{console.log(res.data.message)})
      
 .catch((err) => console.error(err));


 axios.get("https://dog.ceo/api/breeds/list/all")
    
 .then((res) =>{
    
    let claves = Object.keys(res.data.message)

    let perroRandom = Math.floor(Math.random() * claves.length) + 1

    axios.get(`https://dog.ceo/api/breed/${claves[perroRandom]}/images/random`)
    
        .then((res) => console.log(res.data.message))
            
        .catch((err) => console.error(err));
 })
      
 .catch((err) => console.error(err));
console.log('%c HI', 'color: firebrick')

addEventListener("DOMContentLoaded", (event) => {;
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => {

if(!response.ok){
    throw new Error("Could not fetch pic.")
}
return response.json()
})
.then(data => {
    data.message.forEach(image=>{
const dogImage = document.getElementById('dog-image-container')
const newImage = document.createElement('img')
newImage.src = image
dogImage.append(newImage)
    })
    console.log(data.message[0])})


.catch(error => console.error(error))


})
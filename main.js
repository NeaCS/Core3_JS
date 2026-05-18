/* const botonMeGustaLinn = document?.querySelectorAll(".boton-like")[0]
const botonMeGustaLina = document?.querySelectorAll(".boton-like")[1]
const botonMeGustaMateo = document?.querySelectorAll(".boton-like")[2]


botonMeGustaLinn?.addEventListener("click", function () {
  const cantidadLikesLinn = document?.querySelectorAll(".cantidad-likes")[0]
  cantidadLikesLinn.innerHTML = parseInt(cantidadLikesLinn.innerHTML) + 1
})

botonMeGustaLina?.addEventListener("click", function () {
  const cantidadLikesLina = document?.querySelectorAll(".cantidad-likes")[1]
  cantidadLikesLina.innerHTML = parseInt(cantidadLikesLina.innerHTML) + 1
})

botonMeGustaMateo?.addEventListener("click", function () {
  const cantidadLikesMateo = document?.querySelectorAll(".cantidad-likes")[2]
  cantidadLikesMateo.innerHTML = parseInt(cantidadLikesMateo.innerHTML) + 1
})
 */

const botonesMeGusta = document?.querySelectorAll(".boton-like")

for (let item in botonesMeGusta) {
  botonesMeGusta[item].addEventListener("click", function () {
    let cantidadLikes = document?.querySelectorAll(".cantidad-likes")[item]
    cantidadLikes.innerHTML = +cantidadLikes.innerHTML + 1
  })
}
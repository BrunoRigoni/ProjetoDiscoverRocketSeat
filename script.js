function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")
  // if (hmtl.classList.contains("light")) {
  // hmtl.classList.remove("light")
  // } else hmtl.classList.add("light") */

  // pegar a Tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (hmtl.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não tiver o light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
  }
}

const urlInput = document.getElementById("imageUrlInput");
const addBtn = document.getElementById("addImageButton");
const deleteBtn = document.getElementById("deleteImageButton");
const gallery = document.getElementById("gallery");

let selectedImage = null;

function addImage(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de la galería";

  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("selected");
    }
    img.classList.add("selected");
    selectedImage = img;
  });

  gallery.appendChild(img);
}

addBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  if (url !== "") {
    addImage(url);
    urlInput.value = "";
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});

deleteBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert("No hay ninguna imagen seleccionada.");
  }
});

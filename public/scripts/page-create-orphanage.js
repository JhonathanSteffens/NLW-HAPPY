const map = L.map('mapid').setView([-27.2193647, -49.6513573], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images');
  // pegar o container para duplicar .new-upload
  const fieldContainer = document.querySelectorAll('.new-upload');
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(
    true
  );

  //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == '') {
    return;
  } else {
    //limpar o campo antes de adicionar ao container de imagens
    input.value = '';
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
  }
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldContainer = document.querySelectorAll('.new-upload');

  if (fieldContainer.length <= 1) {
    span.parentNode.children[0].value = '';
    return;
  }

  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  //retirar a class .active
  document.querySelectorAll('.button-select button').forEach((button) => {
    button.classList.remove('active');
  });
  //colocar a class .active
  const button = event.currentTarget;
  button.classList.add('active');
  //atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

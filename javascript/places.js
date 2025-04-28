const places = [
    {
      name: "Baguio",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Baguio_city.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Baguio_city_view.jpg"
      ],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30603.36082050854!2d120.5797!3d16.4023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1672c1c2b9f%3A0x8a6d1e9bb6f4be5!2sBaguio!5e0!3m2!1sen!2sph!4v1649274534321!5m2!1sen!2sph",
      weather: "☀️ 26°C"
    },
    {
      name: "Cebu",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Cebu_city.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Magellan%27s_Cross_Cebu.jpg"
      ],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31430.0715080738!2d123.8931!3d10.3157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99930523b49d7%3A0x7c92c2c93735283b!2sCebu%20City!5e0!3m2!1sen!2sph!4v1649274835671!5m2!1sen!2sph",
      weather: "⛅ 30°C"
    }
  ];
  
  // Generate cards
  const cardsContainer = document.getElementById('cards');
  places.forEach((place, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${place.images[0]}" alt="${place.name}">
      <p>${place.name}</p>
    `;
    card.addEventListener('click', () => showPlace(index));
    cardsContainer.appendChild(card);
  });
  
  // Show selected place
  function showPlace(index) {
    const place = places[index];
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = `<img src="${place.images[0]}" id="current-slide">`;
    
    let currentSlide = 0;
    setInterval(() => {
      currentSlide = (currentSlide + 1) % place.images.length;
      document.getElementById('current-slide').src = place.images[currentSlide];
    }, 3000);
  
    document.getElementById('place-name').innerText = place.name;
    document.getElementById('map').innerHTML = `<iframe src="${place.map}" allowfullscreen="" loading="lazy"></iframe>`;
    document.getElementById('weather').innerHTML = `<h3>Weather</h3><p>${place.weather}</p>`;
  }
  
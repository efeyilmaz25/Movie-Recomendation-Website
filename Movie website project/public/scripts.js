document.addEventListener("DOMContentLoaded", function() {
  const movies = [
    {
      title: "Movie 1",
      description: "In the middle of a dense forest stood a grove of ancient pine trees; their towering forms were plunged into darkness beneath the glow of the moon. The air was filled with an eerie silence, broken only occasionally by the rustling of leaves or the hooting of a distant owl...",
      imageUrl: "movie1.jpg"
    },
    {
      title: "Movie 2",
      description: "Shadows were dancing in the labyrinth-like halls of the castle and whispering the secrets of bygone eras. The air was heavy with the smell of damp stone and decay, and a cold wind whispered through the empty corridors, carrying echoes of a forgotten past...",
      imageUrl: "movie2.jpg"
    },
    {
      title: "Movie 3",
      description: "In the heart of a rugged landscape, nestled between two expansive valleys, there stood a stone bridge, a testament to the enduring craftsmanship of ages past. Built from sturdy gray bricks hewn from the very earth upon which it stood, the bridge spanned the chasm below with a quiet strength that seemed to defy the passage of time...",
      imageUrl: "movie3.jpg"
    },
    {
      title: "Movie 4",
      description: "Inside the house, laughter and love filled every corner, as the Thompson family went about their daily lives. Mr. and Mrs. Thompson, with their two children, Emily and Thomas, created a haven where memories were made and dreams took flight....",
      imageUrl: "movie4.jpg"
    },
    {
      title: "Movie 5",
      description: "In the velvet embrace of the night sky, the moon reigned supreme, casting its ethereal glow upon the world below. Its silvery radiance danced across the landscape, turning shadows into shapes and transforming the ordinary into the extraordinary...",
      imageUrl: "movie5.jpg"
    },
    {
      title: "Movie 6",
      description: "In the heart of Paris, where the Eiffel Tower is the symbol of beauty and magnificence, a young girl named Sophie embarked on an adventure she will never forget...",
      imageUrl: "movie6.jpg"
    },
    {
      title: "Movie 7",
      description: "In the Johnson family's quaint suburban home, nestled amid lush greenery and blooming gardens, lived a seemingly innocent resident: a teddy bear named Rosie. Gifted to their daughter Lily on her fifth birthday, Rosie was cherished as a beloved friend; Its soft fur and button eyes offered comfort and solace in both joyful and challenging times. But one fateful night, as the moon cast its silvery glow across the quiet neighborhood, something extraordinary happened: Rosie came to life...",
      imageUrl: "movie7.jpg"
    },
    {
      title: "Movie 8",
      description: "In the heart of a rugged mountain range, where jagged peaks pierced the sky and valleys lay hidden beneath blankets of mist, an orange and white minibus embarked on a journey like no other. Its tires gripped the winding road with determination, the engine humming a steady rhythm as it navigated the treacherous terrain...",
      imageUrl: "movie8.jpg"
    },
    
  ];

  const movieList = document.getElementById("movieList");

  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movieCard");

    const image = document.createElement("img");
    image.src = movie.imageUrl;
    image.alt = movie.title;

    const title = document.createElement("h2");
    title.textContent = movie.title;
    title.classList.add("title");

    const description = document.createElement("p");
    description.textContent = movie.description;
    description.classList.add("description");

    movieCard.appendChild(image);
    movieCard.appendChild(title);
    movieCard.appendChild(description);

    movieList.appendChild(movieCard);
  });
});

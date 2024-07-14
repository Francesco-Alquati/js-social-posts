const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "25-06-2021"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "03-09-2021"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "15-05-2021"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "03-04-2021"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "05-03-2021"
    }
];
// ARRAY CHE CONTIENE I POST CON IL LIKE 
let likedPostIds = [];

// RECUPERO IL CONTAINER DAL DOM
const container = document.getElementById("container");

posts.forEach(post => {

    // aggiungo un immgine di fallback se l'immagine dell'autore non è presente
    const authorImage = post.author.image || 'https://dummyimage.com/150x150/f500b4/ffffff&text=+LF'; 
    
    const postHTML = 
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${authorImage}" alt="${post.author.name}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${post.created}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                </div>
            </div>
        </div>
    </div>`;

    const postElement = document.createElement('div');
    postElement.innerHTML = postHTML;
    container.append(postElement); 
});

// PRENDO TUTTI I LIKE BUTTON
const likeButtons = document.querySelectorAll(".like-button.js-like-button");

likeButtons.forEach(button => {
    button.addEventListener("click", function () {
  
      // prendo l'attributo degli id 
      const postId = parseInt(this.dataset.postid); 
  
      // prendo il contatore dei like
      const likeCounterElement = document.getElementById(`like-counter-${postId}`);
  
      // conto i like
      const currentLikes = parseInt(likeCounterElement.textContent);
      
      // controllo se il pulsante dei like è cliccato
      const isLiked = this.classList.contains("bg-primary")
  
      // Aggiorno i like e aggiungo stile al likebutton poi pusho i post con i like nel nuovo array
      if (isLiked) {
  
          likeCounterElement.textContent = currentLikes - 1;
          this.classList.remove("bg-primary");
          likedPostIds = likedPostIds.filter(id => id !== postId);
      }else {
          
          likeCounterElement.textContent = currentLikes + 1;
          this.classList.add("bg-primary"); 
          likedPostIds.push(postId);
        }
  
      console.log("ID dei post con il like:", likedPostIds); 
  
      
    });
  });
  
  console.log(likedPostIds)
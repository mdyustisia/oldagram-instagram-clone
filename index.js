const postEl = document.getElementById('post-container')

let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        postEl.innerHTML += `
        <div class="user-container">
            <img class="user-avatar" src="${posts[i].avatar}" alt="" />
            <div class="user-info">
              <h4>${posts[i].name}</h4>
              <p>${posts[i].location}</p>
            </div>
          </div>
          <img
            id="${posts[i].username}-post-like"
            class="image-post"
            src="${posts[i].post}"
            alt="Image Post"
          />
          <div class="post-interaction">
            <img id="${posts[i].username}-btn-like" class="post-icon likes-icon" src="images/icon-heart.png" alt="" />
            <img class="post-icon" src="images/icon-comment.png" alt="" />
            <img class="post-icon" src="images/icon-dm.png" alt="" />
          </div>
          <h4 id="${posts[i].username}-likes" class="total-likes">${posts[i].likes} likes</h4>
          <div class="comment-post">
            <h4>${posts[i].username}</h4>
            <p>${posts[i].comment}</p>
          </div>
          <a class="view-comments" href="#">View all comments</a>
        `
    }

}

renderPosts()

let postIdsDOM = []
let likeBtnDOM = []
let likesIdsDOM = []
let likesCheck = []


for(let i = 0; i < posts.length; i++){
    postIdsDOM.push(document.getElementById(`${posts[i].username}-post-like`))
    likesIdsDOM.push(document.getElementById(`${posts[i].username}-likes`))
    likeBtnDOM.push(document.getElementById(`${posts[i].username}-btn-like`))
    likesCheck.push(posts[i].likes)
}

postIdsDOM[0].addEventListener("dblclick", function(){
    increaseLikes(0)
})

postIdsDOM[1].addEventListener("dblclick", function(){
    increaseLikes(1)  
})

postIdsDOM[2].addEventListener("dblclick", function(){
    increaseLikes(2)
})

likeBtnDOM[0].addEventListener("click", function(){
    increaseLikes(0)
})

likeBtnDOM[1].addEventListener("click", function(){
    increaseLikes(1)  
})

likeBtnDOM[2].addEventListener("click", function(){
    increaseLikes(2)
})

function increaseLikes(i) {
    if (posts[i].likes === likesCheck[i]){
        posts[i].likes += 1
        likesIdsDOM[i].innerHTML = `${posts[i].likes} likes`
    } else if (posts[i].likes === likesCheck[i] + 1) {
        posts[i].likes -= 1
        likesIdsDOM[i].innerHTML = `${posts[i].likes} likes`
    }
}

const likesIconHover = document.querySelectorAll('.likes-icon')
const likesIconOut = document.querySelectorAll('.likes-icon')
const likesClicked = document.querySelectorAll('.likes-icon')

likesIconHover.forEach(likesIcon => {
  likesIcon.addEventListener('mouseover', function() {
    this.src="images/icon-heart-loved.png"
  })
})

likesIconOut.forEach(likesIcon => {
  likesIcon.addEventListener('mouseout', function() {
    this.src="images/icon-heart.png"
  })
})

let toggle = true

likesClicked.forEach(likesIcon => {
  likesIcon.addEventListener('click', function() {
    toggle = !true
    if(toggle) {
      likesClicked.src="images/icon-heart.png"
    } else {
      likesClicked.src="images/icon-heart-loved.png"
    }
  })
})




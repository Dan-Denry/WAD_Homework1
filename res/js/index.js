const endPointURL = "https://api.npoint.io/f1b0052ef46dcd1b147d"
console.log("HELLO");
/*fetch(endPointURL).then(response => {
        return response.json();
})
        .then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                        appendPost(data[i]);
                }
        })
        .catch(error => {
                console.error('Error fetching online JSON data:', error);
        });*/
fetch("./posts.json").then(response => {
        return response.json();
})
        .then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                        appendPost(data[i]);
                }
        })
        .catch(error => {
                console.error('Error fetching online JSON data:', error);
        });
function appendPost(post) {

        if (post.image !== null) {
                let addHTML = `<article class="post">
            <div class="post-header">
                <span class="author">${post.author}</span>
                <span class="date">${post.createdAt.split('T')[0]}</span>
            </div>

            <div class="post-content">
                <img src="res/images/me.png" alt="User" class="post-icon">

                <div class="post-body">
                    <p>${post.text}</p>

                    <img src="${post.image}"
                        alt="Photo from my post"
                        class="post-image">
                </div>
            </div>
        </article>`
                document.querySelector(".posts").insertAdjacentHTML('beforeend', addHTML);
        } else {
                let addHTML = `<article class="post">
            <div class="post-header">
                <span class="author">${post.author}</span>
                <span class="date">${post.createdAt.split('T')[0]}</span>
            </div>

            <div class="post-content">
                <img src="res/images/me.png" alt="User" class="post-icon">
                <p>${post.text}</p>
            </div>
        </article>`
                document.querySelector(".posts").insertAdjacentHTML('beforeend', addHTML);
        }


}
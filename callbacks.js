const posts = [
    {title: 'Post One', body: 'This is post one', lastEdited: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', lastEdited: new Date().getTime()}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.lastEdited}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        post.lastEdited = new Date().getTime();
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
createPost({ title: 'Post Four', body: 'This is post four'}, getPosts);
let posts = [
  { title: 'Post One', body: 'This is post one.' },
  { title: 'Post Two', body: 'This is post two.' }
];

function getPosts() {
  posts.map(post => console.log(`${post.title}: ${post.body}`));
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong.');
      }
    }, 2000);
  });
}

createPost({ title: 'Post Three', body: 'This is post three.' })
  .then(getPosts)
  .catch(err => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1500, 'Goodbye'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values));
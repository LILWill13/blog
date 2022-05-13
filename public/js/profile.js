const newPost = async (event) => {
  event.preventDefault();
console.log('red')
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#text').value;

  if (title && text) {
    console.log(title, text);
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {title, text}),
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const deletePost = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('#new-post')
  .addEventListener('submit', newPost);

document
  .querySelector('.delete-post')
  .addEventListener('click', deletePost);

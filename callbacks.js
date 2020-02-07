const posts = [
	{
		title: 'Post One',
		body: 'This is post one'
	},
	{
		title: 'Post Two',
		body: 'This is post Two'
	},
	{
		title: 'Post Three',
		body: 'This is post Three'
	},
	{
		title: 'Post Four',
		body: 'This is post Four'
	},
	{
		title: 'Post Five',
		body: 'This is post Five'
	}
];

function getPosts(){
	setTimeout(() => {
		let output = '';
		posts.forEach((post) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

function createPost(post, callback){
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

createPost({title: 'Post Six', body: 'This is post six'}, getPosts);

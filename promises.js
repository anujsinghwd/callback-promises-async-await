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

function createPost(post){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			const error = false;
			if(!error){
				resolve();
			}else{
				reject('Error: Something went wrong');
			}
		}, 2000);	
	});
}

// createPost({title: 'Post Six', body: 'This is Post Six'})
// 	.then(getPosts)
// 	.catch(err => console.log(err));

// Promise.all
// const Promise_one = Promise.resolve('Hello World!');
// const Promise_two = 10;
// const Promise_three = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 2000, 'GoodBye')
// });

// Async And Await
async function init() {
	await createPost({title: 'Post Six', body: 'This is Post Six'});
	getPosts();
}

init();


// Promise.all([Promise_one, Promise_two, Promise_three])
// 	.then((values) => {
// 		console.log(values);
// 	})
// 	.catch(err => console.log(err));


document.getElementById('fetchData').addEventListener('click', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data)
    document.getElementById('data').innerHTML =  `Task ID: ${data.id} <br> User ID: ${data.userId} <br> Title ${data.title} <br> isCompleted ${data.completed}`;
})
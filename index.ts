import axios from "axios";

interface Todo{
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos/1"
// axios is async
axios.get(url) //receive a promise
  .then(response => {
    const todo = response.data as Todo
    const id = todo.id
    const title = todo.title
    const finished = todo.completed

    console.log(`
    the todo with id: ${id}
    has a title of: ${title}
    is it finished? ${finished}
    `)
})
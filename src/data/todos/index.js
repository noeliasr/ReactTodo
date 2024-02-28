import uuid from "react-native-uuid";
import { AsyncStorage } from "react-native";

const TODOS_KEY = "@MyStore:todos";

// const getTodos = ()  => [
//     {text: "Tarea 1", done: false},
//     {text: "Tarea 2", done: false}, 
//     {text: "Tarea 3", done: false},
//     {text: "Tarea 4", done: true},
//     {text: "Tarea 5", done: false}
// ];

const getTodos = () => [
  newTodo({text: "Tarea 1", done: false}),
  newTodo({text: "Tarea 2", done: false}),
  newTodo({text: "Tarea 3", done: false}),
  newTodo({text: "Tarea 4", done: true}),
  newTodo({text: "Tarea 5", done: false}),
  newTodo({text: "Tarea 6", done: false}),
  newTodo({text: "Tarea 7", done: false}),
  newTodo({text: "Tarea 8", done: true}),
  newTodo({text: "Tarea 9", done: false}),
  newTodo({text: "Tarea 10", done: false}),
  newTodo({text: "Tarea 11", done: false}),
  newTodo({text: "Tarea 12", done: true}),
  newTodo({text: "Tarea 13", done: true}),
  newTodo({text: "Tarea 14", done: true}),
  newTodo({text: "Tarea 15", done: true}),
  newTodo({text: "Tarea 16", done: true}),
  newTodo({text: "Tarea 17", done: true}),
  newTodo({text: "Tarea 18", done: true}),
  newTodo({text: "Tarea 19", done: true}),
  newTodo({text: "Tarea 20", done: true})
];

//nuevo método getTodos
// const getTodos = async () => {
//     let todos = [];
//     try {
//       todos = await AsyncStorage.getItem(TODOS_KEY);
//     } catch (error) {
//       // Error retrieving data
//       console.log(error.message);
//     }
//     return JSON.parse(todos);
// };


//método crear todo
const newTodo = todo => ({
    id: uuid.v4(),
    text: todo.text,
    createdAt: new Date(),
    done: todo.done
});

//función actualizar todo
const updateTodo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.id);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    //saveTodos (newTodoList);
    return newTodoList;
};

//función añadir todo
const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

//función guardar todos
// const saveTodos = async todos => {
//   try {
//     const resp = await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todos));
//   } catch (error) {
//     // Error retrieving data
//     console.log(error.message);
//   }
// };

//funcion eliminar todo
const deleteTodo = (list, todo) => {
  const newTodoList = list.filter(t => t.id !== todo.id);
  //saveTodos(newTodoList);
  return newTodoList;
};

//final export ¡¡siempre!!
export { getTodos, addTodo, updateTodo, deleteTodo };
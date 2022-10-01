import { useReducer } from 'react';

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number };
interface Todo {
  id: number;
  text: string;
}
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};
const initialState: Todo[] = [];
function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline bg-red-500'>Hello world!</h1>
      <div>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </div>
      <input type='text' />
    </div>
  );
}

export default App;

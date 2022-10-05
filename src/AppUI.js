import React from "react";
import { TodoContext } from "./TodoContext/index";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { Modal } from "./modal";
import "./App.css";
import { TodoForm } from "./TodoForm";

function AppUI() {
  const {
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <div className="row">
      <div className="col">
        <TodoSearch />
      </div>
      <div className="col">
        <TodoCounter />

        <TodoList>
          {loading && (
            <p className="aviso">Estamos cargando, no desesperes...</p>
          )}
          {!loading && !searchedTodos.length && (
            <p className="aviso">Crea tu primer todo!!!</p>
          )}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
    </div>
  );
}

export { AppUI };

package de.neuefische.backend.repo;

import de.neuefische.backend.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Repository
public class TodoRepo {

    private List<Todo> todos = new ArrayList<>();

    public List<Todo> getTodos() {
        return todos;
    }

    public Todo addTodo(Todo todo) {
        todo.setId(generateId());
        todos.add(todo);

        return todo;
    }

    public boolean existsById(String id) {
        return todos.stream()
                .anyMatch(todo -> todo.getId().equals(id));
    }

    public Todo updateTodo(Todo todo) {
        Todo foundTodo = findById(todo.getId());
        foundTodo.setDescription(todo.getDescription());
        foundTodo.setStatus(todo.getStatus());

        return foundTodo;
    }

    public Todo findById(String id) {
        for (Todo todo : todos ) {
            if(todo.getId().equals(id)){
                return todo;
            }
        }

        throw new NoSuchElementException("Couldn't find element with id: " + id);
    }

    private String generateId() {
        return UUID.randomUUID().toString();
    }

    public void deleteTodo(String id) {
        Todo foundTodo = findById(id);

        todos.remove(foundTodo);
    }
}

package de.neuefische.backend.repo;

import de.neuefische.backend.model.Todo;
import de.neuefische.backend.service.IdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Repository
public class TodoRepo {

    private final List<Todo> todos = new ArrayList<>();


    public List<Todo> getTodos() {
        return todos;
    }

    public Todo addTodo(Todo todo) {
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

    public void deleteTodo(String id) {
        Todo foundTodo = findById(id);

        todos.remove(foundTodo);
    }

    public void clear() {
        todos.clear();
    }
}

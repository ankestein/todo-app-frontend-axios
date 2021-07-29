package de.neuefische.backend.db;

import de.neuefische.backend.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Repository
public class TodoDb {

    private final List<Todo> todos = new ArrayList<>();

    public List<Todo> getAllTodos() {
        return Collections.unmodifiableList(todos);
    }

    public void addTodo(Todo todo) {
        todos.add(todo);
    }

    public Todo add(Todo todo) {
        todos.add(todo);
        return todo;
    }

    public void clearAll() {
        todos.clear();
    }

    public void remove(Todo todo) {
        todos.remove(todo);
    }

    public Optional<Todo> getTodoById(String id) {
        for (Todo todo : todos) {
            if (todo.getId().equals(id)) {
                return Optional.of(todo);
            }
        }
        return Optional.empty();
    }
}

package de.neuefische.backend.db;

import de.neuefische.backend.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Repository
public class TodoDb {

    private final List<Todo> todoList = new ArrayList<>();

    public List<Todo> getAllTodos() {
        return Collections.unmodifiableList(todoList);
    }

    public void addTodo(Todo todo){
        todoList.add(todo);
    }

    public Todo add(Todo todo) {
        todoList.add(todo);
        return todo;
    }

    public void clearAll() {
        todoList.clear();
    }
}

package de.neuefische.backend.service;

import de.neuefische.backend.db.TodoDb;
import de.neuefische.backend.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoDb todoDb;

    @Autowired
    public TodoService(TodoDb todoDb) {
        this.todoDb = todoDb;
    }

    public List<Todo> getAllTodos() {
        return todoDb.getAllTodos();
    }
}

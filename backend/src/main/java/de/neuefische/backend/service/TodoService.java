package de.neuefische.backend.service;

import de.neuefische.backend.db.TodoDb;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.model.TodoDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoDb todoDb;
    private final IdService idService;

    @Autowired
    public TodoService(TodoDb todoDb, IdService idService) {
        this.todoDb = todoDb;
        this.idService = idService;
    }

    public List<Todo> getAllTodos() {
        return todoDb.getAllTodos();
    }

    public Todo createTodo(TodoDto todoDto) {
        String id = idService.getRandomId();
        Todo todo = new Todo(id, todoDto.getStatus(),todoDto.getDescription());
        return todoDb.add(todo);
    }
}

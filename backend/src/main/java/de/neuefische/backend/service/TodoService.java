package de.neuefische.backend.service;

import de.neuefische.backend.model.Todo;
import de.neuefische.backend.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TodoService {

    private TodoRepo todoRepo;

    @Autowired
    public TodoService(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }

    public List<Todo> getTodos() {
        return todoRepo.getTodos();
    }

    public Todo addTodo(Todo todo) {
        return todoRepo.addTodo(todo);
    }

    public Todo updateTodo(Todo todo) {
        if(todoRepo.existsById(todo.getId())){
            return todoRepo.updateTodo(todo);
        } else{
            throw new NoSuchElementException("Could not update Todo element! Element with id does not exist: " + todo.getId());
        }
    }

    public void deleteTodo(String id) {
        todoRepo.deleteTodo(id);
    }

    public Todo getTodo(String id) {
        return todoRepo.findById(id);
    }
}

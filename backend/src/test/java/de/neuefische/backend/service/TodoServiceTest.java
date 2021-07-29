package de.neuefische.backend.service;

import de.neuefische.backend.db.TodoDb;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.model.TodoDto;
import de.neuefische.backend.model.TodoStatus;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TodoServiceTest {

    @Test
    public void getAllTodos() {
        //Given
        TodoDb todoDb = mock(TodoDb.class);
        IdService idService = mock(IdService.class);
        when(todoDb.getAllTodos()).thenReturn(List.of(
                new Todo("1", TodoStatus.OPEN, "mocked-description")
        ));
        TodoService todoService = new TodoService(todoDb, idService);

        //When
        List<Todo> actual = todoService.getAllTodos();

        //Then
        List<Todo> expected = List.of(new Todo("1", TodoStatus.OPEN, "mocked-description"));
        assertEquals(expected, actual);

    }

    @Test
    public void addTodo() {

        //Given
        IdService idService = mock(IdService.class);
        when(idService.getRandomId()).thenReturn("mocked-id");
        TodoDb todoDb = mock(TodoDb.class);
        Todo todo = new Todo("mocked-id", TodoStatus.OPEN, "mocked-description");
        when(todoDb.add(todo)).thenReturn(todo);
        TodoService todoService = new TodoService(todoDb, idService);
        TodoDto todoDto = new TodoDto(TodoStatus.OPEN, "mocked-description");

        //When
        Todo actual = todoService.createTodo(todoDto);

        //Then
        Todo expected = new Todo("mocked-id", TodoStatus.OPEN, "mocked-description");
        assertEquals(expected, actual);
    }

}
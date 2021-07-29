package de.neuefische.backend.service;

import de.neuefische.backend.db.TodoDb;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.model.TodoStatus;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class TodoServiceTest {

    @Test
    public void getAllTodos() {
        //Given
        TodoDb todoDb = Mockito.mock(TodoDb.class);
        when(todoDb.getAllTodos()).thenReturn(List.of(
                new Todo("1", TodoStatus.OPEN, "mocked-description")
        ));
        TodoService todoService = new TodoService(todoDb);

        //When
        List<Todo> actual = todoService.getAllTodos();

        //Then
        List<Todo> expected = List.of(new Todo("1", TodoStatus.OPEN, "mocked-description"));
        assertEquals(expected, actual);

    }

}
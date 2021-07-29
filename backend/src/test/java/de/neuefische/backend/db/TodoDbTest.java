package de.neuefische.backend.db;

import de.neuefische.backend.model.Todo;
import de.neuefische.backend.model.TodoStatus;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class TodoDbTest {

    @Test
    public void testGetAllTodos(){
        //Given
        TodoDb todoDb = new TodoDb();
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-description"));
        todoDb.addTodo(new Todo("2", TodoStatus.DONE, "done-description"));

        //When
        List<Todo> actual = todoDb.getAllTodos();

        //Then
        List<Todo> expected = List.of(
                new Todo("1", TodoStatus.OPEN, "open-description"),
                new Todo("2", TodoStatus.DONE, "done-description")
                );
        assertEquals(expected, actual);
    }

    @Test
    public void testAddTodo(){
        //Given
        TodoDb todoDb = new TodoDb();

        //When
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-description"));

        //Then
        Todo expected = new Todo("1", TodoStatus.OPEN, "open-description");
        assertTrue(todoDb.getAllTodos().contains(expected));
    }



}
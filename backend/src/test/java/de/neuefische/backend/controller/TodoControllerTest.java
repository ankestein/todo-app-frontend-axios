package de.neuefische.backend.controller;

import de.neuefische.backend.db.TodoDb;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.model.TodoDto;
import de.neuefische.backend.model.TodoStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private TodoDb todoDb;

    @BeforeEach
    public void clearRepository(){
        todoDb.clearAll();
    }

    @Test
    public void testGetAllTodos() {
        //Given
        String url = "http://localhost:" + port + "/api/todo";
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-todo"));
        todoDb.addTodo(new Todo("2", TodoStatus.IN_PROGRESS, "doing-todo"));

        //When
        ResponseEntity<Todo[]> response = restTemplate.getForEntity(url, Todo[].class);

        //Then
        Todo[] expected = {new Todo("1", TodoStatus.OPEN, "open-todo"), new Todo("2", TodoStatus.IN_PROGRESS, "doing-todo")};
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertArrayEquals(expected, response.getBody());
    }

    @Test
    public void addTodo() {
        //Given
        String url = "http://localhost:" + port + "/api/todo";
        TodoDto todoDto = new TodoDto(TodoStatus.OPEN, "write tests");

        //When
        ResponseEntity<Todo> response = restTemplate.postForEntity(url, todoDto, Todo.class);

        //Then
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody().getId());
        assertEquals("write tests", response.getBody().getDescription());
    }

    @Test
    public void deleteTodo(){
        //Given
        String url = "http://localhost:" + port + "/api/todo/1";
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-todo"));
        todoDb.addTodo(new Todo("2", TodoStatus.IN_PROGRESS, "doing-todo"));

        //When
        restTemplate.delete(url);

        //Then
        List<Todo> allTodos = todoDb.getAllTodos();
        assertFalse(allTodos.contains(new Todo("1", TodoStatus.OPEN, "open-todo")));

    }

    @Test
    public void updateTodo(){
        //Given
        String url = "http://localhost:" + port + "/api/todo/1";
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-todo"));
        todoDb.addTodo(new Todo("2", TodoStatus.IN_PROGRESS, "doing-todo"));

        Todo updatedTodo = new Todo("1", TodoStatus.DONE, "done-todo");

        //When
        HttpEntity<Todo> entity = new HttpEntity<>(updatedTodo);
        ResponseEntity<Todo> response = restTemplate.exchange(url, HttpMethod.PUT, entity, Todo.class);

        //Then
        Todo expected = new Todo("1", TodoStatus.DONE, "done-todo");
        List<Todo> allTodos = todoDb.getAllTodos();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expected, response.getBody());
        assertTrue(allTodos.contains(expected));
        assertFalse(allTodos.contains(new Todo("1", TodoStatus.OPEN, "open-todo")));
    }

}
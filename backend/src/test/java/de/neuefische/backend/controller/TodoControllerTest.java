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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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
        String baseUrl = "http://localhost:" + port + "/api/todo";
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-todo"));
        todoDb.addTodo(new Todo("2", TodoStatus.DOING, "doing-todo"));

        //When
        ResponseEntity<Todo[]> response = restTemplate.getForEntity(baseUrl, Todo[].class);

        //Then
        Todo[] expected = {new Todo("1", TodoStatus.OPEN, "open-todo"), new Todo("2", TodoStatus.DOING, "doing-todo")};
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertArrayEquals(expected, response.getBody());
    }

    @Test
    public void addTodo() {
        //Given
        String baseUrl = "http://localhost:" + port + "/api/todo";
        TodoDto todoDto = new TodoDto(TodoStatus.OPEN, "write tests");

        //When
        ResponseEntity<Todo> response = restTemplate.postForEntity(baseUrl, todoDto, Todo.class);

        //Then
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody().getId());
        assertEquals("write tests", response.getBody().getDescription());
    }

}
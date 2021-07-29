package de.neuefische.backend.controller;

import de.neuefische.backend.db.TodoDb;
import de.neuefische.backend.model.Todo;
import de.neuefische.backend.model.TodoStatus;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
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

    @Test
    public void testGetAllTodos() {
        //Given
        String url = "http://localhost:" + port + "/api/todo";
        todoDb.addTodo(new Todo("1", TodoStatus.OPEN, "open-todo"));
        todoDb.addTodo(new Todo("2", TodoStatus.DOING, "doing-todo"));

        //When
        ResponseEntity<Todo[]> actual = restTemplate.getForEntity(url, Todo[].class);

        //Then
        Todo[] expected = {new Todo("1", TodoStatus.OPEN, "open-todo"), new Todo("2", TodoStatus.DOING, "doing-todo")};
        assertArrayEquals(expected, actual.getBody());
    }

}
package de.neuefische.backend.controller;

import de.neuefische.backend.model.Todo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment =
   SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void addTodo() {
        // GIVE
        Todo todo = new Todo(null, "Dinge tun", "OPEN");

        // WHEN
        ResponseEntity<Todo> postResponse = restTemplate.postForEntity("/api/todo", todo, Todo.class);
        Todo actual = postResponse.getBody();

        // THEN
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());
        assertNotNull(actual);
        assertNotNull(actual.getId());
        assertEquals(todo.getDescription(), actual.getDescription());
        assertEquals(todo.getStatus(), actual.getStatus());

        // THEN: check via GET if element was created
        String actualId = actual.getId();
        ResponseEntity<Todo> getResponse = restTemplate.getForEntity("/api/todo/"+actualId, Todo.class);
        Todo persistedTodo = getResponse.getBody();

        assertNotNull(persistedTodo);
        assertEquals(actualId, persistedTodo.getId());
        assertEquals(todo.getDescription(), persistedTodo.getDescription());
        assertEquals(todo.getStatus(), persistedTodo.getStatus());
    }
}

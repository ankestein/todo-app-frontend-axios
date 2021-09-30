package de.neuefische.backend.controller;

import de.neuefische.backend.model.Todo;
import de.neuefische.backend.repo.TodoRepo;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.collection.ArrayMatching.arrayContainingInAnyOrder;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment =
   SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private TodoRepo repository;

    @BeforeEach
    public void clearDb(){
        repository.clear();
    }

    @MockBean
    private IdService idService;

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


        @Test
        public void getTodoItemsShouldReturnItemsFromDb() {
            //GIVEN
            when(idService.generateId()).thenReturn("test-id");
            repository.addTodo(new Todo(null, "sleep", "OPEN"));
            repository.addTodo(new Todo(null, "chill ", "IN_PROGRESS"));

            //WHEN
            ResponseEntity<Todo[]> response = restTemplate.getForEntity("/api/todo", Todo[].class);

            //THEN
            assertThat(response.getStatusCode(), is(HttpStatus.OK));
            assertThat(response.getBody(), arrayContainingInAnyOrder(new Todo("test-id", "sleep", "OPEN"), new Todo("test-id", "chill ", "IN_PROGRESS")));

    }
}

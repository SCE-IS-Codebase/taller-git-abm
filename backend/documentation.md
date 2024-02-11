# API Documentation
## Person Routes
### 1. Get all persons
- Route: GET /persons
- Function: showPersons
- Description: Retrieve a list of all persons.
### 2. Get person by ID
- Route: GET /persons/:id
- Function: showPersonById
- Description: Retrieve a specific person by their ID.
### 3. Create a new person
- Route: POST /persons
- Function: createPerson
- Description: Create a new person.
### 4. Person login
- Route: POST /persons/login
- Function: login
- Description: Login functionality for persons.
### 5. Update person by ID
- Route: PUT /persons/:id
- Function: updatePerson
- Description: Update a specific person by their ID.
### 6. Delete person by ID
- Route: DELETE /persons/:id
- Function: deletePerson
- Description: Delete a specific person by their ID.
## Task Routes
### 1. Get all tasks
- Route: GET /tasks
- Function: showTasks
- Description: Retrieve a list of all tasks.
### 2. Get task by ID
- Route: GET /tasks/:id
- Function: showTaskById
- Description: Retrieve a specific task by its ID.
### 3. Get tasks by person ID
- Route: GET /tasks/person/:id
- Function: showTasksByPersonId
- Description: Retrieve tasks associated with a specific person by their ID.
### 4. Create a new task
- Route: POST /tasks
- Function: createTask
- Description: Create a new task.
### 5. Update task by ID
- Route: PUT /tasks/:id
- Function: updateTask
- Description: Update a specific task by its ID.
### 6. Delete task by ID
- Route: DELETE /tasks/:id
- Function: deleteTask
- Description: Delete a specific task by its ID.
## Tag Routes
### 1. Get all tags
- Route: GET /tags
- Function: showTags
- Description: Retrieve a list of all tags.
### 2. Get tag by ID
- Route: GET /tags/:id
- Function: showTagById
- Description: Retrieve a specific tag by its ID.
### 3. Get tags by person ID
- Route: GET /tags/person/:id
- Function: showTagsByPersonId
- Description: Retrieve tags associated with a specific person by their ID.
### 4. Create a new tag
- Route: POST /tags
- Function: createTag
- Description: Create a new tag.
### 5. Update tag by ID
- Route: PUT /tags/:id
- Function: updateTag
- Description: Update a specific tag by its ID.
### 6. Delete tag by ID
- Route: DELETE /tags/:id
- Function: deleteTag
- Description: Delete a specific tag by its ID.
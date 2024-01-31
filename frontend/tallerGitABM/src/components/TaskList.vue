<template>
    <h2>Tasks</h2>
    <div>
        <form @submit.prevent="edit_mode ? updateTask() : createTask()">
            <label for="due_date">Fecha</label>
            <input type="date" id="due_date" v-model="due_date" />
            <label for="description">Descripción</label>
            <input type="text" id="description" v-model="description" />
            <label for="tag">Tag</label>
            <select id="tag" v-model="tag">
                <option v-for="tag in tags" :key="tag.tag_id" :value="tag.tag_id">
                    {{ tag.tag_name }}
                </option>
            </select>
            <button type="submit" v-if="!edit_mode">Crear</button>
            <button type="submit" v-if="edit_mode">Editar</button>
        </form>
    </div>
    <div>
        <ul>
            <li v-for="task in tasks" :key="task.task_id">
                <b>{{task.task_due_date}}: </b>{{ task.task_description }} <span>#{{ task.tag_name }}</span>
                <button @click="
                    edit_mode = true;
                    due_date = task.task_due_date;
                    description = task.task_description;
                    tag = task.tag_id;
                    editing_task_id = task.task_id
                    ">
                    Editar
                </button>
                <button @click="deleteTask(task.task_id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
import TagService from '@/services/TagService'
export default {
    name: 'TaskList',
    data() {
        return {
            tasks: [],
            tags: [],
            due_date: '',
            description: '',
            tag: '',
            edit_mode: false,
            editing_task_id: null
        }
    },
    created() {
        this.taskService = new TaskService()
        this.tagService = new TagService()

        this.taskService.getAllTasksByUserId().then((response) => {
            this.tasks = response
        })

        this.tagService.getAllTagsByUserId().then((response) => {
            this.tags = response
        })
    },
    methods: {
        createTask() {
            let new_task = { 
                task_due_date: this.due_date,
                task_description: this.description,
                tag_id: this.tag,
                person_id: localStorage.getItem('person_id'),
            }
            this.taskService
                .createTask(new_task)
                .then((response) => {
                    console.log(response)
                    new_task.task_id = response.insertId
                    new_task.tag_name = this.tags.find((tag) => tag.tag_id == new_task.tag_id).tag_name
                    this.tasks.push(new_task)
                })
        },
        updateTask() {
            let updated_task = {
                task_due_date: this.due_date,
                task_description: this.description,
                tag_id: this.tag,
                person_id: localStorage.getItem('person_id')
            }
            this.taskService
                .updateTask(this.editing_task_id,updated_task)
                .then((response) => {
                    console.log(response)
                    let index = this.tasks.findIndex((task) => task.task_id == this.editing_task_id)
                    updated_task.tag_name = this.tags.find((tag) => tag.tag_id == updated_task.tag_id).tag_name
                    this.tasks[index] = updated_task
                    this.edit_mode = false
                })
            //reset input 
            this.due_date = ''
            this.description = ''
            this.tag = ''
        },
        deleteTask(task_id) {
            this.taskService
                .deleteTask(task_id)
                .then((response) => {
                    console.log(response)
                    let index = this.tasks.findIndex((task) => task.task_id == task_id)
                    this.tasks.splice(index, 1)
                })
        }
    }
}
</script>
<template>
    <h2>Tags</h2>
    <div>
        <form @submit.prevent="edit_mode ? updateTag() : createTag" class="mt-4">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" id="name" v-model="name" class="form-control" />
            </div>
        
            <button class="btn btn-light" type="submit" v-if="!edit_mode">Crear</button>
            <button class="btn btn-light" type="submit" v-if="edit_mode">Editar</button>
        </form>
    </div>
    <div class="mt-4">
        <ul class="list-group">
            <li v-for="tag in tags" :key="tag.tag_id" class="list-group-item d-flex justify-content-between align-items-center">
                {{ tag.tag_name }}
                <div>
                <button @click="
                            edit_mode = true;
                            name = tag.tag_name;
                            editing_tag_id = tag.tag_id
                            " class="btn btn-warning btn-sm me-2">
                    Editar
                </button>
                <button @click="deleteTag(tag.tag_id)" class="btn btn-danger btn-sm">
                    Eliminar
                </button>
                </div>
            </li>
        </ul>
    </div>      
</template>
<script>
import TagService from '@/services/TagService.js'
export default {
    name: 'TagList',
    data() {
        return {
            tags: [],
            name: '',
            edit_mode: false,
            editing_tag_id: null
        }
    },
    created() {
        this.loginService = new TagService()

        this.loginService.getAllTagsByUserId().then((response) => {
            this.tags = response
        })
    },
    methods: {
        createTag() {
            let new_tag = { 
                tag_name: this.name,
                person_id: localStorage.getItem('person_id')
            }
            this.loginService
                .createTag(new_tag)
                .then((response) => {
                    console.log(response)
                    new_tag.tag_id = response.insertId
                    this.tags.push(new_tag)
                })
        },
        updateTag() {
            // Remove old tag
            this.tags = this.tags.filter((tag) => tag.tag_id != this.editing_tag_id)
            let new_tag = { 
                tag_name: this.name,
                person_id: localStorage.getItem('person_id')
            }
            this.loginService
                .updateTag(this.editing_tag_id, {
                    tag_name: new_tag.tag_name,
                    person_id: localStorage.getItem('person_id')
                })
                .then((response) => {
                    console.log(response)
                    new_tag.tag_id = this.editing_tag_id
                    this.tags.push(new_tag)
                })
            this.edit_mode = false
        },
        deleteTag(tag_id) {
            this.tags = this.tags.filter((tag) => tag.tag_id != tag_id)
            this.loginService.deleteTag(tag_id).then((response) => {
                console.log(response)
            })
        }
    }
}
</script>

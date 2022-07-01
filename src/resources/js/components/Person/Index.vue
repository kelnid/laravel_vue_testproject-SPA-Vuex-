<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in people">
                <th scope="row">{{ person.id }}</th>
                <td>
                    <router-link :to="{ name: 'person.show', params: {id: person.id} }">{{ person.name }}</router-link>
                </td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td>
                    <router-link class="btn btn-success" :to="{ name: 'person.edit', params: { id: person.id } }">Edit</router-link>
                </td>
                <td>
                    <a @click.prevent="$store.dispatch('deletePerson', person.id)" href="#" class="btn btn-outline-danger">Delete</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    //before Vuex

    // data() {
    //     return {
    //         people: null
    //     }
    // },

    //after
    computed: {
        people() {
            return this.$store.getters.people
        }
    },
    //after
    mounted() {
        this.$store.dispatch('getPeople')
    },

    // methods: {
    //     before Vuex
    //     getPeople() {
    //         axios.get('/api/people')
    //             .then(res => {
    //                 this.people = res.data.data
    //             })
    //     },
    //
    //     before Vuex
    //     deletePerson(id) {
    //         axios.delete(`/api/people/${id}`)
    //             .then(res => {
    //                 this.getPeople()
    //             })
    //     }
    // },

}
</script>

<style scoped>

</style>

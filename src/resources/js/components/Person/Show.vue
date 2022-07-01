<template>
    <div class="w-25" v-if="person">
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Age: {{ person.age }}
        </div>
        <div>
            Job: {{ person.job }}
        </div>
        <router-link class="btn btn-success" :to="{ name: 'person.edit', params: { id: person.id } }">Edit</router-link>
    </div>
</template>

<script>
export default {
    name: "Show",
    //after
    computed: {
        person() {
            return this.$store.getters.person
        }
    },

    //before Vuex

    // data() {
    //     return {
    //         person: null
    //     }
    // },

    //after
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    //before Vuex

    // methods: {
    //     getPerson() {
    //         axios.get(`/api/people/${this.$route.params.id}`)
    //             .then(res => {
    //                 this.person = res.data.data
    //             })
    //     },
    // }


}
</script>

<style scoped>

</style>

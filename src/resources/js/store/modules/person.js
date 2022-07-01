import router from "../../router";

const state = {  //состояния(data)
    person: null,
    people: null,
}

const getters = {
    person: () => state.person,
    people: () => state.people,
}

const mutations = {  //сеттеры,изменение содержимого переменной
    setPerson(state, person) {
        state.person = person
    },
    setPeople(state, people) {
        state.people = people
    }
}

const actions = { //методы
    getPerson({commit, dispatch, state}, id) { //  метод commit вызывает мутацию (отправить)
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },

    getPeople({commit}) {
        axios.get('/api/people')
            .then(res => {
                commit('setPeople', res.data.data)
            })
    },

    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(res => {
                dispatch('getPeople')
            })
    },

    update({}, data) { // {} чтоб Vuex понял,что data является аргументом,который мы прокидываем
        axios.patch(`/api/people/${data.id}`, { name:data.name, age:data.age, job:data.job })
            .then( res => {
                router.push({ name: 'person.show', params: { id: data.id } })
            })
    },
    store({}, data) {
        axios.post('/api/people', { name:data.name, age:data.age, job:data.job })
            .then(res => {
                router.push({ name: 'person.index' }) //редирект через роутер
            })
    },
}

export default {
    state, mutations, getters, actions
}

const STORAGE_KEY = 'todo-vuejs'

export default {
    fecth() {
        return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY
        ) || '[]')
    },

    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(
            items
        ))
    }
}
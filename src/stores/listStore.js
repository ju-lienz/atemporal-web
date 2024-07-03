import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useListStore = defineStore('list', () => {
    const gender = ref({})
    const materials = ref(false)
    const type = ref(false)
    const openList = (list) => {
        if (gender || materials || type) {
            gender.value = false
            materials.value = false
            type.value = false
            return
        }
        list = true

    }

    return { gender, materials, type, openList}
})
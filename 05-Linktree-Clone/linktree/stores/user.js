import {defineStore} from 'pinia'
import axios from "~~/plugins/axios.js";

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        theme_id: '',
        name: '',
        email: '',
        image: '',
        bio: '',
        theme: '',
        colors: '',
        allLinks: '',
        isMobile: '',
        updatedLinkId: '',
        addLinkOverlay: '',
        isPreviewOverlay: false
    }),
    actions: {
        async getToken() {
            await $axios.get('/sanctum/csrf-cookie')
        },
        async login(email, password) {
            await $axios.post('/login', {
                email: email,
                password: password
            })
        },
        async register(name, email, password, confirmPassword) {
            await $axios.post('/register', {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            })
        },
        async getUser() {
            let res = await $axios.get('/api/users')
            this.$state.id = res.data.id
            this.$state.theme_id = res.data.theme_id
            this.$state.name = res.data.name
            this.$state.bio = res.data.bio
            this.$state.image = res.data.image
        },
        async logout() {
            await $axios.post('/logout')
            this.resetState()
        },
        resetState() {
            this.$state.id = ''
            this.$state.theme_id = ''
            this.$state.name = ''
            this.$state.email = ''
            this.$state.image = ''
            this.$state.bio = ''
            this.$state.theme = ''
            this.$state.colors = ''
            this.$state.allLinks = ''
            this.$state.isMobile = ''
            this.$state.updatedLinkId = ''
            this.$state.addLinkOverlay = ''
            this.$state.isPreviewOverlay = ''
        }
    },
    persist: true
})
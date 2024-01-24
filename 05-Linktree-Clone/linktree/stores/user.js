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
    actions: {},
    persist: true
})
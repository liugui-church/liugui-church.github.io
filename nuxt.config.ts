export default defineNuxtConfig({
    ssr: true,
    nitro: {
        prerender: {
            routes: ['/', '/about', '/schedule']
        }
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        download: false,
        useStylesheet: true,
        families: {
            'LXGW+WenKai+TC': [400, 700]
        },
        display: 'swap'
    },
    css: [
        '~/assets/css/main.scss'
    ],
    app: {
        head: {
            title: '六龜基督長老教會',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '六龜教會創立於主後1960年，位於高雄市六龜區，是群山環繞中的美麗教會。' }
            ],
            htmlAttrs: {
                lang: 'zh-TW'
            }
        }
    },
    compatibilityDate: '2024-11-01'
})

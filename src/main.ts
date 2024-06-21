import '@/scss/styles.scss'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import apolloClient from './api/graphql/apollo/apolloClient'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})


app.use(createPinia())
app.use(router)

app.mount('#app')

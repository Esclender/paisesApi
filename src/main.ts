
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'
import apolloClient from './api/graphql/apollo/apolloClient'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})


app.use(router)

app.mount('#app')

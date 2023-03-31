import {createStore} from 'vuex'

export const store = createStore({
    state: {
     
    note:{},
       notes: [
        {
          title: 'Learn Vue 3',
          tags: [{name:'work'}]
        },
        {
          title: 'Finish course',
          tags: [{name:'work'}, {name:'home'}]
        }
      ]
      },
      mutations: {
        setUser (state, note) {
          state.note = note
          console.log(note)
          state.notes.push(note) 
          console.log(state.notes)  
        },
       getHandleRemove(state, index) {
          state.notes.splice(index, 1)
          console.log(index)
        }
      },
      actions: {
        setUser(context, {name, tag}) {
          const t = tag.filter(x => x.isActive == true)
          console.log(t)
           t.forEach(item =>item.isActive = !item.isActive)
          const note = {
            title: name,
            tags: t
           }
           console.log(note)
            context.commit('setUser', note) 
        },
     
        getHandleRemove(context, index) {
         console.log(index)
          context.commit('getHandleRemove', index) 
        }
      },
      getters: {
        getNotesHome(state){
          return state.notes
         },
         getNote(state) {
          return state.note
         },
         getHandleRemove(state) {
         return state.notes
         },
        }
      
       })

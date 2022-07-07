import { createStore } from 'vuex';
import user from './modules/user'
import { getters } from '@/store/getters';
import permission from '@/store/modules/permission';
import tagView from '@/store/modules/tagView';
import subject from '@/store/modules/subject';

export default createStore({
  state: {
    language: 'China'
  },
  getters,
  modules: { user, permission, tagView, subject }
});

/**
 * Created by F1333553 on 2017/11/20.
 */
const ACurl = "http://10.129.4.97:9001";

const state = {
   urls: {
      login: ACurl + "/api/ac/login",
      check_token: ACurl + "/api/ac/check_token",
      logout: ACurl + "/api/ac/logout",
      deleteUser: ACurl + "/api/ac/users/",
      messageUser: ACurl + "/api/ac/staff?user_id=",
      status: ACurl + "/api/ac/status",
      duty: ACurl + "/api/ac/duty",
      maxId: ACurl + "/api/ac/org?parent_id=max",
      patentId: ACurl + "/api/ac/org?parent_id=",
      staff: ACurl + "/api/ac/staff",
      file: ACurl + "/files/file/user_org.xlsx",
      orgfile: ACurl + "/files/file/org.xlsx",
      bulk: ACurl + "/api/ac/bulk_import",
      register: ACurl + "/api/ac/projects",
      check: ACurl + "/api/ac/projects?wait=",
      search: ACurl + "/api/ac/projects?name=",
      update: ACurl + "/api/ac/projects/",
      roleApply: ACurl + "/api/ars/roles?PID=",
      user_role: ACurl + "/api/ars/user_role?PID=",
      applyRole: ACurl + "/api/ars/apply_roles",
      userRole: ACurl + "/api/ars/user_role/",
      newRole: ACurl + "/api/ars/functions?PID=",
      function: ACurl + "/api/ars/functions",
      createRole: ACurl + "/api/ars/roles",
      bulk_add: ACurl + "/api/ars/bulk_add_function",
      checkRole: ACurl + "/api/ars/apply_roles?user_id=",
      updatePass: ACurl + "/api/ac/update_pwd",
      language: ACurl + "/api/ac/languages"
   }
};
const getters = {
   urls(state){
      return state.urls
   }
};
const actions = {};
const mutations = {};
export default {
   state,
   getters,
   actions,
   mutations
}

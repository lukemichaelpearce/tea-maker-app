import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../config'

Vue.use(Vuex)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const options = {
  state: {
    teams: [],
  },
  mutations: {
    /**
     * Set the teams state
     * @param state
     * @param entities
     * @constructor
     */
    SET_TEAMS: (state, { entities }) => {
      state.teams = entities
    },
    /**
     * Add a team to the team state
     * @param state
     * @param entity
     * @constructor
     */
    SET_TEAM: (state, { entity }) => {
      state.teams.push(entity)
    },
    /**
     * Update an entity in the team state
     * @param state
     * @param entity
     * @constructor
     */
    UPDATE_TEAM: (state, { entity }) => {
      const index = state.teams.map(o => o.id).indexOf(entity.id)
      if (index !== -1) {
        state.teams.splice(index, 1, entity)
      }
    },
  },
  getters: {
  },
  actions: {
    /**
     * HTTP request to add a team
     * @param commit
     * @param payload
     * @returns {Promise<any>}
     */
    xhrAddTeam: ({ commit }, payload) => {
      return axios.post(`${config.baseUrl}/team`, payload)
        .then((response) => {
          commit('SET_TEAM', { entity: response.data.team })
        }, (err) => {
          console.log(err)
        })
    },
    /**
     * HTTP request to load the teams
     * @param commit
     * @returns {Promise<any>}
     */
    xhrLoadTeams: ({ commit }) => {
      return axios.get(`${config.baseUrl}/team`)
        .then((response) => {
          commit('SET_TEAMS', { entities: response.data.teams })
        }, (err) => {
          console.log(err)
        })
    },
    /**
     * HTTP request to add a team member to a team
     * @param commit
     * @param teamId
     * @param payload
     * @returns {Promise<any>}
     */
    xhrAddTeamMember: ({ commit }, { teamId, payload }) => {
      return axios.post(`${config.baseUrl}/team/${teamId}/add-member`, payload)
        .then((response) => {
          commit('UPDATE_TEAM', { entity: response.data.team })
        }, (err) => {
          console.log(err)
        })
    },
    /**
     * HTTP request to change the current team member of a team
     * @param commit
     * @param teamId
     * @returns {Promise<any>}
     */
    xhrChangeCurrentTeamMember: ({ commit }, { teamId }) => {
      return axios.put(`${config.baseUrl}/team/${teamId}/change-current-member`)
        .then((response) => {
          commit('UPDATE_TEAM', { entity: response.data.team })
        }, (err) => {
          console.log(err)
        })
    },
  },
}

const store = new Vuex.Store({ ...options })

export default store

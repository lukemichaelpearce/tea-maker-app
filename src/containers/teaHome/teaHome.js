import TeamList from 'components/teamList/teamList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'teaHome',
  data: function () {
    return {
      teamName: null,
      loadingTeam: false,
    }
  },
  methods: {
    ...mapActions([
      'xhrAddTeam',
      'xhrLoadTeams',
    ]),
    addTeam() {
      this.loadingTeam = true;
      this.xhrAddTeam({
        name: this.teamName,
      }).then(() => {
        this.resetAddTeamButton()
      })
    },
    resetAddTeamButton() {
      this.teamName = null;
      this.loadingTeam = false;
    },
  },
  computed: {
    ...mapState([
      'teams',
    ]),
    addTeamDisabled() {
      // disable the 'add team' button if nothing has been entered or if there is a team loading
      return !this.teamName || !this.teamName.trim().length || this.loadingTeam === true || false
    },
  },
  components: {
    TeamList,
  },
  created() {
    // load the team data
    this.xhrLoadTeams()
  },
}

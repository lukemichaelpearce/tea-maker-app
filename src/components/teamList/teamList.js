import { mapActions } from 'vuex'

export default {
  name: 'teamList',
  data() {
    return {
      teamMemberName: null,
      loadingComponent: false,
      loadingAdd: false,
      loadingChange: false,
    }
  },
  props: ['team'],
  methods: {
    ...mapActions([
      'xhrAddTeamMember',
      'xhrChangeCurrentTeamMember',
    ]),
    addTeamMember() {
      this.loadingComponent = true;
      this.loadingAdd = true;

      // Add a team member via the API
      this.xhrAddTeamMember({
        teamId: this.team.id,
        payload: {
          name: this.teamMemberName,
        },
      })
        .then(() => {
          this.resetButtons()
        })
    },
    changeCurrentTeamMember() {
      this.loadingComponent = true;
      this.loadingChange = true;

      // Change the current team member via the API
      this.xhrChangeCurrentTeamMember({
        teamId: this.team.id,
      })
        .then(() => {
          this.resetButtons()
        })
    },
    resetButtons() {
      // reset back to default
      this.teamMemberName = null;
      this.loadingComponent = false;
      this.loadingAdd = false;
      this.loadingChange = false;
    },
    isCurrentTeamMember(memberId) {
      return this.team.currentTeamMemberId === memberId
    },
  },
  computed: {
    addTeamMemberDisabled() {
      // disable the 'add' button if nothing has been entered or if there is a team member loading
      return !this.teamMemberName
        || !this.teamMemberName.trim().length
        || this.loadingComponent === true
        || false
    },
  },
}

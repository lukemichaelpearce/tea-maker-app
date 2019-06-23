<style src="./teamList.css"></style>
<script src="./teamList.js"></script>
<template>
    <div class="column is-one-quarter">
        <div class="card team-card">
            <div class="card-header">
                <span class="card-header-title">{{ team.name }}</span>
            </div>
            <div class="card-content team-card__card-content">
                <ul class="list" v-if="team.teamMembers.length">
                    <li v-for="member in team.teamMembers" class="list-item">
                        <span :class="{'is-active': isCurrentTeamMember(member.id)}">
                            <i class="fa fa-coffee" aria-hidden="true"></i>{{ member.name }}
                        </span>
                    </li>
                </ul>
                <span v-else>There are no team members!<br>Please add one below.</span>
            </div>
            <div class="card-footer team-card__card-footer">
                <div>
                    <div>
                        <input class="input is-full-width is-pulled-left"
                               type="text"
                               placeholder="Enter a new team member"
                               v-model="teamMemberName"
                               :disabled="loadingComponent"
                        />
                        <button class="button is-info is-pulled-right team-card__card-footer__add-button"
                                @click="addTeamMember()"
                                :disabled="addTeamMemberDisabled"
                                :class="{'is-loading': loadingAdd}"
                        >Add</button>
                    </div>
                    <div>
                        <button class="button is-primary is-fullwidth"
                                :disabled="loadingComponent || team.teamMembers.length < 2"
                                @click="changeCurrentTeamMember()"
                                :class="{'is-loading': loadingChange}"
                        >Who's up next?</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

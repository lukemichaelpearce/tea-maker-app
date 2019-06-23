<style src="./teaHome.css"></style>
<script src="./teaHome.js"></script>
<template>
    <div class="section">
        <div class="tea__team__controls">
            <input class="input"
                   type="text"
                   placeholder="Enter a new team name"
                   v-model="teamName"
                   :disabled="loadingTeam"
            />
            <button class="button is-primary"
                    @click="addTeam()"
                    :disabled="addTeamDisabled"
                    :class="{'is-loading': loadingTeam}"
            >Add Team</button>
        </div>
        <div class="tea__teams">
            <div class="columns is-multiline" v-if="teams.length">
                <team-list v-for="team in teams" :team="team"/>
            </div>
        </div>
    </div>
</template>

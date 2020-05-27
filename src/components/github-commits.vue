<template>
    <div>
        <h1>Latest Vue.js Commits</h1>
        <span v-for="(branch, id) in branches" :key="id" class="radio-buttons">
            <input
                type="radio"
                :value="branch"
                :name="branch"
                v-model="currentBranch">
            <label for="branch">{{ branch }}</label>
        </span>
        <div class="selected-radio-buttons">
            vuejs/vue@{{currentBranch}}
        </div>
        <p>{{message}}</p>
        <ul v-for="githubCommit in githubCommits" :key="githubCommit.sha">
            <li>
                <span class="sha">{{ githubCommit.sha.slice(0, 7) }}</span>
                - <span class="message">{{ githubCommit.commit.message | truncate }}</span><br/>
                by <span class="author">{{ githubCommit.commit.author.name }}</span>
                at <span class="commit-date">{{ githubCommit.commit.author.date | formatDate }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { data } from '../shared/data';
    export default {
        name: 'GithubCommits',
        data() {
            return {
               githubCommits: [],
               branches: ["master", "dev"],
               currentBranch: "master",
               message: ""
            }
        },
        async created() {
            await this.loadCommits();
        },
        watch: {
            currentBranch: "loadCommits"
        },
        filters: {
            truncate(v) {
                const newLine = v.indexOf("\n");
                return newLine > 0 ? v.slice(0, newLine) : v;
            },
            formatDate(value) {
                return value.replace("/T|Z/gi", " ");
            }
        },
        methods: {
            async loadCommits() {
                this.githubCommits = [];
                this.message = "Please wait, commits loading";
                this.githubCommits = await data.getCommits(this.currentBranch);
                this.message = ""
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/design/index.scss'
</style>
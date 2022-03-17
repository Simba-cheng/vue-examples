<template>
    <button v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab">
        {{ tab }}
    </button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
</template>

<script>

//     TODO 未完成

    import helloTab from "@/components/childComponents02/tabs/HelloTab.vue";
    import postsTab from "@/components/childComponents02/tabs/PostsTab.vue";
    import archiveTab from "@/components/childComponents02/tabs/ArchiveTab.vue";

    export default {
        name: "dynamicComponent",
        components: {
            helloTab,
            postsTab,
            archiveTab
        }
    }
</script>

<style scoped>

</style>

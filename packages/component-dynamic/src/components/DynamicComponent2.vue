<template>
    <div id="dynamic-component-demo" class="demo">
        <button v-for="tab in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab">
            {{ tab }}
        </button>

        <component v-bind:is="currentTabComponent" class="tab"></component>
        <!--<component :is="currentTabComponent"></component>-->

    </div>
</template>

<script>

    import archiveTab from "@/components/tabs/ArchiveTab.vue";
    import helloTab from "@/components/tabs/HelloTab.vue";
    import postsTab from "@/components/tabs/PostsTab.vue";

    export default {
        name: "dynamicComponent2",
        computed: {
            currentTabComponent() {
                return this.currentTab;
            },
        },
        components: {
            archiveTab,
            helloTab,
            postsTab
        },
        data() {
            return {
                currentTab: 'helloTab',
                tabs: ['archiveTab', 'helloTab', 'postsTab']
            }
        },
    }
</script>

<style>
    .demo {
        font-family: sans-serif;
        border: 1px solid #eee;
        border-radius: 2px;
        padding: 20px 30px;
        margin-top: 1em;
        margin-bottom: 40px;
        user-select: none;
        overflow-x: auto;
    }

    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }

    .tab-button:hover {
        background: #e0e0e0;
    }

    .tab-button.active {
        background: #e0e0e0;
    }

    .demo-tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>

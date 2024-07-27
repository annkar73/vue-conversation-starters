import { ref } from 'vue';
import { starters } from '@/data/starters';
import headImage from '@/assets/images/head-927180_640.jpg';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const currentStarter = ref(starters[0]);
const showDescription = ref(true);
const getRandomStarter = () => {
    const randomIndex = Math.floor(Math.random() * starters.length);
    currentStarter.value = starters[randomIndex];
};
const toggleDescription = () => {
    showDescription.value = !showDescription.value;
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("conversation-starter") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    if (__VLS_ctx.showDescription) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("description") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.headImage)), alt: ("People talking"), ...{ class: ("description-image") }, });
        // @ts-ignore
        [showDescription, headImage,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleDescription) }, ...{ class: ("toggle-btn") }, });
        // @ts-ignore
        [toggleDescription,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("game-face") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.getRandomStarter) }, ...{ class: ("random-btn") }, });
        // @ts-ignore
        [getRandomStarter,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("textarea-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
        (__VLS_ctx.currentStarter);
        // @ts-ignore
        [currentStarter,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['conversation-starter'];
        __VLS_styleScopedClasses['header-container'];
        __VLS_styleScopedClasses['description'];
        __VLS_styleScopedClasses['description-image'];
        __VLS_styleScopedClasses['toggle-btn'];
        __VLS_styleScopedClasses['game-face'];
        __VLS_styleScopedClasses['random-btn'];
        __VLS_styleScopedClasses['textarea-container'];
        __VLS_styleScopedClasses['container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                headImage: headImage,
                currentStarter: currentStarter,
                showDescription: showDescription,
                getRandomStarter: getRandomStarter,
                toggleDescription: toggleDescription,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=ConversationStarters.vue.js.map
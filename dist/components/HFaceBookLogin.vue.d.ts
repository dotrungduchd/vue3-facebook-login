declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {
    $props: {
        readonly appId?: string | undefined;
        readonly version?: string | undefined;
        readonly scope?: string | undefined;
        readonly fields?: string | undefined;
    };
    $emit: (event: "onSuccess" | "onFailure", ...args: any[]) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {
        initFBLogin: () => Promise<void>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});

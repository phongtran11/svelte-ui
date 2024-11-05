import { type VariantProps } from 'tailwind-variants';
import Root from './toggle.svelte';
export declare const toggleVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, undefined, "hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, {
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}>, {
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, undefined, "hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, {
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}>, unknown, unknown, undefined>>;
export type Variant = VariantProps<typeof toggleVariants>['variant'];
export type Size = VariantProps<typeof toggleVariants>['size'];
export { Root, Root as Toggle };

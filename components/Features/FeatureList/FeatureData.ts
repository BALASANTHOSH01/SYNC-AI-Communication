import { BellIcon, ChatIcon } from "@/components/ReusableComponents/IconList";

const anchorIdentityLayer = {
    title: 'Anchor Identity Layer',
    items: [
        { icon: BellIcon, text: 'Sync ID' },
    ],
};

const ingressionLayer = {
    title: 'Ingression Layer',
    items: [
        { header: "dApps", icon: BellIcon, text: 'Push Notifications' },
        { header: "User", icon: ChatIcon, text: 'Chat and Payment Functions' },
    ],
};

const dispatchLayer = {
    title: 'Dispatch Layer',
    items: [
        { icon: BellIcon, text: 'Notifications' },
        { icon: ChatIcon, text: 'Chat Functions Outputs' },
        { icon: BellIcon, text: 'Solved Queries' },
    ],
};

const queryingLayer = {
    title: 'Querying Layer',
    items: [
        { icon: BellIcon, text: 'Smart Contracts' },
        { icon: BellIcon, text: 'Raw Node Data' },
        { icon: BellIcon, text: 'Catalyst Database' },
    ],
};

export { anchorIdentityLayer, ingressionLayer, dispatchLayer, queryingLayer };

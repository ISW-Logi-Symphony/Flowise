// assets
import { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconMenu2, IconSettings } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconMenu2, IconSettings }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'expandList',
            type: 'item',
            icon: icons.IconMenu2,
            breadcrumbs: true
        },
        {
            id: 'chatflows',
            // title: 'Chatflows',
            type: 'item',
            url: '/chatflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            // title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            // title: 'Tools',
            type: 'item',
            url: '/tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            // title: 'Credentials',
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        // {
        //     id: 'apikey',
        //     // title: 'API Keys',
        //     type: 'item',
        //     url: '/apikey',
        //     icon: icons.IconKey,
        //     breadcrumbs: true
        // },
        {
            id: 'settings',
            type: 'item',
            icon: icons.IconSettings,
            breadcrumbs: true
        }
    ]
}
export default dashboard

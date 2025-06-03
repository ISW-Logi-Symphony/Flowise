// assets
import {
    IconList,
    IconUsersGroup,
    IconListCheck,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconSettings,
    IconVariable,
    IconFiles,
    IconTestPipe,
    IconMicroscope,
    IconDatabase,
    IconChartHistogram,
    IconUserEdit,
    IconFileUpload,
    IconClipboardList,
    IconStack2,
    IconUsers,
    IconLockCheck,
    IconFileDatabase,
    IconShieldLock,
    IconMenu2,
    IconHome
} from '@tabler/icons-react'

// constant
const icons = {
    IconUsersGroup,
    IconListCheck,
    IconHierarchy,
    IconBuildingStore,
    IconList,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconSettings,
    IconVariable,
    IconFiles,
    IconTestPipe,
    IconMicroscope,
    IconDatabase,
    IconUserEdit,
    IconChartHistogram,
    IconFileUpload,
    IconClipboardList,
    IconStack2,
    IconUsers,
    IconLockCheck,
    IconFileDatabase,
    IconShieldLock,
    IconMenu2,
    IconHome
}

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'primary',
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
                    id: 'home',
                    title: 'Home',
                    type: 'item',
                    url: '/',
                    icon: icons.IconHome,
                    external: true
                },
                {
                    id: 'chatflows',
                    title: 'Chatflows',
                    type: 'item',
                    url: '/chatflows',
                    icon: icons.IconHierarchy,
                    breadcrumbs: true,
                    permission: 'chatflows:view'
                },
                {
                    id: 'agentflows',
                    title: 'Agentflows',
                    type: 'item',
                    url: '/agentflows',
                    icon: icons.IconUsersGroup,
                    breadcrumbs: true,
                    permission: 'agentflows:view'
                },
                {
                    id: 'executions',
                    title: 'Executions',
                    type: 'item',
                    url: '/executions',
                    icon: icons.IconListCheck,
                    breadcrumbs: true,
                    permission: 'executions:view'
                },
                {
                    id: 'assistants',
                    title: 'Assistants',
                    type: 'item',
                    url: '/assistants',
                    icon: icons.IconRobot,
                    breadcrumbs: true,
                    permission: 'assistants:view'
                },
                {
                    id: 'marketplaces',
                    title: 'Marketplaces',
                    type: 'item',
                    url: '/marketplaces',
                    icon: icons.IconBuildingStore,
                    breadcrumbs: true,
                    permission: 'templates:marketplace,templates:custom'
                },
                {
                    id: 'tools',
                    title: 'Tools',
                    type: 'item',
                    url: '/tools',
                    icon: icons.IconTool,
                    breadcrumbs: true,
                    permission: 'tools:view'
                },
                {
                    id: 'credentials',
                    title: 'Credentials',
                    type: 'item',
                    url: '/credentials',
                    icon: icons.IconLock,
                    breadcrumbs: true,
                    permission: 'credentials:view'
                },
                {
                    id: 'variables',
                    title: 'Variables',
                    type: 'item',
                    url: '/variables',
                    icon: icons.IconVariable,
                    breadcrumbs: true,
                    permission: 'variables:view'
                },
                {
                    id: 'apikey',
                    title: 'API Keys',
                    type: 'item',
                    url: '/apikey',
                    icon: icons.IconKey,
                    breadcrumbs: true,
                    permission: 'apikeys:view'
                },
                {
                    id: 'document-stores',
                    title: 'Document Stores',
                    type: 'item',
                    url: '/document-stores',
                    icon: icons.IconFiles,
                    breadcrumbs: true,
                    permission: 'documentStores:view'
                }
            ]
        },
        {
            id: 'management',
            title: 'User & Workspace Management',
            type: 'group',
            children: [
                {
                    id: 'sso',
                    title: 'SSO Config',
                    type: 'item',
                    url: '/sso-config',
                    icon: icons.IconShieldLock,
                    breadcrumbs: true,
                    display: 'feat:sso-config',
                    permission: 'sso:manage'
                },
                {
                    id: 'roles',
                    title: 'Roles',
                    type: 'item',
                    url: '/roles',
                    icon: icons.IconLockCheck,
                    breadcrumbs: true,
                    display: 'feat:roles',
                    permission: 'roles:manage'
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/users',
                    icon: icons.IconUsers,
                    breadcrumbs: true,
                    display: 'feat:users',
                    permission: 'users:manage'
                },
                {
                    id: 'workspaces',
                    title: 'Workspaces',
                    type: 'item',
                    url: '/workspaces',
                    icon: icons.IconStack2,
                    breadcrumbs: true,
                    display: 'feat:workspaces',
                    permission: 'workspace:view'
                },
                {
                    id: 'login-activity',
                    title: 'Login Activity',
                    type: 'item',
                    url: '/login-activity',
                    icon: icons.IconClipboardList,
                    breadcrumbs: true,
                    display: 'feat:login-activity',
                    permission: 'loginActivity:view'
                }
            ]
        },
        {
            id: 'others',
            title: 'Others',
            type: 'group',
            children: [
                {
                    id: 'logs',
                    title: 'Logs',
                    type: 'item',
                    url: '/logs',
                    icon: icons.IconList,
                    breadcrumbs: true,
                    display: 'feat:logs',
                    permission: 'logs:view'
                },
                // {
                //     id: 'files',
                //     title: 'Files',
                //     type: 'item',
                //     url: '/files',
                //     icon: icons.IconFileDatabase,
                //     breadcrumbs: true,
                //     display: 'feat:files',
                // },
                {
                    id: 'account',
                    title: 'Account Settings',
                    type: 'item',
                    url: '/account',
                    icon: icons.IconSettings,
                    breadcrumbs: true,
                    display: 'feat:account'
                },
                {
                    id: 'settings',
                    title: 'Settings',
                    type: 'item',
                    icon: icons.IconSettings,
                    breadcrumbs: true
                }
            ]
        }
    ]
}
export default dashboard

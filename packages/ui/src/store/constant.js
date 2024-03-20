// constant
export const gridSpacing = 3
export const drawerWidth = 260
export const drawerIconWidth = 60
export const appDrawerWidth = 320
export const headerHeight = 80
export const maxScroll = 100000
export const subpath = process.env.PUBLIC_URL ?? import.meta.env.VITE_SUBPATH ?? '/aichatbot'
export const coreURL =
    import.meta.env.PROD === true
        ? window.location.origin
        : window.location.origin.replace(`:${import.meta.env.VITE_PORT ?? '8080'}`, ':3000')
export const baseURL = coreURL + subpath
export const FLOWISE_CREDENTIAL_ID = 'FLOWISE_CREDENTIAL_ID'
export const REDACTED_CREDENTIAL_VALUE = '_FLOWISE_BLANK_07167752-1a71-43b1-bf8f-4f32252165db'

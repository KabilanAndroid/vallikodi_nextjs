
const configAppURL: Record<'local' |'live' |'2020_local' |'2020_live'|'gem_local' |'gem_live', string> = {
    'local': 'http://172.21.4.102/vallikodi/api',
    'live': 'https://vallikodivanniarmatrimonial.in/api',

    '2020_local': 'http://172.21.4.102/vallikodi_2020/api',
    '2020_live': 'https://2020matrimony.com/api',

    'gem_local': 'http://172.21.4.102/vallikodi_gem/api',
    'gem_live': 'https://srigovernmentemployedmatrimony.com/api'
}

export const APP_BASE_URL = configAppURL['local'] 
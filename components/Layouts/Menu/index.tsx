import { DashboardOutlined, SelectOutlined, AuditOutlined, CommentOutlined, CloudDownloadOutlined, SettingOutlined, ProfileOutlined, ArrowsAltOutlined } from '@ant-design/icons';

export const ClientSiderMenuItems = [
    {
        key: 'Dashboard',
        title: 'Dashboard',
        items: [
            {
                text: 'My Account',
                link: '/profile',
                icon: <DashboardOutlined />,
            },
            {
                text: 'My Orders',
                link: '/profile/orders',
                icon: <SelectOutlined />,
            },
            {
                text: 'My Favourites',
                link: '/profile/favourites',
                icon: <AuditOutlined />,
            },
            {
                text: 'My Reviews',
                link: '/profile/reviews',
                icon: <CommentOutlined />,
            },
            {
                text: 'My Vouchers',
                link: '/profile/vouchers',
                icon: <CloudDownloadOutlined />,
            },
        ],
    },
    {
        key: 'options',
        title: 'Options',
        items: [
            {
                text: 'My Profile',
                link: '/profile',
                icon: <ProfileOutlined />,
            },
            {
                text: 'My Account',
                link: '/profile/addresses',
                icon: <SettingOutlined />,
            },
        ],
    },
];

export const AdminSiderMenuItems = [
    {
        key: 'Dashboard',
        title: 'Dashboard',
        items: [
            {
                text: 'Home',
                link: '/account',
                icon: <DashboardOutlined />,
            },
            {
                text: 'Orders',
                link: '/account/orders',
                icon: <SelectOutlined />,
            },
            {
                text: 'Returns',
                link: '/account/returns',
                icon: <ArrowsAltOutlined />,
            },
        ],
    },
    {
        key: 'options',
        title: 'Options',
        items: [
            {
                text: 'Settings',
                link: '/account/settings',
                icon: <ProfileOutlined />,
            },
        ],
    },
];

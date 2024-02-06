import { Icon } from '~/components/Icon';
import { path } from '~/configs';

const items = [
    // {
    //     icon: <Icon.AddIcon />,
    //     title: 'Add task',
    // },
    // {
    //     icon: <Icon.InboxIcon />,
    //     title: 'Inbox',
    // },
    {
        icon: <Icon.TodayIcon />,
        title: 'Today',
        to: path.today,
    },
    {
        icon: <Icon.UpcomingIcon />,
        title: 'Upcoming',
        to: path.upcoming,
    },
    // {
    //     icon: <Icon.FiltersIcon />,
    //     title: 'Filters & Labels',
    // },
    {
        icon: <Icon.CompletedIcon />,
        title: 'Completed',
        to: path.completed,
    },
];

export default items;

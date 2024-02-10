const convertCreatedAt = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const hours = createdAtDate.getHours();
    const mins = createdAtDate.getMinutes();

    const formattedTime = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = mins < 10 ? '0' + mins : mins;

    const todayDate = new Date();
    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const isToday = todayDate.toDateString() === createdAtDate.toDateString();
    const isYesterday = yesterdayDate.toDateString() === createdAtDate.toDateString();
    let formattedDate;

    if (isToday) {
        formattedDate = 'Today';
    } else if (isYesterday) {
        formattedDate = 'Yesterday';
    } else {
        formattedDate = createdAtDate.toLocaleDateString();
    }

    const formattedCreatedAt = `${formattedDate} ${formattedHours}:${formattedMinutes} ${formattedTime}`;
    return formattedCreatedAt;
};

const formatDate = (ts) => {
    const date = new Date(ts);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const convertCompletedAt = (ts) => {
    return new Date(ts).toISOString().substr(11, 5);
};

export { convertCreatedAt, formatDate, convertCompletedAt };

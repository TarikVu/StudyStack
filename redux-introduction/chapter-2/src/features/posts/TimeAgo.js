import { parseISO, formatDistanceToNow } from 'date-fns';


// Our script to display time ago, utilizing the library 'date-fns'

// Timeago Expects a timestamp.
const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo
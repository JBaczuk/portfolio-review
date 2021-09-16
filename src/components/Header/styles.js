import { makeStyles } from '@material-ui/core';

export default((theme) => ({
    root: {
        flexGrow: 1,
    },
    links: {
        flexGrow: 0,
        justifyContent: 'space-between',
    },
    menuButton: {
        paddingRight: 2
    },
    title: {
        margin: '10px'
    }
}))
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));



export default function IconBreadcrumbs({ linkOne, linkTwo }) {
    const classes = useStyles();
    return (

        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
                Home
            </Link>
            {linkTwo ? <Link
                color="inherit"
                to={linkOne.path}
                className={classes.link}>
                <WhatshotIcon className={classes.icon} />
                {linkOne.name}</Link>
                :
                <Typography color="textPrimary" className={classes.link}>
                    <WhatshotIcon className={classes.icon} />
                    {linkOne.name}
                </Typography>


            }
            {linkTwo && <Typography color="textPrimary" className={classes.link}>
                <GrainIcon className={classes.icon} />
                {linkTwo}
            </Typography>}
        </Breadcrumbs>
    );
}

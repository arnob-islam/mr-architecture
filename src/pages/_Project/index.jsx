import React, { useReducer } from 'react'
import Data from './Data';
import SectionTitle from '../SectionTitle';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    appStick: {
        background: 'white',
        boxShadow: 'none'
    }
}));

const reducer = (state, action) => {

    if (action.type === 'all') {
        return Data
    }
    const newItem = Data.filter(e => {
        return (e.category === action.type)
    })
    return newItem


}

const App = () => {
    const ButtonsText = ['all', ...new Set(Data.map(cata => cata.category))]
    const [PhotoDate, dispatch] = useReducer(reducer, Data)

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className='OurProject_sector'>
            <SectionTitle title='projects' />
            <div className="container-fluid">
                <div className="row justify-content-center mb-5">
                    <div className="button-container col-6">
                        <div className={classes.root}>
                            <AppBar position="static" color="default" className={classes.appStick}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                >
                                    {ButtonsText.map((button, index) => {
                                        return (
                                            <Tab label={button} onClick={() => (dispatch({ type: button }))} key={index} {...a11yProps(0)} />
                                        )
                                    })}

                                </Tabs>
                            </AppBar>

                        </div>
                        {/* <Paper className={classes.root}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                variant="fullWidth"
                            >
                                {ButtonsText.map((button, index) => {
                                    return (
                                        <Tab label={button} onClick={() => (dispatch({ type: button }))} key={index} />
                                    )
                                })}

        
                            </Tabs>
                        </Paper> */}

                    </div>
                </div>
                <div className="body-wrapper row"  >
                    {PhotoDate.map(items => {

                        return (
                            <div className="__wraaper" key={items.id}>
                                <Link to={`/show/project/single/${items.id}`}>
                                    <img src={items.img} alt="" />
                                </Link>
                            </div>
                        )
                    })}
                </div>

            </div>


        </section>
    )
}





export default App

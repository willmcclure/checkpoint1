// import state
import { useEffect, useState } from "react"

// 12.5pts - Uses Components: Dashboard.js with Card, CardContent and CardActions to create the Dashboard of the app.
import { Card, CardActions, CardContent, Container, MenuItem, Select, Slider, Switch, Typography } from '@material-ui/core'

// import function to allow for custom style creation
import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles( theme => ({
    main: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1024px'
    },
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    card: {
        maxWidth: '275px',
        marginTop: theme.spacing(2)
    },
}))

const Dashboard = () => {
    // 12.5pts - Uses state.online with the Switch Component to show the user if they're online or not.
    const [isOnline, setOnline] = useState(true)
    const [volumeLevel, setVolumeLevel] = useState(30)
    const [soundQuality, setSoundQuality] = useState('2')
    const [systemNotifications, setSystemNotifications] = useState([])

    // defined warning notifications
    const notifications = {
        // 12.5pts - Uses state.notifications to message Your application is offline. You won't be able to share or stream music to other devices. if switch is turned offline.
        'isOnline': "Your application is offline. You won't be able to share or stream music to other devices. if switch is turned offline.",

        // 12.5pts - Uses state.notifications to message Listening to music at a high volume could cause long-term hearing loss. if volume goes above 80.
        'volumeLevel': "Listening to music at a high volume could cause long-term hearing loss. if volume goes above 80.",

        // 12.5pts - Uses state.notifications to message Music quality is degraded. Increase quality if your connection allows it. if quality is turned to "Low".
        'soundQuality': "Music quality is degraded. Increase quality if your connection allows it. if quality is turned to Low"
    }

    useEffect(() =>{
        // does the systemNotifications already contain the messages

        let onlineIndex = systemNotifications.indexOf(notifications.isOnline)
        let volumeLevelIndex = systemNotifications.indexOf(notifications.volumeLevel)
        let soundQualityIndex = systemNotifications.indexOf(notifications.soundQuality)

        // 12.5pts - Uses state.notifications to message Your application is offline. You won't be able to share or stream music to other devices. if switch is turned offline.
        if (!isOnline){
            if (onlineIndex === -1) {
                setSystemNotifications([...systemNotifications, notifications.isOnline])
            } 
        } else {
            if (onlineIndex > -1) {
                let newMessage = systemNotifications.filter( item => item !== notifications.isOnline)
                setSystemNotifications(newMessage)
            }
        }
        // 12.5pts - Uses state.notifications to message Listening to music at a high volume could cause long-term hearing loss. if volume goes above 80.
        if(volumeLevel >= 80) {
            if(volumeLevelIndex === -1){
                setSystemNotifications([...systemNotifications, notifications.volumeLevel])
            } else {
                if (volumeLevelIndex > -1) {
                    let newMessage = systemNotifications.filter( item => item !== notifications.volumeLevel)
                    setSystemNotifications(newMessage)
                }
            }
        }

        if (soundQuality === 1) {
            if(soundQualityIndex === -1) {
                setSystemNotifications([...systemNotifications, notifications.soundQuality])
            }
        } else {
            if (soundQualityIndex > -1) {
                let newMessage = systemNotifications.filter( item => item !== notifications.soundQuality)
                setSystemNotifications(newMessage)
            }
        }
    },[isOnline, volumeLevel, soundQuality])

    const switchHandler = (event) => {
        event.target.checked ? setOnline(true) : setOnline(false)
    };

    const switchVolume = (event, newValue) => {
        setVolumeLevel(newValue);
      };

    const switchQuality = (e) => {
        setSoundQuality(e.target.value);
    };

    const classes = style()

    return (
        <Container className={classes.main}>
        <Typography variant='h3' gutterBottom>
            Welcome User!
        </Typography>
        <Container className={classes.box}>
            {/****** 12.5pts - Uses state.online with the Switch Component to show the user if they're online or not. ***/}
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h5' gutterBottom>Online Mode</Typography>
                    <Typography variant='body2'>Is this application connected to the internet?</Typography>
                </CardContent>
                <CardActions>
                    <Switch checked={isOnline} onChange={switchHandler} />
                </CardActions>
            </Card>
            {/****** 12.5pts - Uses Slider Component to adjust volume in  increments of 10, 0 - 100.***/}
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h5' gutterBottom>Master Volume</Typography>
                    <Typography variant='body2'>Overrides all other sound settings in this application</Typography>
                </CardContent>
                <CardActions>
                    <Slider
                    value={volumeLevel}
                    valueLabelDisplay='auto'
                    step={10}
                    marks
                    min={0}
                    max={100}
                    onChange={switchVolume}
                    />
                </CardActions>
            </Card>
            {/****** 12.5pts - Uses the Select Component to allow the user to adjust the sound quality, 1, 2, 3 to represent "Low", "Normal" or "High" quality. ***/}
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h5' gutterBottom>Sound Quality</Typography>
                    <Typography variant='body2'>Manually control the music quality in the event of poor connection</Typography>
                </CardContent>
                <CardActions>
                    <Select value={soundQuality} onChange={switchQuality} fullWidth>
                        <MenuItem value='1'>Low</MenuItem>
                        <MenuItem value='2'>Normal</MenuItem>
                        <MenuItem value='3'>High</MenuItem>
                    </Select>
                </CardActions>
            </Card>

            <div>
                <h3>System Notifications:</h3>
                <ul>
                    {systemNotifications.map( (message, index) => {
                        return <li className='systemNotifications' key={index}>{message}</li>
                    })}
                </ul>
            </div>

        </Container>
        </Container>
    )
}

export default Dashboard
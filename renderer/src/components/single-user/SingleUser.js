import React from 'react';
import { Link } from 'react-router-dom'
import './SingleUser.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import Location from '@material-ui/icons/LocationOn';
import People from '@material-ui/icons/People';
import Person from '@material-ui/icons/Person';
import Comment from '@material-ui/icons/Comment';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Cake from '@material-ui/icons/Cake';
import Language from '@material-ui/icons/Language';
import TrendingUp from '@material-ui/icons/TrendingUp';

const SingleUser = ({ loading, user }) => {
  console.log(user);
  let { location } = user;
  user.location ? location = user.location : location = user.country;

  const numberWithSpace = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div>
      {loading ? (<p>Loading data...</p>) : (
        <div>
          <Link style={{ marginLeft: 20, textDecoration: "none" }} to="/">
            <Button><KeyboardArrowLeft style={{ verticalAlign: "middle"}} /> Retour</Button>
          </Link>
        <div className="text-center">
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="subtitle1">@{user.username}</Typography>
          {location && (
            <Chip avatar={<Avatar><Location /></Avatar>} style={{ marginTop: 5 }} label={location} />
          )}
        </div>
        <div className="grid-container">
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Paper>
                <Typography className="text-center" variant="h6">STATISTIQUES</Typography>
                <List>
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><People style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Nombre de Followers : ${numberWithSpace(user.followers.count)}`} />
                  </ListItem>
                  <Divider light={true} />
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><TrendingUp style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Tendance : ${user.followers.growth}`} />
                  </ListItem>
                  <Divider light={true} />
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><Comment style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Moyenne de Commentaires : ${numberWithSpace(user.comments)}`} />
                  </ListItem>
                  <Divider light={true} />
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><ThumbUp style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Nombre de Likes : ${numberWithSpace(user.likes)}`} />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Typography className="text-center" variant="h6">AUDIENCE INFOS</Typography>
                <List>
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><Person style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Genre dominant : ${user.audience.gender}`} />
                  </ListItem>
                  <Divider light={true} />
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><Cake style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Age moyen : ${user.audience.age_range} ans`} />
                  </ListItem>
                  <Divider light={true} />
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><Language style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Langue : ${user.audience.language}`} />
                  </ListItem>
                  <Divider light={true} />
                  <ListItem>
                    <Avatar style={{ height: 25, width: 25 }}><Location style={{ height: 15, width: 15 }} /></Avatar>
                    <ListItemText primary={`Localisation : ${user.audience.location}`} />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <div style={{ width: "95%", marginLeft: "5%" }}>
                  <Typography style={{ marginBottom: 10 }} className="text-center" variant="h6">AUDIENCE INTERETS</Typography>
                  <Typography variant="subtitle1">1 - {user.audience.interests.title[0]} - {user.audience.interests.value[0]}</Typography>
                  <LinearProgress style={{ height: 10 }} variant="determinate" value={parseInt(user.audience.interests.value[0])} />
                  <Typography variant="subtitle1">2 - {user.audience.interests.title[1]} - {user.audience.interests.value[1]}</Typography>
                  <LinearProgress style={{ height: 10 }} variant="determinate" value={parseInt(user.audience.interests.value[1])} />
                  <Typography variant="subtitle1">3 - {user.audience.interests.title[2]} - {user.audience.interests.value[2]}</Typography>
                  <LinearProgress style={{ height: 10 }} variant="determinate" value={parseInt(user.audience.interests.value[2])} />
                </div>
                <div style={{ height: 20 }}></div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        </div>
      )}
    </div>
  )
}



export default SingleUser;
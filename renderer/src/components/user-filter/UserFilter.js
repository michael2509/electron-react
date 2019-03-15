import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'rc-slider/assets/index.css';
import { Range, createSliderWithTooltip } from 'rc-slider';

const SliderRange = createSliderWithTooltip(Range);

class UserFilter extends Component {
  state = {
    open: false,
    followersRange: [0, 1000000],
    commentsRange: [0, 2000],
    country: 'All'
  };

  handleClickOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleCountryChange = event => this.setState({ [event.target.name]: event.target.value });

  startResearch = () => {
    const { country, followersRange, commentsRange } = this.state;
    const conditions = {
      country: country,
      followers_range: {
        min_value: followersRange[0],
        max_value: followersRange[1]
      },
      comments_range: {
        min_value: commentsRange[0],
        max_value: commentsRange[1]
      }
    };

    this.props.filterUsers(conditions);
  }

  render() {
    const { followersRange, commentsRange } = this.state;

    return (
      <div style={{ marginBottom: 25, marginTop: 25, textAlign: "center" }}>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Filtrer les influenceuses
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          keepMounted
        >
          <DialogTitle id="alert-dialog-title">Filtrer les Influenceuses</DialogTitle>
          <DialogContent id="alert-dialog-description">
            <div style={{ width: 400, margin: 50 }}>
              <Typography style={{ fontSize: 15, marginBottom: 5 }} variant="body1">Filtrer par Pays</Typography>
              <FormControl style={{ minWidth: 120 }}>
              <InputLabel htmlFor="choose-country">Pays</InputLabel>
              <Select inputProps={{ name: 'country', id: 'choose-country' }} value={this.state.country} onChange={this.handleCountryChange}>
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Armenia">Armenia</MenuItem>
              </Select>
              </FormControl>
            </div>
            <div style={{ width: 400, margin: 50 }}>
              <Typography style={{ fontSize: 15, marginBottom: 5 }} variant="body1">Nombre de Followers</Typography>
              <SliderRange
                min={0}
                max={1000000}
                defaultValue={followersRange}
                onChange={value => this.setState({ followersRange: value })}
                tipFormatter={value => `${value}`}
                marks={{ 0: 0, 100000: '100k', 200000: '200k', 300000: '300k', 400000: '400k', 500000: '500k', 600000: '600k', 700000: '700k', 800000: '800k', 900000: '900k', 1000000: '1M'}}
                step={50000}
              />
            </div>
            <div style={{ width: 400, margin: 50 }}>
              <Typography style={{ fontSize: 15, marginBottom: 5 }} variant="body1">Moyenne de Commentaires</Typography>
              <SliderRange
                min={0}
                max={2000}
                defaultValue={commentsRange}
                onChange={value => this.setState({ commentsRange: value })}
                tipFormatter={value => `${value}`}
                marks={{ 0: 0, 200: '200', 400: '400', 600: '600', 800: '800', 1000: '1k', 1200: '1.2k', 1400: '1.4k', 1600: '1.6k', 1800: '1.8k', 2000: '2k'}}
                step={100}
              />
            </div>
            <div style={{ width: 400, margin: 50 }}>
              <Button onClick={this.startResearch} size="small" variant="contained" style={{ marginTop: 50 }}>Lancer la Recherche</Button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default UserFilter;
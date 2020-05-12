import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Header extends React.Component {
    render() {

        return (
            <AppBar position="static" style={{ background: 'rgba(137, 43, 226, 0.801)' }}>
                <Toolbar>
                    <Grid
                        justify="space-between"
                        container
                        spacing={22}>

                        <Grid item>
                            <Typography type="title" variant="h4" color="inherit">
                                TokMore
                        </Typography>
                        </Grid>

                        <Grid item>
                            <div>
                                <Button raised color="accent">
                                    Login
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }

}
Header.defaultProps = {
};

export default Header
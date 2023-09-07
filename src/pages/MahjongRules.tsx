import ImageList from '../components/ImageList';
import { Grid } from '@material-ui/core';

export function MahjongRules() {


    return (
        <Grid container
            spacing={2}
            justifyContent='center'
            alignItems="center"
            style={{ height: 'calc(100vh - 10rem)', padding: '2rem' }}>
            <ImageList />
        </Grid>
    );
}
export default MahjongRules;

import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));
const UploadFiles = () => {
    return(
        <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ p: 3, width: '100%' }}>
            <DrawerHeader />
            <Grid container>
                {
                   <h1>this is upload page</h1>
                }
            </Grid>
        </Box>
    </Box>
    )
}

export default UploadFiles;
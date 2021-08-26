import React,{ useState }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomButton from '../../atoms/Button/Button';
import { Grid, ListItem, ListItemIcon } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket ,faLandmark,faFlask,faGraduationCap,faLightbulb,faComment,faHeartbeat, faHeart, faGlobeAsia}  from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        
        '&:focus': {
            backgroundColor: grey[50],
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const Explore = (props) => {
  const [expand,setExpand] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
//   const location = useLocation();
  const history = useHistory();
//   console.log(history);
 
  const toggle=()=>{
    if(expand===0)
    {
    setExpand(1);
    }
    else
    {
    setExpand(0);
    }
  };
  const handleClick = (event) => {
    // props.click();
    setAnchorEl(event.currentTarget);
    toggle();
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggle();
  };

    const categoryClick=(event) =>{
            props.cateClick(event.target.innerText);
            props.click();
            history.push('/explore');
            
    };

   
    // const handleClick = () => history.push('/goodbye');
    return (
        <div>
            <CustomButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="primary"
                name="Explore"
                onClick={handleClick}  endIcon={(expand===0 && <ExpandMoreIcon />)||(expand===1 && <ExpandLessIcon/>)} />
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <Grid container direction={"row"} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose} >
                        <ListItem >
                          <ListItemIcon><FontAwesomeIcon icon={faRocket} /></ListItemIcon>
                          <CustomButton name="Entrepreneurship" onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
            </Grid> 
            <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLandmark} /></ListItemIcon>
                            <CustomButton name="Politics" onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faFlask} /></ListItemIcon>
                            <CustomButton name="Science" onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose} >
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGraduationCap} /></ListItemIcon>
                            <CustomButton name="Education" onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGlobeAsia} /></ListItemIcon>
                            <CustomButton name="Economics" onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLightbulb} /></ListItemIcon>
                            <CustomButton name="Motivation"  onClick={categoryClick}></CustomButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose}>
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faHeartbeat} /></ListItemIcon>
                              <CustomButton name="Health" onClick={categoryClick}></CustomButton>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose} >
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faComment} /></ListItemIcon>
                              <CustomButton name="Communcation skills" onClick={categoryClick}></CustomButton>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem >
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faHeart} /></ListItemIcon>
                              <CustomButton name="Relationships" onClick={categoryClick}></CustomButton>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
                </Grid>
            </StyledMenu>
        </div>
    );
};

export default Explore;
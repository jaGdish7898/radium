import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import style from './sidebar.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CloseIcon from '@mui/icons-material/Close';


export default function SideBar({isDrawerOpen,handleOpenDrawer}) {


  const getOptions = () => (
    <Box>
      <div className={style.optionListContainer}>
        {['Bhajan','MoreAbout','centerNearBy','upcoming Pooja']
        .map((option)=>(
          <div className={style.option} key={option}>
            <MusicNoteIcon/>
            {option}
          </div>
        ))}
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={isDrawerOpen}
        onClose={handleOpenDrawer}
      >
        <div className={style.closeBtn}>
          <CloseIcon 
            color='error' 
            fontSize='small'
            onClick={handleOpenDrawer}
          />
        </div>
        {getOptions()}
      </Drawer>
    </div>
  );
}

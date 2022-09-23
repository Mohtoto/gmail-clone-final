import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from '../components/SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoteIcon from '@mui/icons-material/Note';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice';


function Sidebar() {
     const dispatch = useDispatch();

  return (
    <div className='sidebar'>

        <Button
            onClick={()=> dispatch(openSendMessage())}
            className='sidebar__compose'
            startIcon={<AddIcon fontSize='large' />}>
            Compose
        </Button>

        
        <SidebarOption 
            title='inbox' 
            number={54}  
            Icon={InboxIcon} 
            selected={true}
             />
        <SidebarOption title='Starred' number={54}  Icon={StarIcon}/>
        <SidebarOption title='Snoozed' number={54}  Icon={AccessTimeIcon}/>
        <SidebarOption title='Important' number={54}  Icon={LabelImportantIcon}/>
        <SidebarOption title='Sent' number={54}  Icon={NearMeIcon}/>
        <SidebarOption title='Drafts' number={54}  Icon={NoteIcon}/>
        <SidebarOption title='More' number={54}  Icon={ExpandMoreIcon}/>

        <div className="sidebar__footer">

            <div className="sidebar__footerIcons">

                <IconButton>
                    <PersonIcon />
                </IconButton>

                <IconButton>
                    <DuoIcon />
                </IconButton>

                <IconButton>
                    <PhoneIcon />
                </IconButton>

            </div>

        </div>

    </div>
  )
}

export default Sidebar;
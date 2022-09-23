import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import RedoIcon from '@mui/icons-material/Redo'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import SettingsIcon from '@mui/icons-material/Settings'
import PeopleIcon from '@mui/icons-material/People'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import InboxIcon from '@mui/icons-material/Inbox'
import { Checkbox, IconButton } from '@mui/material'
import Section from '../components/Section'
import EmailRow from '../EmailRow'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function EmailList() {

  const [emails , setEmails] = useState([])

  useEffect(() => {

    db.collection('emails').orderBy('timestamps', 'desc').onSnapshot
    (snapshot => setEmails(snapshot.docs.map(doc => ({

      id: doc.id,
      data:doc.data(),
    }))))
  },[])


  


  return (
    <div className='email__list'>

      <div className="emailList__settings">

        <div className="emailList__settingsLeft">

          <Checkbox />

          <IconButton>
            <ArrowDropDown />
          </IconButton>

          <IconButton>
            <RedoIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>


        </div>

        <div className="emailList__settingsRight">

          <IconButton>
            <ChevronLeftIcon />
          </IconButton>

          <IconButton>
            <ChevronRightIcon />
          </IconButton>


          <IconButton>
            <KeyboardHideIcon />
          </IconButton>


          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">

        <Section Icon={InboxIcon} title='Primary'  color='red' selected/>
        <Section Icon={PeopleIcon} title='Social'  color='#1A73E8' selected/>
        <Section Icon={LocalOfferIcon} title='Promotions'  color='Green' selected/>
      </div>

      <div className="emailList__list">

          {emails.map(({id , data : { to , subject , message , timestamps }}) => (

            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              message={message}
              time={new Date(timestamps?.seconds*1000).toUTCString()}
              />
          ))}


          
          </div>         

                

    </div>
  )
}

export default EmailList
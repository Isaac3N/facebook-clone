//import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import {ExpandMoreOutlined} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src={'https://i.stack.imgur.com/34AD2.jpg'} title='Isaac Ndubuisi'/>
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title='COVID-19 Information center'/>
                <SidebarRow Icon={EmojiFlagIcon} title="pages"/>
                <SidebarRow Icon={PeopleIcon} title="Friends"/>
                <SidebarRow Icon={ChatIcon} title="Messengers"/>
                <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
                <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
                <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

            
        </div>
    )
}

export default Sidebar

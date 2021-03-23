import React from 'react';
import * as s from './App.Style.js';
import Sidebar from './component/sidebar/Sidebar';
import MainView from './component/mainView/MainView';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import FlightIcon from '@material-ui/icons/Flight';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import SettingsInputAntennaRoundedIcon from '@material-ui/icons/SettingsInputAntennaRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';

function App() {
  const sidebarHeader = {
                    fullName: "Yo Yo Travel",
                    shortName: "Yo"
  };
  const menuItem = [
          {name: 'Home', to: '/', icon: <HomeIcon /> , submenuItem: [] },
          {name: 'About', to: '/about', icon: <GroupIcon />, submenuItem: [] },
          {name: 'Destination', to: '/destination', icon: <FlightIcon />, 
          submenuItem: [
            {name: 'Canda', to: '/canda'},
            {name: 'Birazil', to: '/birazil'},
            {name: 'Pakistan', to: '/pakistan'},
            {name: 'UAE', to: '/uae'},
          ] },
          {name: 'Blog', to: '/blog', icon: <ListRoundedIcon />, submenuItem: [] },
          {name: 'Services', to: '/service', icon: <SettingsInputAntennaRoundedIcon />, submenuItem: [] },
          {name: 'Contact', to: '/contact', icon: <PermContactCalendarRoundedIcon />, submenuItem: [] }
  ];

const fonts = {
  header: 'ZCOOL KuaiLe',
  menu: 'Poppins'
}
  
  return (
    <s.App>
      <Sidebar sidebarHeader={sidebarHeader} menuItem={menuItem} fonts={fonts}
       />
      <MainView />
    </s.App>
  );
}

export default App;

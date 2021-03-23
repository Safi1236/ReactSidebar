import React, {useState, useEffect} from 'react';
import * as s from './Sidebar.Style';

const Sidebar = (props) => {
    const {sidebarHeader = {
                        fullName: '',
                        shortName: ''
    },
          menuItem = [],
          fonts = {
              header: '',
              menu: ''
          }
        } = props

    // State
    const [selected, setSelectedMenuItem] = useState(menuItem[0].name);
    const [sidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);

    //UseEffect
    useEffect(() => {
        sidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 300 ): setHeader(sidebarHeader.shortName);
    }, [sidebarOpen, sidebarHeader])

    const menuItemJSX = menuItem.map((item, index) => {
                const isItemSelected = selected === item.name;
              //  console.log(`${item.name} selected? ${isItemSelected}`);
              const handleMenuItemClick = name =>{
                  setSelectedMenuItem(name)
              }

                return(
                    <s.MenuItem key={index} fonts={fonts.menu} 
                                selected={isItemSelected}
                                onClick={() => handleMenuItemClick(item.name)}
                    >
                    <s.Dis>
                    <s.Icon sidebarOpen={sidebarOpen}>{item.icon}</s.Icon>
                   <s.Text sidebarOpen={sidebarOpen}>{item.name}</s.Text>
                   </s.Dis>
                    </s.MenuItem>
                )
    })

    console.log(`Is sidebar Open ${sidebarOpen}`)

    return(
        <s.SidebarContainer sidebarOpen={sidebarOpen}>
            <s.SidebarHeader fonts={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={() => setSidebarState(!sidebarOpen)}>
                <s.Toggler />
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar;
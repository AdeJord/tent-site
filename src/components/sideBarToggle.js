import React from 'react'
import { useState } from 'react';

const SideBarToggle = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    console.log('sidebar' + showSidebar);

  return (
    <setSidebar />
  )
}

export default SideBarToggle
import React from 'react'
import { useState } from 'react';

export const CloseSideBar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    console.log('CloseSidebar button pressed')
  )
}

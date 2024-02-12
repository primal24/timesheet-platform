import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

const TimesheetSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="col-md-3 sidebar"> {/* Adjust grid size as needed */}
            <Collapse in={isCollapsed}>
                <div className="sidebar-content">
                    {/* Navigation buttons or links here */} 
                </div>
            </Collapse>
            <Button variant="secondary" block onClick={toggleCollapse}>
                Toggle Sidebar
            </Button>
        </div>
    );
};

export default TimesheetSidebar;

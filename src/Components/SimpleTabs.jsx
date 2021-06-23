import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BookIcon,RepoIcon, ProjectIcon, PackageIcon} from '@primer/octicons-react'


export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
      >
        <Tab label="Overview"  icon={<BookIcon/>}/>
        <Tab label="Repositories" icon={<RepoIcon/>} />
        <Tab label="Projects" icon={<ProjectIcon/>}/>
        <Tab label="Packages" icon={<PackageIcon/>}/>
      </Tabs>
    </div>
  );
}
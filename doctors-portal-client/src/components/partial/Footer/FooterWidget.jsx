import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom'
import footerData from '../../../data/footerData';

const FooterWidget = () => {
    return (
        <List component="nav">
            {
                footerData.map(lk => <ListItem><Link to={lk.path}>{lk.name}</Link></ListItem>)
            }
        </List>
    );
};

export default FooterWidget;
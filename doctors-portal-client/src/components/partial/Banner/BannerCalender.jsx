import { Typography } from '@material-ui/core';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import { categoryByDate } from '../../../redux/action/action';

const BannerCalender = (props) => {
    const { categoryByDate } = props
    const value = new Date();

    return (
        <div>
            <Typography variant="h2">Appoinment</Typography>
            <Calendar
                onChange={(d) => categoryByDate(d)}
                value={value}
                minDate={new Date(2021, 0, 1)}
                maxDate={new Date(2021, 11, 31)}
                minDetail={'year'}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return state
}
const mapDispachToProps = {
    categoryByDate
}

export default connect(mapStateToProps, mapDispachToProps)(BannerCalender);



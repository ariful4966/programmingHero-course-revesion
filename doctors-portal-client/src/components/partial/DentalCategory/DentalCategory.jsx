import { Container, Grid, Typography, } from '@material-ui/core';
import { connect } from 'react-redux';
import DentalCategoryItem from '../DentalCategoryItem/DentalCategoryItem';
// import { categoryByDate } from '../../../redux/action/action';

const DentalCategory = (props) => {
    const { treatmentByDate, setDate, treatmentCategory } = props;
    const showDate = new Date(setDate).toDateString();
    const compareDate = new Date(setDate).toLocaleDateString('en-US');
    const defaultCategory = treatmentCategory.filter(tc => tc.date === compareDate)

    return ((treatmentByDate.length > 0 || defaultCategory.length > 0) ?
        <div className="dental_Category">
            <Container>
                <Typography variant="h2">Avialable Appoinment on <span style={{ color: 'green' }}>{showDate}</span></Typography>
                <Grid container spacing={4}>
                    {
                        (treatmentByDate.length > 0 ? treatmentByDate : defaultCategory).map(ct =>
                            <Grid key="ct._id" item md={4}>
                                <DentalCategoryItem categoy={ct} />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
        :
        <div className="dental_Category">
            <Container>
                <Typography variant="h2">Avialable Appoinment on <span style={{ color: 'green' }}>{showDate}</span></Typography>
                <Typography variant="h2" style={{ color: '#071261', fontWeight: '800' }}>There is No Treatment Category Today</Typography>
            </Container>
        </div>)

};

const mapStateToProps = (state) => {
    return state
}
const mapDispachToProps = {

}

export default connect(mapStateToProps, mapDispachToProps)(DentalCategory);
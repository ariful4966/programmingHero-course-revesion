
import { Container, Row } from 'react-bootstrap';
import './NetworkCategory.css'
import CategoryItem from '../CategoryItem/CategoryItem';
import { connect } from 'react-redux';


const NetworkCategory = (props) => {
    const { categoris, colors } = props

    

    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    return (
        <div className="category_area">
            <Container>
                <Row>
                    {
                        categoris.map(ct =>
                            <CategoryItem key={ct._id} ct={ct} rendom={randomColor} colors={colors}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps, null)(NetworkCategory);
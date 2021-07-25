import { Container, Grid, Typography } from '@material-ui/core';
import blog from '../../../data/blog';
import './Blog.scss'

const Blog = () => {
    return (
        <div className="blog_area ">
            <Container>
                <div className="blog_container">
                    <div className="section_heading">
                        <Typography variant='h5' className="heading_top">Our Blog</Typography>
                        <Typography variant='h3' className="main_heading">From Our Blog News</Typography>
                    </div>
                    <div className="testimonial_content">
                        <Grid container spacing={6}>
                            {
                                blog.map(ts =>
                                    <Grid item md={4} key={ts.key} >
                                        <div className="single_blog">

                                            <div className="blog_creator">
                                                <Grid container spacing={4} alignItems="center">
                                                    <Grid item md={4} className="commenter_img">
                                                        <img src={ts.image} alt="" />
                                                    </Grid>
                                                    <Grid item md={8} className="commenter_info">
                                                        <Typography variant="h6">{ts.name}</Typography>
                                                        <Typography paragraph={true}>{ts.date}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div className="blog_body" >
                                                <Typography paragraph={true} >{ts.body}</Typography>
                                            </div>
                                        </div>

                                    </Grid>
                                )
                            }
                        </Grid>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Blog;
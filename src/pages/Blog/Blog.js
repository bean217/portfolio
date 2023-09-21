import React from 'react';
import './Blog.scss';

// routing
import { Link } from 'react-router-dom';

// blog posts
import posts from './posts.json';

const PostYear = (props) => {
    return (
        <tr className='blog-post-year-container'>
            <td colSpan={2}>Posts From {props.year}</td>
        </tr>
    );
};

const PostLink = (props) => {
    return (
        <tr className='blog-post-link-container'>
            <td>{props.data.date}</td>
            <td><Link to={`posts/${props.index}`}>{props.data.title}</Link></td>
        </tr>
    );
};

const Posts = () => {
    // sort blog posts in descending order
    const blog_posts = posts.sort((a, b) => (new Date(b.date))-(new Date(a.date)));

    return (
        <div className='blog-posts-container'>
            <div className='blog-posts-header-container'>
                <p>
                    This is Benjamin's main blog. He uses this blog as a public post board
                    for informing the world about what his current interests are. You can expect
                    to find posts which mostly pertain to computer science, machine learning, and
                    recently completed projects &mdash; in addition to the occational music or 
                    miscellaneous post.
                </p>
            </div>
            <table className='blog-posts-list-container'>
                <tbody>
                    {blog_posts.map((item, i) => {
                        // keep track of components to display
                        var comps = [<PostLink data={item} index={`PL_${i}`} key={i}/>]
                        // get the year of the current post
                        const curr_date = (new Date(item.date)).getFullYear();
                        if (i !== 0) {
                            // compare to the year of the previous post
                            const prev_date = (new Date(blog_posts[i-1].date)).getFullYear();
                            // display date header if the post years differ
                            if (curr_date !== prev_date) {
                                return [<PostYear year={curr_date} key={`PY_${i}`}/>, ...comps]
                            }
                        } else {
                            // display date header for the most recent post
                            return [<PostYear year={curr_date} key={`PY_${i}`}/>, ...comps]
                        }
                        return comps
                    })}
                </tbody>
            </table>
        </div>
    );
};

const Blog = () => {
    console.log("Blog render");
    return (
        <div className='blog-container'>
            <Posts/>
        </div>
    );
};

export default Blog;
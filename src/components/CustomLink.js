

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CustomLink = ({ history, to, onClick, tag: Tag, ...rest }) => (
    <Tag
        {...rest}
        onClick={(event) => {
            onClick(event);
            history.push(to)
        }}
    />
);

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    onClick: PropTypes.func
};
CustomLink.defaultProps = {
    onClick: () => {}
};
export default withRouter(CustomLink);


//https://blog.usejournal.com/make-different-html-tags-behave-as-a-react-router-link-81b09c9edc6d

//<CustomLink
 //tag={Button} //Custom button component
 //to='/yourPath' // path to switch
// className={yourCustomClassName} //your custom className
//>  
//Link with custom component
//</CustomLink>
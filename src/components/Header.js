import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    let branding;
    if (props) {
        branding = props.branding;
    }
    
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark justify-content-center">
                <a href="/" className="navbar-brand"><p className="display-4">{ branding }</p></a>
            </nav>
        </React.Fragment>
    )
}

Header.defaultProps = {
    branding: "Movie App",
}

Header.propTypes = {
    branding: PropTypes.string.isRequired,
}

export default Header;

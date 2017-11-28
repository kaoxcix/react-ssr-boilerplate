import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet';

// Set Inline Style
const styles = {
    'app': {
        textAlign: 'center',
        fontSize:  '2rem',
    }
};

class Index extends Component {
    render() {
        return (
            <div style={styles.app}>
                <Helmet
                    title={this.props.title}
                />

                {this.props.title}, Please try to go:
                <dd>
                    <Link to="/">Go Home</Link>
                </dd>
                <dd>
                    <Link to="/heaven">Go to Heaven</Link>
                </dd>
                <dd>
                    <Link to="/hell">Go to Hell (No Reload)</Link>
                    &nbsp;/&nbsp;
                    <a href="/hell">Go to Hell (Reload)</a>
                </dd>
                <dd>
                    <Link to="/404">Go Somewhere ~</Link>
                </dd>
            </div>
        );
    }
}

export default Index
/**
 * Container Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Container = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Container horizontalCenter={false} borderBottom='1px solid #ccc' backgroundColor={'#aaa'}>
                    1
                </Container>
            </div>
        );
    }
};

module.exports = Demo;

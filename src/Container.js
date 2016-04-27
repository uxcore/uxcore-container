/**
 * Container Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let assign = require('object-assign');
let React = require('react');

class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        let {prefixCls, children, horizontalCenter, ...userStyles} = me.props;
        let styles = assign({}, userStyles);
        if (horizontalCenter) {
            styles.textAlign = 'center';
        }
        let contentStyle = {
            display: 'inline-block'
        };
        return (
            <div className={`${prefixCls}`} style={styles}>
                <div className={`${prefixCls}-content`} style={contentStyle}>
                    {children}
                </div>
            </div>
        );
    }
}

Container.defaultProps = {
    prefixCls: 'kuma-ve-container',
    horizontalCenter: true,
    width: 'auto',
    height: 100
}


// http://facebook.github.io/react/docs/reusable-components.html
Container.propTypes = {
    /**
     * @title 类名前缀
     * @veIgnore
     */ 
    prefixCls: React.PropTypes.string,
    /**
     * @title 水平居中
     */ 
    horizontalCenter: React.PropTypes.bool,
    /**
     * @title 背景颜色
     */ 
    backgroundColor: React.PropTypes.string,
    /**
     * @title 宽度
     */ 
    width: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 高度
     */ 
    height: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 上边框
     */ 
    borderTop: React.PropTypes.string,
    /**
     * @title 下边框
     */ 
    borderBottom: React.PropTypes.string,
    /**
     * @title 左边框
     */
    borderLeft: React.PropTypes.string,
    /**
     * @title 右边框
     */
    borderRight: React.PropTypes.string,
    /**
     * @title 左内边距
     */
    paddingLeft: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 右内边距
     */
    paddingRight: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 上内边距
     */
    paddingTop: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 下内边距
     */
    paddingBottom: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 左外边距
     */
    marginLeft: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 右外边距
     */
    marginRight: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 上外边距
     */
    marginTop: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    /**
     * @title 下外边距
     */
    marginBottom: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
}

Container.displayName = "Container";

module.exports = Container;
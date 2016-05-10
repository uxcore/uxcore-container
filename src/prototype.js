
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "容器",
    category: "布局",
    icon: require("./logo.svg"), // todo: require("./logo.svg"),
    componentName: "Container",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: false,
    isContainer: true,
    canDropto: true,
    canDroping: false,
    configure: [{
            name: "horizontalCenter",
            title: "水平居中",
            defaultValue: true,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <BoolSetter />
        }, {
            name: "backgroundColor",
            title: "背景颜色",
            defaultValue: '#fff',
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "width",
            title: "宽度",
            defaultValue: 'auto',
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "height",
            title: "高度",
            defaultValue: 100,
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "borderTop",
            title: "上边框",
            defaultValue: '1px dashed #555',
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "borderBottom",
            title: "下边框",
            defaultValue: "",
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "borderLeft",
            title: "左边框",
            defaultValue: "",
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "borderRight",
            title: "右边框",
            defaultValue: "",
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "paddingLeft",
            title: "左边距",
            defaultValue: 0,
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "paddingRight",
            title: "右边距",
            defaultValue: 0,
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "paddingTop",
            title: "上边距",
            defaultValue: 0,
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }, {
            name: "paddingBottom",
            title: "下边距",
            defaultValue: 0,
            required: false,
            fieldStyle: "inline",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={1} />
        }]
});

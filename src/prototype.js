
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "布局容器",
    category: "布局",
    icon: "", // todo: require("./logo.svg"),
    componentName: "Container",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: false,
    isContainer: true,
    canDropto: true,
    canDroping: true,
    configure: [{
            name: "horizontalCenter",
            title: "水平居中",
            defaultValue: true,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <BoolSetter />
        }, {
            name: "backgroundColor",
            title: "背景颜色",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "width",
            title: "宽度",
            defaultValue: 'auto',
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "height",
            title: "高度",
            defaultValue: 100,
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "borderTop",
            title: "上边框",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "borderBottom",
            title: "下边框",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "borderLeft",
            title: "左边框",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "borderRight",
            title: "右边框",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "paddingLeft",
            title: "左内边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "paddingRight",
            title: "右内边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "paddingTop",
            title: "上内边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "paddingBottom",
            title: "下内边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "marginLeft",
            title: "左外边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "marginRight",
            title: "右外边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "marginTop",
            title: "上外边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "marginBottom",
            title: "下外边距",
            defaultValue: "",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }]
});

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Tree } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jsonTest from './data/data.json'
import jsonTree from './data/tree.json'

import 'antd/dist/antd.css'
import './css/basic.css'

//components
import Home from './components/Home';
import About from './components/About';
import Topic from './components/Topic';

const TreeNode = Tree.TreeNode;

let oneShow = 0

const treeData = [
    {
        title: '模块',
        key: '0-0',
        children: [
            {
                title: '框架/架构设计',
                key: '0-0-0',
                children: [
                    { 
                        title: '模块说明', 
                        key: '0-0-0-0',
                        children: [
                            { title: '软件在设计时科学的考虑，程序的框架设计，以及程序的可扩展性；比如：软件设计模式、运行时支持的变量范围，参数范围等', key: '0-0-0-0-0' },
                            
                        ] 
                    },
                    {
                        title: '模块子项', 
                        key: '0-0-0-1',
                        children: [
                            { title: '配置管理设计', key: '0-0-0-1-0' },
                            { title: '数据设计', key: '0-0-0-1-1' },
                            { title: '接口设计', key: '0-0-0-1-2' },
                            { title: '模块设计', key: '0-0-0-1-3' },
                            { title: '框架搭建', key: '0-0-0-1-4' }
                        ]
                    },
                    {
                        title: '模块子项说明',
                        key: '0-0-0-2',
                        children: [
                            { title: '对程序运行的参数可调整性，可扩展性，设计的外部参数配置', key: '0-0-0-2-0' },
                            { title: '数据库设计，数据文件设计', key: '0-0-0-2-1' },
                            { title: '软件本身对外的接口设计，比如多控制类的设计', key: '0-0-0-2-2' },
                            { title: '模块设计、划分，各个模块的关联，流程', key: '0-0-0-2-3' },
                            { title: '根据项目的设计进行执行开发框架搭建', key: '0-0-0-2-4' }
                        ]
                    },
                    {
                        title: '具体功能项',
                        key: '0-0-0-3',
                        children: [
                            { title: '1', key: '0-0-0-3-0' },
                            { title: '2', key: '0-0-0-3-1' },
                            { title: '3', key: '0-0-0-3-2' },
                            { title: '4', key: '0-0-0-3-3' },
                            { title: '5', key: '0-0-0-3-4' }
                        ]
                    },
                    {
                        title: '参考范围',
                        key: '0-0-0-4',
                        children: [
                            { title: '≤5', key: '0-0-0-4-0' },
                            { title: '≤5', key: '0-0-0-4-1' },
                            { title: '≤5', key: '0-0-0-4-2' },
                            { title: '≤5', key: '0-0-0-4-3' },
                            { title: '≤5', key: '0-0-0-4-4' }
                        ]
                    },
                    {
                        title: '单位',
                        key: '0-0-0-5',
                        children: [
                            { title: '个', key: '0-0-0-5-0' }, 
                            { title: '个', key: '0-0-0-5-1' },
                            { title: '个', key: '0-0-0-5-2' },
                            { title: '个', key: '0-0-0-5-3' },
                            { title: '项', key: '0-0-0-5-4' }
                        ]
                    }, 
                    {
                        title: '综合后',
                        key: '0-0-0-6', 
                        children: [
                            { title: '1', key: '0-0-0-6-0' },
                            { title: '4', key: '0-0-0-6-1' },
                            { title: '4', key: '0-0-0-6-2' },
                            { title: '4', key: '0-0-0-6-3' }, 
                            { title: '4', key: '0-0-0-6-4' }
                        ]
                    },
                    {
                        title: '数量',
                        key: '0-0-0-7',
                        children: [
                            { title: '1', key: '0-0-0-7-0' },
                            { title: '3', key: '0-0-0-7-1' },
                            { title: '4', key: '0-0-0-7-2' },
                            { title: '5', key: '0-0-0-7-3' },
                            { title: '4', key: '0-0-0-0-4' }
                        ]
                    },
                    {
                        title: 'Flash',
                        key: '0-0-0-8',
                        children: [
                            { title: '2', key: '0-0-0-8-0' },
                            { title: '3', key: '0-0-0-8-1' },
                            { title: '4', key: '0-0-0-8-2' },
                            { title: '3', key: '0-0-0-8-3' },
                            { title: '4', key: '0-0-0-8-4' }
                        ]
                    },
                    {
                        title: 'Unity3D',
                        key: '0-0-0-9',
                        children: [
                            { title: '2', key: '0-0-0-9-0' },
                            { title: '5', key: '0-0-0-9-1' },
                            { title: '4', key: '0-0-0-9-2' },
                            { title: '4', key: '0-0-0-9-3' },
                            { title: '7', key: '0-0-0-9-4' }
                        ]
                    },
                    {
                        title: 'C#(WPF/WF)',
                        key: '0-0-0-a',
                        children: [
                            { title: '3', key: '0-0-0-a-0' },
                            { title: '4', key: '0-0-0-a-1' },
                            { title: '4', key: '0-0-0-a-2' },
                            { title: '4', key: '0-0-0-a-3' },
                            { title: '5', key: '0-0-0-a-4' }
                        ]
                    },
                    {
                        title: '软件开发（人天）',
                        key: '0-0-0-b',
                        children: [
                            { title: '3', key: '0-0-0-b-0' },
                            { title: '4', key: '0-0-0-b-1' },
                            { title: '4', key: '0-0-0-b-2' },
                            { title: '4', key: '0-0-0-b-3' },
                            { title: '5', key: '0-0-0-b-4' }
                        ]
                    },
                    {
                        title: 'result',
                        key: '0-0-0-c',
                        children: [
                            { title: '2.33', key: '0-0-0-c-0' },
                            { title: '4', key: '0-0-0-c-1' },
                            { title: '4', key: '0-0-0-c-2' },
                            { title: '4', key: '0-0-0-c-3' }, 
                            { title: '5.67', key: '0-0-0-c-4' }
                        ]
                    },
                    { 
                        title: '两者平均',
                        key: '0-0-0-d',
                        children: [
                            { title: '1.67', key: '0-0-0-d-0' },
                            { title: '3.5', key: '0-0-0-d-1' },
                            { title: '4', key: '0-0-0-d-2' },
                            { title: '3.5', key: '0-0-0-d-3' },
                            { title: '4.83', key: '0-0-0-d-4' }
                        ]
                    }
                    
                ],
            }, 
            {
                title: '视图/显示模块',
                key: '0-0-1',
                children: [
                    { 
                        title: '模块说明', 
                        key: '0-0-1-0',
                        children: [
                            { title: '视图（View）是应用程序中处理显示的部分，通常视图是依据模型数据创建的。比如：UI界面、2D、3D、场景、UI组件等', key: '0-0-1-0-0' }
                        ] 
                    },
                    { 
                        title: '模块子项', 
                        key: '0-0-1-1' ,
                        children: [
                            { 
                                title:  '2D场景', 
                                key: '0-0-1-1-0',
                                children: [
                                    { title: '页面布局', key: '0-0-1-1-0-0'},
                                    { title: 'UI组件' , key: '0-0-1-1-0-1'},
                                    { title: '第三方UI组件', key: '0-0-1-1-0-2'},
                                    { title: '动态特效', key: '0-0-1-1-0-3'}
                                ]
                            }, 
                            {
                                title:  '3D场景', 
                                key: '0-0-1-1-1',
                                children: [
                                    { title: '场景环境', key: '0-0-1-1-1-0'},
                                    { title: '动态特效', key: '0-0-1-1-1-1' },
                                    { title: '3D组件', key: '0-0-1-1-1-2'},
                                    { title: '第三方3D组件', key: '0-0-1-1-1-3'}
                                ]
                            }
                        ]
                    },
                    { 
                        title: '模块子项说明', 
                        key: '0-0-1-2', 
                        children: [
                            { title: '根据设计稿，对页面上的元素通过程序代码制作', key: '0-0-1-2-0' },
                            { title: '用户界面组件，将各自功能的代码段封装为独立的部分，包含了各自功能的代码段。例如：数据图表、表单、按钮组', key: '0-0-1-2-1' },
                            { title: '引用第三方UI组件库进行视图构建，例如：eCharts,highCharts', key: '0-0-1-2-2' },
                            { title: '由程序开发的动画，光影，粒子等特效', key: '0-0-1-2-3' },
                            { title: '3D场景，3D相机，地形编辑，烘培，灯光,材质，渲染等', key: '0-0-1-2-4' }, 
                            { title: '由程序开发的粒子，光晕，拖尾，物理引擎，shader等', key: '0-0-1-2-5' },
                            { title: '用户界面组件，将各自功能的代码段封装为独立的部分，包含了各自功能的代码段。例如：3D数据图表、地图导航等', key: '0-0-1-2-6' }
                        ]
                    },
                    { 
                        title: '具体功能项', 
                        key: '0-0-1-3', 
                        children: [
                            { title: '1', key: '0-0-1-3-0' },
                            { title: '2', key: '0-0-1-3-1' },
                            { title: '3', key: '0-0-1-3-2' },
                            { title: '4', key: '0-0-1-3-3' },
                            { title: '5', key: '0-0-1-3-4' }
                        ]
                    },
                    { 
                        title: '参考范围', 
                        key: '0-0-1-4' ,
                        children: [
                            { title: '≤5', key: '0-0-1-4-0' },
                            { title: '≤5', key: '0-0-1-4-1' },
                            { title: '≤5', key: '0-0-1-4-2' },
                            { title: '≤5', key: '0-0-1-4-3' },
                            { title: '≤5', key: '0-0-1-4-4' }
                        ]
                    }
                ],
            }, 
            {
                title: '交互/控制模块',
                key: '0-0-2',
                children: [
                    { title: '模块说明', key: '0-0-2-0' },
                    { title: '模块子项', key: '0-0-2-1' },
                    { title: '模块子项说明', key: '0-0-2-2' },
                    { title: '具体功能项', key: '0-0-2-3' },
                    { title: '参考范围', key: '0-0-2-4' }
                ]
            }
        ],
    }];




class App extends Component{

    state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: ['0-0-0'],
      datas: jsonTree,
      oneChange: oneShow,
      getJson: jsonTest,
      msg: 'stop'
     
    }

    onExpand = (expandedKeys) => {
    //   console.log('onExpand', arguments);
      console.log(expandedKeys, 'expandedKeys')
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.setState({
        expandedKeys,
        autoExpandParent: false,
      });
    }

    onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        console.log(this.state.datas, 'datas')

        this.setState({ checkedKeys });

    }


    onSelect = (selectedKeys, info) => {
    //   console.log('onSelect', info);
      console.log(selectedKeys, 'selectedKeys')

      this.setState({ selectedKeys });
    }


    renderTreeNodes = (data) => {
      return data.map((item) => {
        if (item.children) {
          return (
            <TreeNode title={item.title} key={item.key} dataRef={item}>
              {this.renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode {...item} />;
      });
    }
    
    render() {
      return (
        <div className="container">
            {/* <Router>
                <div>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/topic">Topics</Link>
                        </li>
                    </ul>

                    <hr />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/topic" component={Topic} />
                    </div>
            
            </Router> */}
            

            <Tree
                checkable
                onExpand={this.onExpand}
                expandedKeys={this.state.expandedKeys}
                autoExpandParent={this.state.autoExpandParent}
                onCheck={this.onCheck}
                checkedKeys={this.state.checkedKeys}
                onSelect={this.onSelect}
                selectedKeys={this.state.selectedKeys}
            >
            {this.renderTreeNodes(this.state.datas.tree)}
            </Tree>
        </div>
      );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
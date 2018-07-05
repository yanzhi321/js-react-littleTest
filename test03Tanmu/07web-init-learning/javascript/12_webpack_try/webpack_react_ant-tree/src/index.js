import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Tree } from 'antd';

import jsonTest from './data/data.json'
// import jsonTree from './data/tree.json'
import jsonTitle from './data/title.json'

import 'antd/dist/antd.css'
import './css/basic.css'

const TreeNode = Tree.TreeNode;

// let arr = [1, 2, 3, 4, 5, 6, 7]


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            expandedKeys: ['0-0'],
            autoExpandParent: true,
            // checkedKeys: ['0-0-0'],
            // selectedKeys: ['0-0-0'],
            datas: jsonTest,
            titles: jsonTitle
        }
    }
    



    //组件挂载
    componentDidMount() {
        const con = document.querySelector('.container');
        // console.log(con.children[0]);
        const firTree  = con.children[0].querySelector('.ant-tree-child-tree')
        // console.log(firTree)
        // console.log(firTree.children[0])

        // const frameDesign = firTree.children[0].querySelector('.ant-tree-title')
        // frameDesign.title = "软件在设计时科学的考虑，程序的框架设计，以及程序的可扩展性；比如：软件设计模式、运行时支持的变量范围，参数范围等"
        // const viewShow = firTree.children[1].querySelector('.ant-tree-title')
        // viewShow.title = "视图（View）是应用程序中处理显示的部分，通常视图是依据模型数据创建的。比如：UI界面、2D、3D、场景、UI组件等。"
        // const interactiveControl = firTree.children[2].querySelector('.ant-tree-title')
        // interactiveControl.title = "控制器（Controller）是应用程序中处理用户交互的部分，接收用户的操作以及外部硬件的输入/输出；比如：鼠标、键盘、pad等触发来交互控制的对象等。"
        // const moduleData = firTree.children[3].querySelector('.ant-tree-title')
        // moduleData.title = "模型（Model）是应用程序中用于处理应用程序数据逻辑的部分，通常模型对象负责处理数据关系，或是数据的输入/输出处理(数据交互)。比如：程序交互逻辑，数据库处理，数据分析、对接等。"
        // const logDebug = firTree.children[4].querySelector('.ant-tree-title')
        // logDebug.title = "软件生命周期内所需要的技术验证、调试、测试、优化等。比如：日志输出、调试工具开发、软硬调试测试、以及各种测试方法等。"
        // const releaseDeploy = firTree.children[5].querySelector('.ant-tree-title')
        // releaseDeploy.title = "软件版本的发布、管理，运行环境的配置、部署；比如多平台、多版本的发布"
        // const otherModule = firTree.children[6].querySelector('.ant-tree-title')
        // otherModule.title = "其它功能模块或者是常用的集成模块，基于第三方SDK开发的功能模块，比如：语音识别，OpenCV,Apollo,百度/谷歌地图SDK等"

        //循环
        
        let firTreeArr = Array.from(firTree.children)
        let outTitleArr = this.state.titles.moduleTitle[0].outTitle
        firTreeArr.map( (con, i) => {
            con.querySelector('.ant-tree-title').title = outTitleArr[i]
        })


    }

    //组件卸载
    componentWillUnmount() {
        // console.log("conponentWillUnmount")
    }

    //componentDidUpdate：更新后立即调用
    componentDidUpdate(prevProps) {
        const con = document.querySelector('.container');
        let firTree  = con.children[0].querySelector('.ant-tree-child-tree')
        

        // let frameDesign = firTree.children[0].querySelector('.ant-tree-title')
        // frameDesign.title = "软件在设计时科学的考虑，程序的框架设计，以及程序的可扩展性；比如：软件设计模式、运行时支持的变量范围，参数范围等"
        // let viewShow = firTree.children[1].querySelector('.ant-tree-title')
        // viewShow.title = "视图（View）是应用程序中处理显示的部分，通常视图是依据模型数据创建的。比如：UI界面、2D、3D、场景、UI组件等。"
        // let interactiveControl = firTree.children[2].querySelector('.ant-tree-title')
        // interactiveControl.title = "控制器（Controller）是应用程序中处理用户交互的部分，接收用户的操作以及外部硬件的输入/输出；比如：鼠标、键盘、pad等触发来交互控制的对象等。"
        // let moduleData = firTree.children[3].querySelector('.ant-tree-title')
        // moduleData.title = "模型（Model）是应用程序中用于处理应用程序数据逻辑的部分，通常模型对象负责处理数据关系，或是数据的输入/输出处理(数据交互)。比如：程序交互逻辑，数据库处理，数据分析、对接等。"
        // let logDebug = firTree.children[4].querySelector('.ant-tree-title')
        // logDebug.title = "软件生命周期内所需要的技术验证、调试、测试、优化等。比如：日志输出、调试工具开发、软硬调试测试、以及各种测试方法等。"
        // let releaseDeploy = firTree.children[5].querySelector('.ant-tree-title')
        // releaseDeploy.title = "软件版本的发布、管理，运行环境的配置、部署；比如多平台、多版本的发布"
        // let otherModule = firTree.children[6].querySelector('.ant-tree-title')
        // otherModule.title = "其它功能模块或者是常用的集成模块，基于第三方SDK开发的功能模块，比如：语音识别，OpenCV,Apollo,百度/谷歌地图SDK等"

        //map
        let firTreeArrU = Array.from(firTree.children)
        let outTitleArrU = this.state.titles.moduleTitle[0].outTitle
        firTreeArrU.map( (con, i) => {
            con.querySelector('.ant-tree-title').title = outTitleArrU[i]
        })

        
        let firTreeChild = firTree.children[0];
        let secTreeChild = firTree.children[1];
        let thirdTreeChild = firTree.children[2]; 
        let forTreeChild = firTree.children[3];
        let fifTreeChild = firTree.children[4];
        let sixTreeChild = firTree.children[5];
        let sevenTreeChild = firTree.children[6];
    
        const showIt = this.refs.showit
        showIt.contentEditable = true;

        window.event.cancelBubble = true 
        
        if(firTreeChild.children.length >= 4) {
            let  childThreeOne = firTreeChild.children[3]
            
            // let oneAntTree = childThreeOne.children[0].querySelector('.ant-tree-title')
            // oneAntTree.title = "对程序运行的参数可调整性，可扩展性，设计的外部参数配置";
            // let twoAntTree = childThreeOne.children[1].querySelector('.ant-tree-title')
            // twoAntTree.title = "数据库设计，数据文件设计"
            // let threeAntTree = childThreeOne.children[2].querySelector('.ant-tree-title')
            // threeAntTree.title = "软件本身对外的接口设计，比如多控制类的设计"
            // let fourAntTree = childThreeOne.children[3].querySelector('.ant-tree-title')
            // fourAntTree.title = "模块设计、划分，各个模块的关联，流程"
            // let fiveAntTree = childThreeOne.children[4].querySelector('.ant-tree-title')
            // fiveAntTree.title = "根据项目的设计进行执行开发框架搭建"
            
            //map => title
            let firFraArr = Array.from(childThreeOne.children);
            let firFraTitleArr = this.state.titles.moduleTitle[1].firFrameTitle;
            // console.log(firFraTitleArr)
            firFraArr.map( (con, i) => {
                
                con.querySelector('.ant-tree-title').title = firFraTitleArr[i]
             
            })
           
            console.log("======================框架设计")              
            
            //框架设计
            const addOne = this.refs.addOne;

            let h3 = document.createElement('h3');
            h3.textContent = firTreeChild.children[2].textContent;
            let childThreeOneArr = Array.from(childThreeOne.children)
            
            if(firTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && firTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addOne.children.length <= 0) {
                
                addOne.appendChild(h3)
                childThreeOneArr.map( (con, i) => {
                    let intext = con.querySelector('.ant-tree-title').textContent
                    let p = document.createElement('p')
                    p.textContent = intext
                    p.style.textIndent = "30px"
                    addOne.appendChild(p)
                })
                
             
            } 
            if(firTreeChild.children[1].className === 'ant-tree-checkbox') {
                addOne.innerHTML = ""
            }

        }


        //视图显示模块
        if(secTreeChild.children.length >= 4) {
            let viewSec = secTreeChild.children[3]

            let viewSec2D = viewSec.children[0]
            let viewSec3D = viewSec.children[1]

            const addTwo = this.refs.addTwo
            //addTwo
         
            let vih3 = document.createElement('h3');
            vih3.textContent = secTreeChild.children[2].textContent;
            let viewSecArr = Array.from(viewSec.children)

         
            console.log("============视图显示模块")

            if(secTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && secTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addTwo.children.length <= 0) {
                addTwo.appendChild(vih3)
                viewSecArr.map( (con, i) => {
                    let vitext = con.querySelector('.ant-tree-title').textContent;
                    let vidiv = document.createElement('div');
                    vidiv.className = `add2D${i}`
                    let h4 = document.createElement('h4');
                    h4.textContent = vitext;
                    h4.style.textIndent = "30px";
                    vidiv.appendChild(h4)
                    addTwo.appendChild(vidiv)

                    
                    const vipdiv = document.createElement('div')
                   
                    if(viewSec.children[0].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked"  && viewSec.children[0].children[0].className === "ant-tree-switcher ant-tree-switcher_open") {
                        
                        let viewSecInner = Array.from(viewSec.children[0].children[3].children)
                        viewSecInner.map( (con, i) => {
                            let viewTxt = con.querySelector('.ant-tree-title').textContent;
                            let p = document.createElement('p');
                            p.textContent = viewTxt;
                            p.style.textIndent = "50px"
                            vipdiv.appendChild(p)
                            vidiv.appendChild(vipdiv)

                        })
                    }
                    
                    //内层
                    if(viewSec.children[0].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && viewSec.children[0].children[0].className === "ant-tree-switcher ant-tree-switcher_close") {
                        vipdiv.innerHTML = ""
                    }

                    
                })
               
                
            }else if(secTreeChild.children[1].className === "ant-tree-checkbox") {
                addTwo.innerHTML = "";
            } 
            
            // //2D场景，3D场景
            if(secTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && secTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addTwo.children.length >= 3) {
                
                //2D场景
                if(viewSec.children[0].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked"  && viewSec.children[0].children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addTwo.children[1].children.length <= 1) {
                        
                    let viewSecInner2D = Array.from(viewSec.children[0].children[3].children)
                    let other2D = document.createElement('div')
                    viewSecInner2D.map( (con, i) => {
                        let oViewTxt = con.querySelector('.ant-tree-title').textContent;
                        let p = document.createElement('p');
                        p.textContent = oViewTxt;
                        p.style.textIndent = "50px";
                        other2D.appendChild(p)
                        addTwo.children[1].appendChild(other2D)
                    })

                }
                

                // 3D场景
                if(viewSec.children[1].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && viewSec.children[1].children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addTwo.children[2].children.length <= 1) {
                    let viewSecInner3D = Array.from(viewSec.children[1].children[3].children);
                    let other3D = document.createElement('div')
                    viewSecInner3D.map( (con, i) => {
                        let oViewTxt3D = con.querySelector('.ant-tree-title').textContent;
                        let p = document.createElement('p');
                        p.textContent = oViewTxt3D;
                        p.style.textIndent = "50px";
                        other3D.appendChild(p);
                        addTwo.children[2].appendChild(other3D)
                    })
                }
                
            }



            if(viewSec2D.children.length >= 4) {
                let viewSec2DOne = viewSec2D.children[3]

                // let oneAntTree2D = viewSec2DOne.children[0].querySelector('.ant-tree-title')
                // oneAntTree2D.title = "根据设计稿，对页面上的元素通过程序代码制作";
                // let twoAntTree2D = viewSec2DOne.children[1].querySelector('.ant-tree-title')
                // twoAntTree2D.title = "用户界面组件，将各自功能的代码段封装为独立的部分，包含了各自功能的代码段。例如：数据图表、表单、按钮组"
                // let threeAntTree2D = viewSec2DOne.children[2].querySelector('.ant-tree-title')
                // threeAntTree2D.title = "引用第三方UI组件库进行视图构建，例如：eCharts,highCharts"
                // let fourAntTree2D = viewSec2DOne.children[3].querySelector('.ant-tree-title')
                // fourAntTree2D.title = "由程序开发的动画，光影，粒子等特效"

                //map => view 2D
                let secView2DArr = Array.from(viewSec2DOne.children);
                let view2DtitleArr = this.state.titles.moduleTitle[2].secViewTitle.view2DTitle;
                secView2DArr.map( (con, i) => {
                    con.querySelector('.ant-tree-title').title = view2DtitleArr[i]
                })

            }

            if(viewSec3D.children.length >= 4) {
                let viewSec3DOne = viewSec3D.children[3]

                // let oneAntTree3D = viewSec3DOne.children[0].querySelector('.ant-tree-title')
                // oneAntTree3D.title = "3D场景，3D相机，地形编辑，烘培，灯光,材质，渲染等";
                // let twoAntTree3D = viewSec3DOne.children[1].querySelector('.ant-tree-title')
                // twoAntTree3D.title = "由程序开发的粒子，光晕，拖尾，物理引擎，shader等"
                // let threeAntTree3D = viewSec3DOne.children[2].querySelector('.ant-tree-title')
                // threeAntTree3D.title = "用户界面组件，将各自功能的代码段封装为独立的部分，包含了各自功能的代码段。例如：3D数据图表、地图导航等"
                // let fourAntTree3D  = viewSec3DOne.children[3].querySelector('.ant-tree-title')
                // fourAntTree3D.title = "引用第三方3D组件库进行视图构建，例如：视频流播放器等"

                //map => view 3D
                let secView3DArr = Array.from(viewSec3DOne.children);
                let view3DtitleArr = this.state.titles.moduleTitle[2].secViewTitle.view3DTitle;
                secView3DArr.map( (con, i) => {
                    con.querySelector('.ant-tree-title').title = view3DtitleArr[i]
                })

            }


        }

        //交互控制模块
        if(thirdTreeChild.children.length >= 4) {
            let controlThird = thirdTreeChild.children[3];
            let hardControl = controlThird.children[0];
            let softControl = controlThird.children[1];

            //addThree
            const addThree = this.refs.addThree;

            let ctrlh3 = document.createElement('h3');
            ctrlh3.textContent = thirdTreeChild.children[2].textContent;
            let ctrlArr = Array.from(controlThird.children)

            console.log("交互控制模块=======")

            if(thirdTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && thirdTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addThree.children.length <= 0) {
                addThree.appendChild(ctrlh3)
                ctrlArr.map( (con, i) => {
                    let vitext = con.querySelector('.ant-tree-title').textContent;
                    let vidiv = document.createElement('div');
                    vidiv.className = `add2D${i}`
                    let h4 = document.createElement('h4');
                    h4.textContent = vitext;
                    h4.style.textIndent = "30px";
                    vidiv.appendChild(h4)
                    addThree.appendChild(vidiv)

                    
                    if(controlThird.children[0].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked"  && controlThird.children[0].children[0].className === "ant-tree-switcher ant-tree-switcher_open") {
                        let ctrlThirdInner = Array.from(controlThird.children[0].children[3].children)
                        ctrlThirdInner.map( (con, i) => {
                            let viewTxt = con.querySelector('.ant-tree-title').textContent;
                            let p = document.createElement('p');
                            p.textContent = viewTxt;
                            vidiv.appendChild(p)
                            p.style.textIndent = "60px"

                        })
                        
                    }   
                })
                
            }else if(thirdTreeChild.children[1].className === "ant-tree-checkbox") {
                addThree.innerHTML = "";
            }

            //软硬件交互
            if(thirdTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && thirdTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addThree.children.length >= 3) {
                
                // //硬件
                if(controlThird.children[0].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked"  && controlThird.children[0].children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addThree.children[1].children.length <= 1) {
                        
                    let controlHard = Array.from(controlThird.children[0].children[3].children)
                    let otherHard = document.createElement('div')
                    controlHard.map( (con, i) => {
                        let oHardTxt = con.querySelector('.ant-tree-title').textContent;
                        let p = document.createElement('p');
                        p.textContent = oHardTxt;
                        p.style.textIndent = "60px";
                        otherHard.appendChild(p)
                        addThree.children[1].appendChild(otherHard)
                    })

                }
                

                // soft
                if(controlThird.children[1].children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && controlThird.children[1].children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addThree.children[2].children.length <= 1) {
                    
                    let controlSoft = Array.from(controlThird.children[1].children[3].children);
                    let otherSoft = document.createElement('div')
                    controlSoft.map( (con, i) => {
                        let oSoftTxt = con.querySelector('.ant-tree-title').textContent;
                        let p = document.createElement('p');
                        p.textContent = oSoftTxt;
                        p.style.textIndent = "60px";
                        otherSoft.appendChild(p);
                        addThree.children[2].appendChild(otherSoft)
                    })
                }
                
            }

            if(hardControl.children.length >= 4) {
                let hardControlOne = hardControl.children[3]

                // let oneAntTreeHard = hardControlOne.children[0].querySelector('.ant-tree-title')
                // oneAntTreeHard.title = "标准的输入/输出设备 例如：触摸屏、PPT翻页笔、打印机等";
                // let twoAntTreeHard = hardControlOne.children[1].querySelector('.ant-tree-title')
                // twoAntTreeHard.title = "定制开发的硬件产品 例如：单片机、传感器、投影仪等";
                // let threeAntTreeHard = hardControlOne.children[2].querySelector('.ant-tree-title')
                // threeAntTreeHard.title = `由第三方公司发布的完整的商用产品   例如：Hololens、HTC Vive、Gear VR等`
                // let fourAntTreeHard = hardControlOne.children[3].querySelector('.ant-tree-title')
                // fourAntTreeHard.title = `由第三方公司发布的商用配件产品   例如：Kinect、LeapMation、Surface Dial等`

                // map => hard
                let thiHardArr = Array.from(hardControlOne.children);
                let thiHardTitleArr = this.state.titles.moduleTitle[3].thiMutualTitle.mutualHardTitle;
                thiHardArr.map( (con, i) => {
                    con.querySelector('.ant-tree-title').title = thiHardTitleArr[i]
                })


                                        
            }

            if(softControl.children.length >= 4) {
                let softControlOne = softControl.children[3]

                // let oneAntTreeSoft = softControlOne.children[0].querySelector('.ant-tree-title')
                // oneAntTreeSoft.title = "TCP/IP通信、蓝牙通信等";
                // let twoAntTreeSoft = softControlOne.children[1].querySelector('.ant-tree-title')
                // twoAntTreeSoft.title = "播放、暂停、返回、快进/快退";
                // let threeAntTreeSoft = softControlOne.children[2].querySelector('.ant-tree-title')
                // threeAntTreeSoft.title = "同屏联动控制; 多屏联动控制按照同屏联动控制的工作量系数计算";
                // let fourAntTreeSoft = softControlOne.children[3].querySelector('.ant-tree-title')
                // fourAntTreeSoft.title = "页面交互事件的同步控制"

                let thiSoftArr = Array.from(softControlOne.children);
                let thiSoftTitleArr = this.state.titles.moduleTitle[3].thiMutualTitle.mutualSoftTitle;
                thiSoftArr.map( (con, i) => {
                    con.querySelector('.ant-tree-title').title = thiSoftTitleArr[i]
                })

            }
        }

        //模型/数据模块
        if(forTreeChild.children.length >= 4) {
            let modelDataForth = forTreeChild.children[3]

            // let oneMDAntTree = modelDataForth.children[0].querySelector('.ant-tree-title')
            // oneMDAntTree.title = "根据业务需求通过编码实现业务功能模块，负责系统领域业务的处理，负责逻辑性数据的生成、处理及转换。";
            // let twoMDAntTree = modelDataForth.children[1].querySelector('.ant-tree-title')
            // twoMDAntTree.title = "对整个业务产生的数据进行文件或数据库存储管理";
            // let threeMDAntTree = modelDataForth.children[2].querySelector('.ant-tree-title')
            // threeMDAntTree.title = "对各种原始数据进行分析、整理、计算等";
            // let fourMDAntTree = modelDataForth.children[3].querySelector('.ant-tree-title')
            // fourMDAntTree.title = "使用第三方提供的功能接口，例如：支付宝、微信等";

            //map => model
            let fourModelArr = Array.from(modelDataForth.children);
            let fourModelTitleArr = this.state.titles.moduleTitle[4].fourModelTitle;
            fourModelArr.map( (con, i) => {
                con.querySelector('.ant-tree-title').title = fourModelTitleArr[i]
            })


            console.log("======================模型/数据模块")

            const addFour = this.refs.addFour

            //right
            let h3 = document.createElement('h3');
            h3.textContent = forTreeChild.children[2].textContent;
            let modelDataForthArr = Array.from(modelDataForth.children)
            
            if(forTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && forTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addFour.children.length <= 0) {
                
                addFour.appendChild(h3)
                modelDataForthArr.map( (con, i) => {
                    let intext = con.querySelector('.ant-tree-title').textContent
                    let p = document.createElement('p')
                    p.textContent = intext
                    p.style.textIndent = "30px"
                    addFour.appendChild(p)
                })
                
            } 
            if(forTreeChild.children[1].className === 'ant-tree-checkbox') {
                addFour.innerHTML = ""
            }

        }

        //日志/调制模块
        if(fifTreeChild.children.length >= 4) {
            let logTestFifth = fifTreeChild.children[3]

            // let oneLTAntTree = logTestFifth.children[0].querySelector('.ant-tree-title')
            // oneLTAntTree.title = "程序运行/调试时的本地日志";
            // let twoLTAntTree = logTestFifth.children[1].querySelector('.ant-tree-title')
            // twoLTAntTree.title = "针对项目定制开发的调试工具，比如对接网络数据分析调试";
            // let threeLTAntTree = logTestFifth.children[2].querySelector('.ant-tree-title')
            // threeLTAntTree.title = "内存，帧率，渲染效果优化";
            // let fourLTAntTree = logTestFifth.children[3].querySelector('.ant-tree-title')
            // fourLTAntTree.title = "指对所设计程序与硬件、软件之间的兼容性的测试。例如：浏览器兼容测试 、分辨率兼容测试、跨系统兼容测试"

            //map => log
            let fifLogArr = Array.from(logTestFifth.children);
            let fifLogTitleArr = this.state.titles.moduleTitle[5].fifLogTitle;
            fifLogArr.map( (con, i) => {
                con.querySelector('.ant-tree-title').title = fifLogTitleArr[i]
            })



            //addFif
            const addFif = this.refs.addFif
            console.log(logTestFifth, "=====日志/调制")

            let h3 = document.createElement('h3');
            h3.textContent = fifTreeChild.children[2].textContent;
            let logTestFifthArr = Array.from(logTestFifth.children)
            
            //log-right
            if(fifTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && fifTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addFif.children.length <= 0) {
                
                addFif.appendChild(h3)
                logTestFifthArr.map( (con, i) => {
                    let intext = con.querySelector('.ant-tree-title').textContent
                    let p = document.createElement('p')
                    p.textContent = intext
                    p.style.textIndent = "30px"
                    addFif.appendChild(p)
                })
                
            } 
            if(fifTreeChild.children[1].className === 'ant-tree-checkbox') {
                addFif.innerHTML = ""
            }

        }


        //发布/部署
        if(sixTreeChild.children.length >= 4) {
            let releaseDepSixth = sixTreeChild.children[3]

            // let oneRDAntTree = releaseDepSixth.children[0].querySelector('.ant-tree-title')
            // oneRDAntTree.title = "多平台、多版本发布管理，例如：安卓、IOS、Windows等";
            // let twoRDAntTree = releaseDepSixth.children[1].querySelector('.ant-tree-title')
            // twoRDAntTree.title = "软件运行环境的运行及部署";

            //map => six
            let sixReleaseArr = Array.from(releaseDepSixth.children);
            let sixReleaseTitleArr = this.state.titles.moduleTitle[6].sixReleaseTitle;
            sixReleaseArr.map( (con, i) => {
                con.querySelector('.ant-tree-title').title = sixReleaseTitleArr[i]
            })


            //addSix
            const addSix = this.refs.addSix
            console.log(releaseDepSixth, '发布/部署')

            let h3 = document.createElement('h3');
            h3.textContent = sixTreeChild.children[2].textContent;
            let releaseDepSixthArr = Array.from(releaseDepSixth.children)
            
            //log-right
            if(sixTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && sixTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addSix.children.length <= 0) {
                
                addSix.appendChild(h3)
                releaseDepSixthArr.map( (con, i) => {
                    let intext = con.querySelector('.ant-tree-title').textContent
                    let p = document.createElement('p')
                    p.textContent = intext
                    p.style.textIndent = "30px"
                    addSix.appendChild(p)
                })
                // showIt.appendChild(div)
                
            } 
            if(sixTreeChild.children[1].className === 'ant-tree-checkbox') {
                addSix.innerHTML = ""
            }

        }

        //其他功能模块
        if(sevenTreeChild.children.length >= 4) {
            let otherModuleSeven = sevenTreeChild.children[3]

            // let oneOMAntTree = otherModuleSeven.children[0].querySelector('.ant-tree-title')
            // oneOMAntTree.title = "根据需求开发适配的单片机程序功能（视具体开发功能而定）";
            // let twoOMAntTree = otherModuleSeven.children[1].querySelector('.ant-tree-title')
            // twoOMAntTree.title = "独立的可通用功能模块程序";
            // let threeOMAntTree = otherModuleSeven.children[2].querySelector('.ant-tree-title')
            // threeOMAntTree.title = "根据需求开发特殊功能，例如：语音识别（中英）、人脸识别、"

            //map => sev
            let sevOtherArr = Array.from(otherModuleSeven.children);
            let sevOtherTitleArr = this.state.titles.moduleTitle[7].sevOtherTitle;
            sevOtherArr.map( (con, i) => {
                con.querySelector('.ant-tree-title').title = sevOtherTitleArr[i]
            })


            //addSev
            const addSev = this.refs.addSev;
            let h3 = document.createElement('h3');
            h3.textContent = sevenTreeChild.children[2].textContent;
            let otherModuleSevenArr = Array.from(otherModuleSeven.children)
            
            //log-right
            if(sevenTreeChild.children[1].className === "ant-tree-checkbox ant-tree-checkbox-checked" && sevenTreeChild.children[0].className === "ant-tree-switcher ant-tree-switcher_open" && addSev.children.length <= 0) {
                
                addSev.appendChild(h3)
                otherModuleSevenArr.map( (con, i) => {
                    let intext = con.querySelector('.ant-tree-title').textContent
                    let p = document.createElement('p')
                    p.textContent = intext
                    p.style.textIndent = "30px"
                    addSev.appendChild(p)
                })
                // showIt.appendChild(div)
                
            } 
            if(sevenTreeChild.children[1].className === 'ant-tree-checkbox') {
                addSev.innerHTML = ""
            }

        }


    }

 
    onExpand = (expandedKeys) => {
    //   console.log('onExpand', arguments);
    //   console.log(expandedKeys, 'expandedKeys')
    
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    onCheck = (checkedKeys, info) => {
        

        this.setState({ checkedKeys });
       
    }

    onSelect = (selectedKeys, info) => {

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
            {this.renderTreeNodes(this.state.datas.dataTree)}
            </Tree>

            <div className="show-text"  ref="showit" >
                <div className="addOne" ref="addOne"></div>
                <div className="addTwo" ref="addTwo">
                    <div className="addTwo2D" ref="addTwo2D">
                    
                    </div>
                    <div className="addTwo3D" ref="addTwo3D">

                    </div>
                </div>
                <div className="addThree" ref="addThree">
                    <div className="addThreeHard" ref="addThreeHard">

                    </div>
                    <div className="addThreeSoft" ref="addThreeSoft">

                    </div>
                </div>
                <div className="addFour" ref="addFour">

                </div>
                <div className="addFif" ref="addFif">

                </div>
                <div className="addSix" ref="addSix">

                </div>
                <div className="addSev" ref="addSev">

                </div>
            </div>
        </div>
      );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
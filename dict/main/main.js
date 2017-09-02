import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TextInput,
    Button,
    AlertIOS,
    Alert,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

// 获取屏幕的宽度
var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get("window");
var platForm = Platform.OS;


// 账号
class AccountText extends Component{
    constructor(props){
        super(props);
        this.state = {text: '798725549'};
    }
    handleChange(){
        alert(this.props.text);
    }
    render(){
        return(
            <View style = {loginStyles.accountView}>
                <Text>{this.state.text}</Text>
                <TextInput onChange={this.handleChange(this)} value = {this.state.text} underlineColorAndroid="transparent" style = {[loginStyles.inputTxt,loginStyles.accountTxt]} placeholder={"QQ号/手机号/邮箱"}></TextInput>
                <Image style = {[loginStyles.selectedImg]} source={require("../../images/down2.png")}></Image>
            </View>
        )
    }
}

// 密码
class PwdText extends Component{
    constructor(props){
        super(props);
        this.state = {text: 'lzl900628'};
    }
    render(){
        return (
            <View style = {loginStyles.pwdView}>
                <TextInput value = {this.state.text} secureTextEntry = {true} style = {[loginStyles.inputTxt,loginStyles.pwdTxt]} placeholder={"密码"}></TextInput>
            </View>
        )
    }
}


class QQLoginView extends Component{
    constructor(props){
        super(props);

        this.state = {
            account: '798725549',
            downImage: require("../../images/bst-down.png"),
            isShowOther: false,
            pwd: '111111',
            serverImage: require("../../images/selected.png"),
            isAccpet : true,
            errorText: '',
            loginBtn : {backgroundColor: 'transparent'}
        };
    }
    // 输入账号时的事件
    handleChangeAccount = (account) =>{
        this.setState({account: account})
    }
    // 输入密码的事件
    handleChangePwd = (pwd) =>{
        this.setState({pwd: pwd})
    }

    // 点击账号更多事件
    handlePressMore = ()=>{
        this.state.isShowOther == true?
            this.setState({downImage:require("../../images/bst-down.png"), isShowOther: !this.state.isShowOther}):
            this.setState({downImage:require("../../images/bst-up.png"), isShowOther: !this.state.isShowOther})

    }
    // 点击服务事件
    handlePressSer = ()=>{
        this.state.isAccpet == false?
            this.setState({serverImage: require("../../images/selected.png"), loginBtn: {backgroundColor : 'transparent'}}):
            this.setState({serverImage: require("../../images/unselected.png"), loginBtn: {backgroundColor : '#ccc'}});
        this.setState({isAccpet: !this.state.isAccpet});

    }

    // 登录事件
    execLogin = ()=>{
        if(this.state.isAccpet){
            Alert.alert("友情提示3333","账号：["+ this.state.account +"], 密码：["+ this.state.pwd+ "]  登录成功")
        }
    }

    // 界面
    render(){
        return (
            <View style = {loginStyles.containerView}>
                {/* logo 背景色 #ecedf1  蓝色 #00aced  */}
                <View style = {loginStyles.logoView}>
                    <Image style = {loginStyles.logo} source={require("../../images/qqicon1.png")}>
                    </Image>
                </View>

                {/* 账号  */}
                {/*<AccountText></AccountText>*/}
                <View style = {loginStyles.accountView}>
                    <TextInput textAlignVertical="center" maxLength={12} onChangeText={(account) => this.handleChangeAccount(account)} value = {this.state.account} underlineColorAndroid="transparent" style = {[loginStyles.inputTxt,loginStyles.accountTxt]} placeholder={"QQ号/手机号/邮箱"}></TextInput>

                    <TouchableOpacity onPress={() => this.handlePressMore()}>
                        <Image style = {[loginStyles.selectedImg, loginStyles.accMoreImg]} source={this.state.downImage}></Image>
                    </TouchableOpacity>
                </View>
                {
                    this.state.errorText == ''?(
                            null
                        ):(
                            alert(errorText)
                        )
                }

                {
                    this.state.isShowOther == true?(
                            <View style = {loginStyles.flexRow}>
                                <Image style = {loginStyles.accLogo} source={require("../../images/qqicon1.png")} />
                                <Image style = {loginStyles.accLogo} source={require("../../images/qqicon1.png")} />
                                <Image style = {loginStyles.accLogo} source={require("../../images/qqicon1.png")} />
                            </View>
                        ):(
                            null
                        )
                }

                {/* 密码  */}
                {/*<PwdText/>*/}
                <View style = {loginStyles.pwdView}>
                    <TextInput maxLength={16} onChangeText={(pwd)=>this.handleChangePwd(pwd)} value = {this.state.pwd} secureTextEntry = {true} style = {[loginStyles.inputTxt,loginStyles.pwdTxt]} placeholder={"密码"}></TextInput>
                </View>

                {/* 登录按钮 */}
                <View style = {[loginStyles.loginView]}>
                    <TouchableWithoutFeedback  onPress={this.execLogin}>
                        <View style = {[loginStyles.loginBtnView, this.state.loginBtn]}>
                            <Text style = {[loginStyles.loginBtn, loginStyles.comFontSize]}>{"登录"}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                {/* 帮助  */}
                <View style = {loginStyles.helpView}>
                    <Text style = {[loginStyles.pubColor,loginStyles.comFontSize]}>{"无法登录？"}</Text>
                    <Text style = {[loginStyles.pubColor,loginStyles.comFontSize]}>{"新用户注册"}</Text>
                </View>

                {/* 服务条款  */}
                <View style = {loginStyles.serView}>
                    <TouchableOpacity onPress={()=>this.handlePressSer()}>
                        <Image style = {loginStyles.selectedImg} source={this.state.serverImage}></Image>
                    </TouchableOpacity>

                    <Text style = {loginStyles.comFontSize} >我已阅读并同意 <Text style = {[loginStyles.pubColor,loginStyles.comFontSize]}>服务条款</Text>  </Text>
                </View>



            </View>


        )
    }
}


const loginStyles = StyleSheet.create({
    containerView: {
        backgroundColor:  "#ecedf1",
        flex: 1,
    },
    flexRow: {
      flexDirection: 'row',
    },
    comFontSize: {
      fontSize: 18
    },
    logoView:{
        marginTop: platForm == 'ios'? 40:20,
        alignItems: 'center',
    },
    logo: {
        height: 120,
        width: 120,
        borderRadius: 60,
        paddingTop: 30,
    },
    inputTxt: {
        height: 50,
        lineHeight: 50,
        textAlign: "center",
        letterSpacing : 100000,
    },
    accountTxt: {
        width: width - 35,
        paddingLeft: 35,
    },
    accLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 5,
    },
    accMoreImg: {
        width: 25,
        height: 25,
    },
    pwdTxt: {
        paddingLeft: 35,
        paddingRight: 35,
    },
    accountView : {
        backgroundColor: "#fff",
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center',
    },
    pwdView : {
        backgroundColor: "#fff",
    },
    loginView: {
        backgroundColor: '#00aced',
        height: 50,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.94,
        marginLeft: width * 0.03,
        borderRadius: 5,
    },
    loginBtnView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.94,
    },
    loginBtn : {
        color: "#fff"
    },
    helpView: {
        marginTop: 15,
        flexDirection: 'row',
        width: width * 0.92,
        marginLeft: width * 0.03,
        justifyContent: 'space-between',
    },
    serView : {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        width: width * 0.92,
        marginLeft: width * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedImg : {
        height : 24,
        width: 24,
    },
    pubColor: {
        color:  "#00aced",
    },

});


export default QQLoginView;




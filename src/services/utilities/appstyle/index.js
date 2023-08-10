import { StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"


export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    headerImage: {
        marginTop: responsiveHeight(6),
        marginLeft: responsiveWidth(18),
        width: responsiveWidth(57),
        height: responsiveHeight(15),
    },
    welcomesignuptext: {
        marginLeft: responsiveWidth(17),
        marginRight: responsiveWidth(17),
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(3.3),  
      },
    welcomeTextStyle: {
        justifyContent: 'space-around',
        fontSize: responsiveFontSize(3),
      },
    welcomeLoginView:{
        flex: 0.3,  justifyContent: 'flex-end',
    },
    headerImageView:{
        flex: 1,  justifyContent: 'space-around', 
    },
    
    splashcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    splash1backgroundcolor: {
        backgroundColor: 'black',
    },
    splash2backgroundcolor: {
        backgroundColor: '#F6CD5B'
    },
    splash2logo: {
        width: responsiveWidth(50),
        height: responsiveHeight(30),
    },
   
    logintextStyle: {
        marginLeft: responsiveWidth(2),
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(3.3),
      },
    forgetscreentextstyle: {

        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        marginTop: responsiveHeight(4),
        fontSize: responsiveFontSize(3.3),
    },
    textfontfamily: {
        fontFamily: 'Oxygen',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    imageInModalCom:{
        alignSelf: 'center', marginTop: responsiveHeight(4),
    },
    nameText: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        fontSize: responsiveFontSize(3),
      },
    resettextinmodal: {
        marginTop: responsiveHeight(8),
        marginLeft: responsiveWidth(12),
        marginRight: responsiveWidth(12),
        fontSize: responsiveFontSize(3),
    },
    
    textInputFieldMainView: {
        flex: 1,
        borderRadius: responsiveWidth(3),
        width: responsiveWidth(90),
        backgroundColor: '#EEEEE0',
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(1),
      },
    forgetscreenemailLabelView: {
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(3),
        borderRadius: responsiveWidth(3),
        width: responsiveWidth(90),
        height: responsiveHeight(10),
        backgroundColor: '#EEEEE0',
    },
      
    textlabel: {
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(4),
        width: responsiveWidth(50),
        color: 'black'
    },
   
    textInputImage: {
        marginLeft: responsiveWidth(1),
        height: responsiveHeight(3),
        width: responsiveWidth(5),
    },
    
    checkbox: {
        alignSelf: 'center',
        marginLeft: responsiveWidth(4),
      },
    checkBoxOuterView:{ 
        flexDirection: 'row', 
        flex: 2, 
        marginTop:responsiveHeight(1)
    },
    
    inputTextField: {
        marginLeft: responsiveWidth(4),
        width: responsiveWidth(70),
        color: 'black',
    },
    mainModalView: {
        marginTop: responsiveHeight(4),
        borderRadius: responsiveWidth(10),
        width: responsiveWidth(70),
        height: responsiveHeight(8),
        backgroundColor: 'black',
        alignSelf: 'center',
    },
    passLinkSetText: {
        color: 'white',
        alignSelf: 'center',
        paddingTop: responsiveHeight(2),
    },
    viewInModal: {
        height: responsiveHeight(50),
        backgroundColor: 'white',
        borderTopLeftRadius: responsiveWidth(15),
        borderTopRightRadius: responsiveWidth(15),
    },
   
    forgetpassmodalpic: {
        alignSelf: 'center',
        marginTop: 40
    },
    loginButtonView: {
        marginTop: responsiveHeight(3),
        height:responsiveHeight(6),
        borderRadius: responsiveWidth(10),
        width: responsiveWidth(70),
        backgroundColor: 'black',
        alignSelf: 'center',
        flex: 1,
        marginBottom: responsiveHeight(2),
      },
      
      createAccountView: {
        borderRadius: responsiveWidth(10),
        width: responsiveWidth(70),
        height: responsiveHeight(7),
        backgroundColor: '#B7B7B780',
        alignSelf: 'center',
      },
      loginButtonText: {
        color: 'white',
        alignSelf: 'center',
        paddingTop: responsiveHeight(2),
      },
    
    blackButtonView: {
        marginTop: responsiveHeight(6),
        borderRadius: responsiveHeight(5),
        width: responsiveWidth(70),
        height: responsiveHeight(8),
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    
    underLineView:{
        marginRight: responsiveWidth(24),
        height:responsiveHeight(1),
        borderColor:'#F6CD5B', 
        width:responsiveWidth(30),
        borderRadius:50,
        backgroundColor:'#F6CD5B',
        alignSelf:'center',
      },
      textColor: {
        color: 'black'
      },
      colorWhite: {
        color: 'white'
      },
      centerAlign: {
        alignSelf: 'center'
      },
      dontHaveAccountText: {
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(1),
      },
      topPadding: {
        paddingTop: responsiveHeight(2),
      },
      
      touchableForget: {
        paddingLeft: responsiveWidth(35),
      },
      chatheaderContainer: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        backgroundColor: '#3498db', // Customize the background color
        paddingVertical: 8,
        paddingHorizontal: 12,
      },
      chatheaderTitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
      viewInModalcomp: {
        marginVertical:responsiveHeight(45),
        justifyContent: 'flex-end',
        height: responsiveHeight(50),  
        borderTopLeftRadius: responsiveWidth(15), 
        borderTopRightRadius: responsiveWidth(15),
      },
      modalImageStyle:{
        alignSelf: 'center', marginTop: responsiveHeight(4), 
    },
    nameModalText: {
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        fontSize: responsiveFontSize(3),
      },
      continueButtonViewModal: {
        marginTop: responsiveHeight(3), 
        borderRadius: responsiveWidth(10), 
        width: responsiveWidth(65), 
        height: responsiveHeight(7), 
        backgroundColor: 'black', 
      },
      continueButtonTextModal: {
        color: 'white', alignSelf: 'center', paddingTop: responsiveHeight(2),
      },
      profileHeaderView1:{
        flex: 0.5, flexDirection: 'row',
      },
      profileHeaderView2:{
        flex: 0.3, backgroundColor: '#F6CD5B',
      },
      profileHeaderImageView:{
        backgroundColor: '#F6CD5B', flex: 4.5, justifyContent: 'space-around',
      },
      innerTextView: {
        flex: 1,
        alignItems: 'center',
      },
      chatText: {
        fontFamily: 'Oxygen',
        fontWeight: 'bold',
        padding: responsiveHeight(1),
        color: 'black',
      },
      profilescrchat1font:{
        fontSize: responsiveFontSize(3),
      },
      profilescrchat2font:{ 
        fontSize: responsiveFontSize(2.7),
      },
      profilebodyContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      profilecenterimage: {
        zIndex: -1,
        position: 'absolute',
      },
      ringimage: {
        position: 'absolute',
        zIndex: -1,
      },
      profileImagesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex:1,
      },
      imageradius: {
        borderRadius: responsiveWidth(10),
      },
      imageNameColor: {
        color: 'black',
      },
})
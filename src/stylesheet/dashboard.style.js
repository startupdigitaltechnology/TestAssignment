import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default {
    container: {
        flex: 1,
    },
    buttonSegment: {
        flex: 0.5,
        height: '100%',
        // backgroundColor:'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputSearchStyle: {
        height: 60,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        width: '70%',
        color: 'black',
        marginLeft: '15%',
    },
    textSegmentButton: {
        color: 'black',
        fontSize: 16,
    },
    flatListSearchbar: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: -20,
        alignSelf: 'center'
    },
    viewSingleLine: {
        //marginTop:'1%',
        width: '100%',
        height: '0.3%',
        backgroundColor: 'lightgray',
        marginBottom: '3%'

    },
    viewSingleLineLeft: {
        backgroundColor: 'rgb(246, 205, 74)',
        flex: 0.5,
        alignSelf: 'flex-start',
        height: '100%',
        width: '50%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    },
    viewSingleLineEmpty: {
        backgroundColor: 'transparant',
        flex: 0.5,
        alignSelf: 'flex-start',
        height: '100%',
        width: '50%',
    },
    viewSingleLineRight: {
        backgroundColor: 'rgb(246, 205, 74)',
        flex: 0.5,
        alignSelf: 'flex-end',
        height: '100%',
        width: '50%',
        right: '1%',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    optionButton: {

    },
    scrollView: {
        width: '100%',
        paddingLeft:10,
       
      

        //height: 64,
        backgroundColor: 'transparant',
        // justifyContent: 'center',
        // alignSelf:'center'
    },
    flatListCurrentActivity: {
        flex: 0.75,
        marginTop: '2%',
        // backgroundColor: '#ffffff',
    },
    flatlistNotification:{
        marginTop: '2%',
        flex: 0.95,
    },
    viewInner: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderWidth: 0.4,
        // borderLeftWidth: 0.5,
        shadowColor: 'lightGray',
        // shadowOffset:
        //  { width: 1.0, 
        //     height: 2 },
         
        shadowOpacity: 0.4,
        shadowRadius: 1.5,
        elevation: 3,
        borderColor: 'rgba(0, 0,0, 0.3)',

    },
    viewOuter: {
        padding: 10,
    },
    viewContainNumber: {
        right: 20,
        top: 20,
        position: 'absolute',
    },

    titleBookConfirmation: {
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        marginTop: 30
    },
   
    
    textTimeAndDate: {
        color: '#656565',
        fontSize: 13,
    },
    textButton: {

        padding: 10,

        //fontSize: 13,
    },
    textTopBtn: {
     //   paddingTop: 10
    },
    buttonLeft: {
        borderRadius: 20,
        height: 55,
        width: 155,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        // alignSelf: 'center',
        //alignSelf:'flex-start'
        marginTop: '1%',
        marginBottom: '1%',
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonCenter: {
        borderRadius: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        // alignSelf: 'center',
        marginTop: '1%', marginBottom: '1%',
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    buttonRight: {
        borderRadius: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginTop: '1%', marginBottom: '1%',
        borderColor: 'lightgray',
        borderWidth: 1,

        // alignSelf: 'center',
        // marginLeft: '2%',
        //alignSelf:'flex-end',
    },

    buttonNotSelected: {
        borderRadius: 20,
        height: 40,
        width: "auto",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',

        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginRight:10,
        // alignSelf: 'center',
        // marginLeft: '2%',
        //alignSelf:'flex-end',
    },
    buttonSelected: {
        borderRadius: 20,
        height: 40,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: .4,
        //     height: .11
        // },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginRight:10,
        backgroundColor: 'white',
        // alignSelf: 'center',
        //alignSelf:'flex-start'

        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'black',
        borderWidth: 1,
    },

  textSelected:{
    color: 'black',
  },

  textNotSelected:{
      color:'lightgray'
  }
}
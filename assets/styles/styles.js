import { StyleSheet } from "react-native-web";

const view = StyleSheet.create({
    container: {flex:1,
    },
    alignViews:{
        alignItems:'center',
        justifyContent:'center'
    },
    textTitle:{
        marginBottom:'5%',
        fontSize:22
    }
    }); 
const viewChilds = StyleSheet.create({
    container: {
        flex:1,
    },
    containerBackground:{
        backgroundColor:'#00000020',
        padding:'3%'
    },
    containerDirection:{
        flexDirection:'row'
    },
    containerDatos:{
        marginTop:'3%',
        marginBottom:'3%'
    },
    containerInput:{
        marginLeft: '5%',
        width:'100%',
        flex:1
    },
    containerButton:{
        margin:'5%',
        width:'100%'
    },
    button:{
        margin:'2%',
        backgroundColor:'#33BCFF',
        padding:'2%',
        borderRadius:5
    },
    textButton:{
        fontSize:14,
        color: '#fff'
    }
});

export {view,viewChilds}
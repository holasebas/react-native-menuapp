import React, {Component} from 'react'
import {
        View,
        Text,
        Animated,
        Dimensions,
        StyleSheet
} from 'react-native'
const width= Dimensions.get('window').width
const height= Dimensions.get('window').height

export default class platillo extends Component{
        constructor(props) {
          super(props);
        
          this.state = {
                descriptionY: new Animated.Value(-250),
                descriptionX: new Animated.Value(-50),
                backgroundY: new Animated.Value(80),
                backgroundX: new Animated.Value(-50),
                imgY: new Animated.Value(-30),
                imgX: new Animated.Value(100),
                onScroll:this.props.onScroll ? this.showPlatillo() : this.hidePlatillo(),
                animated:false,
               
          };
         
        }


        showPlatillo(){
              
            Animated.timing(                            
                this.state.descriptionY,                     
                    {
                        toValue:0,
                        duration:500                             
                    }
                 ).start();
             Animated.timing(                            
                this.state.descriptionX,                     
                    {
                        toValue:0,
                        duration:500                             
                    }
                 ).start();
            Animated.timing(                            
                this.state.backgroundY,                     
                    {
                        toValue:0,
                        duration:500                             
                    }
                 ).start();
            Animated.timing(                            
                this.state.backgroundX,                     
                    {
                        toValue:0,
                        duration:500                             
                    }
                 ).start();
            Animated.timing(                            
                this.state.imgY,                     
                    {
                        toValue:0,
                        duration:500                             
                    }
                 ).start();
            Animated.timing(                            
                this.state.imgX,                     
                    {
                        toValue:0,
                        duration:500                             
                    }
                 ).start();

        }

        hidePlatillo(){
                console.log("Hide")
        }
       
        render(){
                return(


                        <View style={{height:height}}>
                        {
                                this.props.onScroll ? this.showPlatillo() : console.log("No")
                                        
                                
                        }
                        <Animated.View style={{height:350, 
                                                backgroundColor:this.props.bgColor, 
                                                marginLeft:10, 
                                                shadowOffset:{
                                                    width: 10,
                                                    height: 10,
                                                },
                                                shadowColor: 'black',
                                                shadowOpacity: .3,
                                                transform:[{
                                                    translateY:this.state.backgroundY
                                                },{
                                                    translateX:this.state.backgroundX
                                                }]}}>
                        </Animated.View>

                        

                        <Animated.Image source={this.props.imgPlatillo} 
                                style={{
                                        position:'absolute', 
                                        opacity:1,
                                        width:width, 
                                        height:250,
                                        zIndex:1, 
                                        marginTop:30,
                                        transform:[{
                                            translateY:this.state.imgY
                                        },{
                                            translateX:this.state.imgX
                                        }]
                                                }}>
                         </Animated.Image>

                         <Animated.View style={{
                                        width:300,
                                        height:250,
                                        marginLeft:width-300,
                                        marginTop:230, 
                                        backgroundColor:'#FFF',
                                        position:'absolute',
                                        zIndex:2,
                                        shadowOffset:{
                                                    width: -10,
                                                    height: 10,
                                                },
                                        shadowColor: 'black',
                                        shadowOpacity: .3,
                                        transform:[{
                                                translateY:this.state.descriptionY
                                        },{
                                                translateX:this.state.descriptionX    
                                        }

                                        ]
                                }}>
                                <Text style={styles.title}>{this.props.title}</Text>
                                <Text style={styles.text}>{this.props.text}</Text>
                        </Animated.View>

                        <Animated.Image source={this.props.imgBg} 
                                style={{
                                        position:'absolute', 
                                        marginLeft:0,
                                        opacity:1,
                                        width:200, 
                                        height:150,
                                        zIndex:-1, 
                                        marginTop:height/2.5}}>
                         </Animated.Image>
                
                        <Animated.View
                        
                                style={{
                                        justifyContent:'center',
                                        alignItems:'center',
                                        width:width-84,
                                        height:100000,
                                        marginLeft:42,
                                      
                                        position:'absolute',
                                        backgroundColor:'#2D3A4B',
                                        zIndex:-1,
                                        
                                        opacity:1,
                                        transform:[{
                                                translateY:0
                                        }]
                                }}>
                        
                                        
                        </Animated.View>
                </View>


                
                


                        )
        }
}

const styles = StyleSheet.create({
    title:{
        justifyContent:'center',
        alignItems:'center',
        color:'#000',
        textAlign:'center',
        paddingTop:50,
        fontFamily:'Menlo-Bold',
        color:'#444'
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        color:'#000',
        textAlign:'center',
        paddingTop:10,
        fontFamily:'Menlo-Bold',
        color:'#777',
        fontSize:12

    }

})










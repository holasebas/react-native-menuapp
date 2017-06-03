import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Animated
} from 'react-native';


const width= Dimensions.get('window').width
const height= Dimensions.get('window').height

import Platillo from './platillo'


export default class menu extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	traslateBg: new Animated.Value(100),
	  	traslateTitle: new Animated.Value(200),
	  	opacityTitle: new Animated.Value(0),
	  	description: new Animated.Value(200),
	  	descriptionOpacity: new Animated.Value(0),
	  	onScroll:false,
	  	backImage: new Animated.Value(50),
	  	backImageOpacity:new Animated.Value(0),
	  	animateItem1:false,     
	  	animateItem2:false, 
	  	animateItem3:false, 
	  	Item1Y:0,     
	  	Item2Y:0,
	  	Item3Y:0        
	  	
	  };
	}

	ScrollUp(){
		Animated.timing(                            
	      this.state.traslateBg,                     
	      {
	        toValue:0,
	        duration:500                             
	      }
	    ).start();
	}

	ScrollDown(){
			Animated.timing(                            
	      this.state.traslateBg,                     
	      {
	        toValue:0,
	        duration:700                             
	      }
	    ).start();
	}

	componentDidMount(){
	 	Animated.timing(                            
	      this.state.traslateTitle,                     
	      {
	        toValue: 0,
	        delay:200,
	        duration:800                             
	      }
	    ).start(); 
	 	Animated.timing(                            
	      this.state.opacityTitle,                     
	      {
	        toValue: 1,
	        delay:200,
	        duration:1200                             
	      }
	    ).start(); 
	    Animated.timing(                            
	      this.state.description,                     
	      {
	        toValue: 0,
	        delay:600,
	        duration:800                             
	      }
	    ).start(); 
	 	Animated.timing(                            
	      this.state.descriptionOpacity,                     
	      {
	        toValue: 1,
	        delay:600,
	        duration:1200                             
	      }
	    ).start();

	    Animated.timing(                            
	      this.state.backImage,                     
	      {
	        toValue: -10,
	        delay:1500,
	        duration:400                             
	      }
	    ).start();

	     Animated.timing(                            
	      this.state.backImageOpacity,                     
	      {
	        toValue: 1,
	        delay:1500,
	        duration:400                             
	      }
	    ).start();  
	}

	handleScroll(event){


		if(event.nativeEvent.contentOffset.y > width/2){
			
			if(!this.state.onScroll){
				this.setState({onScroll:true})
				this.ScrollUp()
				
			}
			
		}
	
		if(event.nativeEvent.contentOffset.y > this.state.Item1Y - 200){

			if(!this.state.animateItem1){
				this.setState({animateItem1:true})
				
			}
			
		}

		if(event.nativeEvent.contentOffset.y > this.state.Item2Y - 200){

			if(!this.state.animateItem2){
				this.setState({animateItem2:true})
				
			}
			
		}


			if(event.nativeEvent.contentOffset.y > this.state.Item3Y - 200){

			if(!this.state.animateItem3){
				this.setState({animateItem3:true})
				
			}
			
		}
		

			


	}
  render() {
    return (

<View style={styles.container}>
    <Animated.View style={{
    	width:width,
    	height:height,
    	backgroundColor:'#d8dfe7',
    	transform:[{
    		translateY:this.state.traslateBg
    	}]
    }}>

    
       
        
        	  <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll.bind(this)} style={{ backgroundColor:'transparent', flex:1, borderColor:'red'}}>

   			<View>
		   		<Animated.Image source={require('./bg3.png')} 
		      		style={{
		      			position:'absolute', 
		      			marginLeft:this.state.backImage,
		      			opacity:this.state.backImageOpacity,
		      			width:200, 
		      			height:150,
		      			zIndex:-1, 
		      			marginTop:height/3}}>
		     	 </Animated.Image>
        	
        		<Animated.View
        		
        			style={{
        				justifyContent:'center',
        				alignItems:'center',
        				width:width-84,
        				height:height,
        				marginLeft:42,
        				backgroundColor:'#2D3A4B',
        				
        				opacity:this.state.opacityTitle,
        				transform:[{
        					translateY:this.state.traslateTitle
        				}]
        			}}>
        		
        			<Text style={styles.title}>MENU</Text>
	        			<Animated.View
						onLayout={({nativeEvent}) => {

	        				// console.log(nativeEvent.layout.y)

	        			}}
	        			 style={{
	        				width:width-100,
	        				marginLeft:30,
	        				marginLeft:98,
	        				marginTop:-30,
	        				padding:30,
	        				backgroundColor:'rgba(65,77,89, .8)',
	        				zIndex:-1,
	        				shadowOffset:{
					            width: 8,
					            height: 5,
					        },
					        shadowColor: 'black',
					        shadowOpacity: .3,
					        opacity:this.state.descriptionOpacity,
	        				transform:[{
	        					translateY:this.state.description
	        				}]
	        			}}>
	        			<Text style={styles.subtitle}>Title menu</Text>
	        			<Text style={styles.text}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto </Text>
	        		</Animated.View>
        		</Animated.View>
        	</View>


        	<View onLayout={({nativeEvent}) => { this.setState({Item1Y:nativeEvent.layout.y}) }}>
        	<Platillo 
        		imgPlatillo={require('./plat1.jpg')}
        		imgBg={require('./bg2.png')}
        		bgColor="#b0b445"
        		title="¿Qué es Lorem Ipsum?"
        		text="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño"
        		onScroll={this.state.animateItem1}


        	 />
        	 </View>
        	



       		<View  onLayout={({nativeEvent}) => { this.setState({Item2Y:nativeEvent.layout.y}) }}>
        	<Platillo 
        		imgPlatillo={require('./plat2.jpg')}
        		imgBg={require('./bg3.png')}
        		bgColor="#B45F04"
        		title="¿Qué es Lorem Ipsum?"
        		text="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño"
        		onScroll={this.state.animateItem2}

        	 />
        	 </View>


        	 <View  onLayout={({nativeEvent}) => { this.setState({Item3Y:nativeEvent.layout.y}) }}>
        	<Platillo 
        		imgPlatillo={require('./plat3.jpg')}
        		imgBg={require('./bg2.png')}
        		bgColor="#8A0829"
        		title="¿Qué es Lorem Ipsum?"
        		text="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño"
        		onScroll={this.state.animateItem3}

        	 />
        	 </View>
      





        	
        		





        		
        		


        	
        		 </ScrollView>
       
      </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
    backgroundColor: '#d8dfe7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  background:{
  	width:width,
  	height:height,

  },
  title:{
	width:width-84,
  	fontSize:60,
  	color:'#FFF',

  	fontWeight:"bold",
  	letterSpacing:25,
  	
  	
  	textAlign:'center',
  	textShadowOffset:{
		width: 5,
	 	height: 10,
	},
	textShadowColor: '#282828',
	textShadowRadius: 5,
	
	fontFamily:'Menlo-Bold',
	backgroundColor:'transparent'
  	

  },
  subtitle:{
  	fontFamily:'BodoniSvtyTwoITCTT-Bold',
  	color:'#FFF',
  	fontSize:20,
  	letterSpacing:3,
  	paddingBottom:10,

  },
  text:{
  	fontFamily:'Thonburi-Light',
  	color:'#FFF',
  	fontSize:12,
  }
});

AppRegistry.registerComponent('menu', () => menu);

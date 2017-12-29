import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    state:string
    
  }
  Etat :string ;  

  constructor(
    public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    private storage:Storage) {

  }

//Initially the last stored location will be loaded , if it's the first time the default location is France,Paris

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Paris',
          state: 'France'
        }
      }

//Getting the weather information

      this.weatherProvider.getWeather(this.location.city, this.location.state)  .subscribe(weather => {
          this.weather = weather.current_observation;
        
     
/* You can use Icons from Wunderground but I used my Personal Icons because they look better
 click (+) to drop down
 */

     switch(this.weather.icon_url) {
            
            //Daytime icons **************************************

             case "http://icons.wxug.com/i/c/k/chanceflurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 
             
             case "http://icons.wxug.com/i/c/k/chancerain.gif": { 
              this.Etat = '../../assets/rain.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/chancesleet.gif": { 
              this.Etat = '../../assets/sleet.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/chanceflurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/flurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/flurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 
             
             case "http://icons.wxug.com/i/c/k/chancerain.gif": { 
              this.Etat = '../../assets/rain.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/rain.gif": { 
              this.Etat = '../../assets/rain.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/chancesnow.gif": { 
              this.Etat = '../../assets/snow.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/snow.gif": { 
              this.Etat = '../../assets/snow.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/chancetstorms.gif": { 
              this.Etat = '../../assets/storm.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/tstorms.gif": { 
              this.Etat = '../../assets/storm.png';
                break; 
             } 
             
             case "http://icons.wxug.com/i/c/k/clear.gif": { 
              this.Etat = '../../assets/sun.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/sunny.gif": { 
              this.Etat = '../../assets/sun.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/cloudy.gif": { 
              this.Etat = '../../assets/cloud.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/fog.gif": { 
              this.Etat = '../../assets/fog.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/hazy.gif": { 
              this.Etat = '../../assets/fog.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/mostlycloudy.gif": { 
              this.Etat = '../../assets/sun_cloud.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/mostlysunny.gif": { 
              this.Etat = '../../assets/sun_cloud.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/partlycloudy.gif": { 
              this.Etat = '../../assets/sun_cloud.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/partlysunny.gif": { 
              this.Etat = '../../assets/sun_cloud.png';
                break; 
             } 
             

             //Night time Icons*************************************

             case "http://icons.wxug.com/i/c/k/nt_chanceflurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 
             
             case "http://icons.wxug.com/i/c/k/nt_chancerain.gif": { 
              this.Etat = '../../assets/rain.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_chancesleet.gif": { 
              this.Etat = '../../assets/sleet.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_chanceflurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_flurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_flurries.gif": { 
              this.Etat = '../../assets/flurries.png';
                break; 
             } 
             
             case "http://icons.wxug.com/i/c/k/nt_chancerain.gif": { 
              this.Etat = '../../assets/rain.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_rain.gif": { 
              this.Etat = '../../assets/rain.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_chancesnow.gif": { 
              this.Etat = '../../assets/snow.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_snow.gif": { 
              this.Etat = '../../assets/snow.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif": { 
              this.Etat = '../../assets/storm.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_tstorms.gif": { 
              this.Etat = '../../assets/storm.png';
                break; 
             } 
             
             case "http://icons.wxug.com/i/c/k/nt_clear.gif": { 
              this.Etat = '../../assets/nt_clear.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_sunny.gif": { 
              this.Etat = '../../assets/.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_cloudy.gif": { 
              this.Etat = '../../assets/night_cloud.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_fog.gif": { 
              this.Etat = '../../assets/fog.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_hazy.gif": { 
              this.Etat = '../../assets/fog.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif": { 
              this.Etat = '../../assets/night_cloud.png';
                break; 
             } 
             case "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif": { 
              this.Etat = '../../assets/night_cloud.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_mostlysunny.gif": { 
              this.Etat = '../../assets/nt_clear.png';
                break; 
             } 

             case "http://icons.wxug.com/i/c/k/nt_partlysunny.gif": { 
              this.Etat = '../../assets/nt_clear.png';
                break; 
             } 

             default: { 
                console.log("Invalid choice"); 
                break;              
             } 
          }
            
    
        });
    });
  }

}

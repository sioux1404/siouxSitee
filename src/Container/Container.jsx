import React,{Component} from "react";
import './Container.scss'
import beer from '../assets/icons/beer.png'
import burger from '../assets/icons/burger.png'
import cereal from '../assets/icons/cereal.png'
import eggs from '../assets/icons/eggs.png'
import hotdog from '../assets/icons/hotdog.png'
import meat from '../assets/icons/meat.png'
import pizza from '../assets/icons/pizza.png'
import sandwich from '../assets/icons/sandwich.png'
import CardComponent from "../Card/Card";



class ContainerComponent extends Component {
    state = {
        categories : [
            {
              name: "beer",
              img: beer,
              options: ["ipa","bbbb", "aaaa"]
            },
             {
              name: "burger",
              img: burger,
              options: ["ipasss","basdasbbb", "aadsadaa"]
            },
             {
              name: "cereal",
              img: cereal,
              options: ["icdscpa","bvdfvbbb", "areefaaa"]
            },
             {
              name: "eggs",
              img: eggs,
              options: ["ipcdsca","bbbwqeqweb", "aacdcsaa"]
            },
             {
              name: "hotdog",
              img: hotdog,
              options: ["ipl,ioa","bbbuyjyujb", "aaa546546a"]
            },
             {
              name: "meat",
              img: meat,
              options: ["i45435pa","byyjybbb", "argrtgtraaa"]
            },
               {
              name: "pizza",
              img: pizza,
              options: ["ipvdfvdfga","bbbfdsfdsfb", "adsfsdfaaa"]
            },
                  {
              name: "sandwich",
              img: sandwich,
              options: ["ipdsfdsfa","verfrdfbbbb", "acffeaaa"]
            },
        ]
    }

    render(){
        return(
          <section className="menu-container">
            <div className="bars">
              HELLO
            </div>
            <section className="top">
      
            </section>
            <section className="bottom">
                {
                    this.state.categories.map((category) => {
                        return <CardComponent category={category}></CardComponent>
                    })
                }
            </section>
          </section>
        )
    }
}

export default ContainerComponent
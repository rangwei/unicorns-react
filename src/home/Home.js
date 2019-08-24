// Home.js
import React, { Component } from "react";
import data from "./data.json";

class Home extends Component {

	constructor (props) {
        super(props);
        
        this.featuredCardsRefs = [];
        this._navToDetail = this.navToDetail.bind(this);
        this.state = {data};
    }
   
    // Bind for the "headerClick" event of the ui5-card
    componentDidMount() {
        const inventoryCardRef = this.featuredCardsRefs[0];
   
        if (inventoryCardRef) {
            inventoryCardRef.addEventListener("headerClick", this._navToDetail);
        }
    }
   
    // Change the hash and let the router switch the views
    navToDetail() {
        this.props.history.push("/detail");
    }

    render(){
        const data = this.state.data;

        return(
            <div className="app-content">
       
                <ui5-title level="H3">Featured</ui5-title>
                <section className="section">
                {data.featured.map((dataObj, index) => 
                <ui5-card
                    ref={ref => this.featuredCardsRefs[index] = ref}
                    key={dataObj.key}
                    heading={dataObj.heading}
                    subtitle={dataObj.subtitle}
                    status={dataObj.status}
                    class="ui5card"
                    header-interactive
                >
                        <ui5-list separators="Inner">
                        {dataObj.items.map(item =>
                        <ui5-li
                            key={item.key}
                            icon={item.icon}
                            description={item.description}
                            info={item.info}
                            info-state={item.infoState}
                            class="ui5list-item">{item.title}</ui5-li>
                        )}
                        </ui5-list>
                </ui5-card>
                )}
                </section>
            </div>
        );
    }
}

export default Home;
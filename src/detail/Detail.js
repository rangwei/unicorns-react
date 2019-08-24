import React, { Component } from "react";
import "./Detail.css";
import unicorns from "../data/unicorns.json";

// These are the web components that we will be using here
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents/dist/Dialog";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/TextArea";


class Detail extends Component {
	state = {
		products: [...unicorns],
		filteredProducts: [...unicorns],
		filterType: "all",
    };
    
    render() {
        return (
            <div className="detail-page">
                <main className="detail-page-content">
                    <ui5-table>
                        <ui5-table-column slot="columns">
                            <ui5-label
                                class="table-column-header-content"
                            >
                                Name
                            </ui5-label>
                        </ui5-table-column>
    
                        <ui5-table-column slot="columns">
                            <ui5-label
                                class="table-column-header-content"
                            >
                                Country
                            </ui5-label>
                        </ui5-table-column>
    
                        <ui5-table-column slot="columns">
                            <ui5-label
                                class="table-column-header-content"
                            >
                                Last Funding on
                            </ui5-label>
                        </ui5-table-column>
    
                        <ui5-table-column slot="columns">
                            <ui5-label
                                class="table-column-header-content"
                            >
                                Founded
                             </ui5-label>
                        </ui5-table-column>
    
                        <ui5-table-column slot="columns">
                            <ui5-label
                                class="table-column-header-content"
                            >
                                Category
                            </ui5-label>
                        </ui5-table-column>
    
                        <ui5-table-column slot="columns">
                            <ui5-label
                                class="table-column
                                header-content
                            "
                        >
                                Money
                            </ui5-label>
                        </ui5-table-column>
    
                        {
                            this.state.filteredProducts.map((item) =>
                                <ui5-table-row key={item.key}>
                                    <ui5-table-cell>
                                        <ui5-label class="table-cell-content"><b>{item.name}</b></ui5-label>
                                    </ui5-table-cell>
                                    <ui5-table-cell>
                                        <span className="table-cell-content">{item.country}</span>
                                    </ui5-table-cell>
                                    <ui5-table-cell>
                                        <span className="table-cell-content">{item.last_funding_on}</span>
                                    </ui5-table-cell>
                                    <ui5-table-cell>
                                        <span className="table-cell-content">{item.founded_on}</span>
                                    </ui5-table-cell>
                                    <ui5-table-cell>
                                    <span className="table-cell-content">{item.category}</span>
                                    </ui5-table-cell>
                                    <ui5-table-cell>
                                    <span className="table-cell-content">{item.total_equity_funding}</span>
                                    </ui5-table-cell>
                                </ui5-table-row>)
                        }
                    </ui5-table>
                </main>
            </div>
        )
    }
}

export default Detail;
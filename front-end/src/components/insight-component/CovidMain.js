import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import left from "../../assets/images/extra-constructs/left_arrow.png";
import "../../assets/styles/chart-styles/social_media.scss"
import {covid} from "./ChartInfo";
import { Link } from "react-router-dom";
// Import our demo components
import Chart from "./chart-components/Covid";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      showInLegend: true,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.2f} %"
      }
    }
  },
  title: {
    text: "Sentiment Analysis for 'Covid Vaccine'"
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.2f}%</b>"
  },
  legend: {},

  series: [
    {
      name: "Percentage of news",
      data: [
        [13, "Very Negative"],
        [58.2, "Negative"],
        [14.2, "Neutral"],
        [14.1, "Positive"],
        [0.6, "Very Positive"],
      ],
      keys: ["y", "name"],
      innerSize: "0%",
      type: "pie"
    }
  ]
};

// Render app with demo chart
const CovidMain = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
      return <div className="container fixed_header_margintop" style={{padding:"0rem 0 1rem",padding: "30px 0 57px"}}>
      <div className="res_title">
          <h3>
            We classify the sentiments of the articles where the concerned brand name has appeared. Using our propriety 
            NLP algorithm, we are able to quantify the sentiments that act as a brand indicator.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <div style={{border:"2px solid darkgrey",borderRadius:"5px"}}>
          <Chart options={chartOptions} highcharts={Highcharts} />
  
          </div>
          
   
            <div className="social_button_div">
            <Link to="/insight/statistics/media_chart5"><img src={left} alt="right_button"/></Link>
            <Link to="/insight/statistics/advertising_chart1"> <img style={{transform: "rotateY(178deg)"}} src={left} alt="right_button"/></Link>
           </div>
          
          
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <div className="right_chart_info">
          <div className="bind_div_com">
            <span className="release_com info_head_com">Release Date :</span><br/><span className="info_text_com">{covid.date}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Region :</span><br/><span className="info_text_com">{covid.region}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Sources :</span><br/><span className="info_text_com">{covid.time}</span>
          </div>
          <div className="bind_div_com">
            <span className="region_comm info_head_com">Supplementary information :</span><br/><span className="info_text_com">{covid.Notes}</span>
          </div>
            <div className="right_restaurant">
              <h3 className="try_it_text">
                Would You like to get in the world of possibilities and get unique
                data led insights for your business
              </h3>
              <div>
              </div>
                <Link to="/demo"><button className="try_us_button"><span>TRY US</span> - <span style={{textTransform:"capitalize",fontWeight:"400"}}>It's Free</span></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
  }
  
  
  export default CovidMain;


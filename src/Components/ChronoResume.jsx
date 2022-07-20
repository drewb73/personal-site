import React from 'react'
import {Chrono} from 'react-chrono'

function ChronoResume() {
    const items = [{
        title: "Feb 2019 - Present",
        cardTitle: "Cisco",
        cardSubtitle: "Sales Operations Advisor (GESW) - San Jose, CA",
        cardDetailedText: "Responsible for assisting sales team via ad hoc reporting as well as operational support throughout the sales lifecycle. Developed various Excel, Power Bi, and SFDC dashboards used to provide valuable insights to sales teams and leadership ultimately helping them run their business more effectively."
    }, {
        title: "May 2019 - Feb 2021",
        cardTitle: "CBRE",
        cardSubtitle: "Sales/Research Analyst - San Jose, CA",
        cardDetailedText: "Assist with business development primarily with occupier brokers. Developed a system of identifying companies that our company has not worked with and assigned brokers to pursue them utilizing Smartsheets. Responsible for maintaining Salesforce Database ensuring opportunities are accurate and up to date. Have created multiple tools in Excel including a Salesforce accuracy and pipeline report as well as a commission calculator taking into consideration multiple commission traunches. Created a comprehensive management dashboard in Tableau that includes market share, an inbound tracker, and a top client report. Developed a forecasting reporting system that utilizes both Smartsheets for data collection and Tableau for data visualization to forecast expected commission for each quarter."

    }, {
      title: "Mar 2017 - May 2019",
        cardTitle: "Golden State Property Management",
        cardSubtitle: "Property Manager - San Jose, CA",
        cardDetailedText: "Facilitate the entire tenant move in and move out process including inspections, coordinating vendors, and ensuring tenant ledgers are accurate and up-to-date. Currently manage 150 units and over 300 tenants ensuring both tenant’s and client’s needs are satisfied with the goal of maximizing our client’s cash flow. Have consistently increased client’s revenue by providing the most cost effective solutions to both maintenance issues as well as tenant disputes"
    },
    {
      title: "Aug 2011 - Dec 2015",
        cardTitle: "Education",
        cardSubtitle: "Sonoma State University - B.S. Business Administration (Financial Management) ",
        cardDetailedText: "Rohnert Park, CA. "
    },
  ]



  return (
    <>
    <div className='w-90 h-90 text-center'>
      <h1 className='mb-10 mt-8 text-4xl font-bold'>Resume</h1>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" cardHeight="100px" hideControls='true' theme={{primary: 'black'}}>
      </Chrono>
    </div>
    </>
  )
}

export default ChronoResume
import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <br/>
                <br/>
                <h4>About Young Matrimony</h4>
                <img 
                style={{height:"300px",marginLeft:"auto",marginRight:"auto",display:"block",marginTop:"40px"}}
                src={require('../components/about.svg')} />

                <p>youngmatrimony.com is a complete wedding portal hosted by the Nair Service Society Delhi (Regd.) with the sole objective to provide a dedicated site for the Nair community to upload/search for the most eligible bride/bride groom. Nairs who value tradition and customs are passionate about their roots. n4nairmatrimony.com will help them to connect with a partner from their community irrespective of whether they are from the same city or far away, across world. Form 2010 to October 2015 this matrimonial website was servicing the Nair community free of cost. As the running cost of the website has increased incredibly we are forced to charge a minimum amount as service fees from each registrants. So from November 2015 we have introduced Rs.1200/- for five (5) months service to the registered members. Your cooperation is solicited. You have to choose and select from the data/profiles available in the website. Highlights of n4nairmatrimony: . Exclusive Nair Community data Run by NSS Delhi Profiles from all over the world Guaranteed Safe, secure and 100% privacy To ensure the authenticity registered profiles are screened and validated Message alerts when members contact each other Fast and accurate search options The revenue generated through this site shall be used for charitable and humanitarian activities by the organization which is registered under the Societies Registration Act of 1860. Go through the numerous pages where you may find the ideal life partner based on mother tongue, caste, religion, country and occupation etc. etc. You can access profile by entering the id or quick/basic/advance search facilities. This portal will be a most suitable matchmaker for you.</p>
               <br/>
            </div>
        )
    }
}

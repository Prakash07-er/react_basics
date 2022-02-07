import './App.css';
import Message from './message';

export default function App() {
  
  const pricingList = [
    {
      type :"free",
      price :"$0",
      duration: "month",
      user : "Single User",
      storage :"5GB Storage",
      noOfProjects :"Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProj : "Unlimited Private Projects",
      phone :"Dedicated Phone Support",
      domain :"Free Subdomain",
      report : "Monthly Status Reports",
      cdn: true
    },
    {
      type :"Plus",
      price :"$9",
      duration: "month",
      user : "5 Users",
      storage : "5GB Storage",
      noOfProjects :"Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProj : "Unlimited Private Projects",
      phone :"Dedicated Phone Support",
      domain :"Free Subdomain",
      report : "Monthly Status Reports",
      cdn: false
    },
    {
      type :"Pro",
      price :"$49",
      duration: "month",
      user : "Unlimited Users",
      storage : "150GB Storage",
      noOfProjects :"Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProj : "Unlimited Private Projects",
      phone :"Dedicated Phone Support",
      domain :" Unlimited Free Subdomain",
      report : "Monthly Status Reports",
      cdn: false
   }
]

  return (
    <div>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            pricingList.map((obj) => {
              // if (obj.cdn){
                return(
                     <Message data={obj}></Message>
                  )
              // } else {
              //   return(
              //     <h1> None</h1>
              //  )
              // }
            })
          }
        </div>
      </div>
  </section>
  </div>
  );
}


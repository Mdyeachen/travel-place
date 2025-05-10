import Header from "./Component/header"
import Entry from "./Component/entry"
import data from "./../data.json"
import "./main.css"

export default function Apps() {
   const journalEntry = data.des.map((entryData, index) => {
      return (
      <Entry 
         key={index}
         {...entryData}
   />
)
   })
   return (
      <>
         <section className="main">
            <Header />
            {journalEntry}
         </section>
      </>
   )
}
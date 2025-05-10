export default function Entry(prop){
   return (
      <article className="journal-entry">
         <div className="contain flex flex-ac f-gap-20">
            <div className="journal-image">
               <img src={prop.src} alt={prop.alt} />
            </div>
            <div className="artical-info">
               <div className="artical-info-txt flex flex-ac">
                  <img src="./../../location.svg" alt="location" />
                  <span className="contry-name text-up">{prop.country}</span>
                  <a href={prop.location}>Google Map</a>
               </div>
               <h3>{prop.title}</h3>
               <p>12 Jan 2024 - 12 Jan 2025</p>
               <p>{prop.para}</p>
               <a href="#">Read More</a>
            </div>
         </div>
      </article>
   )
}
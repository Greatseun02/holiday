import { useEffect, useState } from 'react'


type country = {
    "isoCode": string,
    "name": {
        "language": string,
        "text": string
      }[],
    "officialLanguages": [
      string
    ]
}



type holiday = {
    "id": string,
    "name": [
      {
        "language": string,
        "text": string
      }
    ],
    "nationwide": boolean,
    "regionalScope": string,
    "startDate": string,
    "subdivisions": [
      {
        "code": string,
        "shortName": string
      }
    ],
    "temporalScope": string,
    "type": string
}


export default function Holiday() {
  const [countries, setCountries] = useState<country[]>([])
  const [selectedCountry, setSelectedCountry] = useState("IT");
  const [publicHoliday, setPublicHoliday] = useState<holiday[]>([]);

  useEffect(()=>{
    
    async function getData(){
        try{
            let data = await fetch("https://openholidaysapi.org/Countries?languageIsoCode=EN");
            
            let country = await data.json();

            setCountries(country)

        }catch(e){
            console.log("Errro Loading Countries", e)
        }
    }

    getData();

  },[])

  useEffect(()=>{
    if(selectedCountry){
      fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${selectedCountry}&validFrom=2024-01-01&validTo=2024-12-31&languageIsoCode=EN`).then(
      data => data.json()
    ).then(
      holidays => {
       return setPublicHoliday(holidays)
      }
    )
    }
  }, [selectedCountry]);


  function formatDate (dateStr:string){
    let date = new Date(dateStr); 
    return date.toLocaleString('en-EN', {month: "long", day:"numeric"}) 
  }

  return (
    <div>
        <select className='select' value={selectedCountry} onChange={(event)=>{setSelectedCountry(event.target.value)}}>
        {
          countries.map((country) =>
            <option key={country.isoCode} value={country.isoCode}> {country.name[0].text} </option>
          )
        }              
      </select>
      <div className='holiday'>
        {
          publicHoliday.map((holiday)=>{
            return <p className='display-holiay' key={holiday.id}>
                {formatDate(holiday.startDate)} - <span className='holidayName'>{holiday.name[0].text}</span></p>
          })
        }
      </div>
    </div>
  )
}

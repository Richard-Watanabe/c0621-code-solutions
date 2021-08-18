select "line1",
       "cities"."name" as "cityName",
       "countries"."name" as "countryName",
       "district"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");

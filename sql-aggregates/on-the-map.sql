select "countries"."name" as "countryName",
       count("cities") as "cityCountPerCountry"
  from "cities"
  join "countries" using ("countryId")
  where "cities"."countryId" = "countryId"
  group by "countries"."name";

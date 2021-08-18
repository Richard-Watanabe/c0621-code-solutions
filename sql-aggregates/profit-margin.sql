select "title",
      (sum("payments"."amount") - "replacementCost") as "totalProfit"
  from "films"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("rentalId")
group by "films"."filmId"
order by "totalProfit" desc
limit 5;

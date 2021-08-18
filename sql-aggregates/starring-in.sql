select count(*) as "numberStarred",
       "categories"."name" as "categoryStarred"
  from "films"
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "categories"."name";

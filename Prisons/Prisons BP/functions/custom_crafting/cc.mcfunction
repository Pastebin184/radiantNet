scoreboard players set @a haste 0
scoreboard players set @a miningFortune 5

execute as @a[hasitem={location=slot.armor.head, item=radiant:black_iron_helmet}] run scoreboard players add @s haste 1
execute as @a[hasitem={location=slot.armor.chest, item=radiant:black_iron_chestplate}] run scoreboard players add @s haste 1
execute as @a[hasitem={location=slot.armor.legs, item=radiant:black_iron_leggings}] run scoreboard players add @s haste 1
execute as @a[hasitem={location=slot.armor.feet, item=radiant:black_iron_boots}] run scoreboard players add @s haste 1

execute as @a[hasitem={location=slot.weapon.mainhand,item=radiant:mithril_drill}] run scoreboard players add @s miningFortune 240
execute as @a[hasitem={location=slot.weapon.mainhand,item=radiant:diamond_drill}] run scoreboard players add @s miningFortune 120
execute as @a[hasitem={location=slot.weapon.mainhand,item=radiant:iron_drill}] run scoreboard players add @s miningFortune 35
execute as @a[hasitem={location=slot.weapon.mainhand,item=radiant:gold_drill}] run scoreboard players add @s miningFortune 50






execute as @a[hasitem={location=slot.armor.head, item=radiant:black_iron_helmet}] run scoreboard players add @s miningFortune 30 
execute as @a[hasitem={location=slot.armor.chest, item=radiant:black_iron_chestplate}] run scoreboard players add @s miningFortune 30
execute as @a[hasitem={location=slot.armor.legs, item=radiant:black_iron_leggings}] run scoreboard players add @s miningFortune 30
execute as @a[hasitem={location=slot.armor.feet, item=radiant:black_iron_boots}] run scoreboard players add @s miningFortune 30

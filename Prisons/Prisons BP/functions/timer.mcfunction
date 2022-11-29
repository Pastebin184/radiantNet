scoreboard players add fill timer 1

execute as @a if score fill timer matches 40.. run function shop/shop_fill
execute as @a if score fill timer matches 40.. run function misc/koth_fill
execute as @a if score fill timer matches 40.. run function mines/mine_npc
execute as @a if score fill timer matches 40.. run function gems/gem_fill
execute as @a if score fill timer matches 40.. run function fragments/fragment_shop
execute as @a if score fill timer matches 40.. run function beacons/beacon_shop_fill

execute as @a if score fill timer matches 40.. run scoreboard players set fill timer 0 

scoreboard players add tips timer 1
execute if score tips timer matches 3600.. run tellraw @a {"rawtext":[{"text":"§b§lTip: use -spawn in chat to go back to spawn"}]}

execute if score tips timer matches 3600.. run scoreboard players set tips timer 0

scoreboard players add timeplayed timer 1 
execute if score timeplayed timer matches 72000.. run scoreboard players add @a timeplayed 1

execute if score timeplayed timer matches 72000.. run scoreboard players set timeplayed timer 0

scoreboard players add koth timer 1 
execute if score koth timer matches 240.. run execute as @a at @s if block ~ ~-1 ~ radiant:kothblock run tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §6Is capturing KOTH"}]}

execute if score koth timer matches 240.. run scoreboard players set koth timer 0

scoreboard players add meteor timer 1 
execute if score meteor matches 24000.. run function custom_crafting/meteor

execute if score koth meteor matches 24000.. run scoreboard players set meteor timer 0

scoreboard players add event timer 1 
execute if score event matches 12000.. run tellraw @a {"rawtext":[{"text":"§eMining Mania has begun! Enjoy the haste for 5 minutes!"}]}
execute if score event matches 12000.. run effect @a haste 180 3 true

execute if score event matches 12000.. run scoreboard players set event timer 0


scoreboard players add shop timer 1 
execute if score shop matches 18000.. run tellraw @a {"rawtext":[{"text":"§b§lBuy Ranks and Boosters to support the Realm and gain amazing benefits at shop.radiantnet.xyz"}]}
execute if score shop matches 18000.. run tellraw @a {"rawtext":[{"text":"§d§lReport bugs and join giveaways at discord.radiantnet.xyz"}]}

execute if score shop matches 18000.. run scoreboard players set shop timer 0

scoreboard players add kothR timer 1 
execute if score kothR matches 2400.. run execute as @a at @s if block ~ ~-1 ~ radiant:kothblock run tellraw @a {"rawtext": [{"selector": "@s"},{"text": " §dHas captured KOTH and Recieved 250 Fragments and 350 XP"}]}
execute if score kothR matches 2400.. run execute as @a at @s if block ~ ~-1 ~ radiant:kothblock run scoreboard players add @s fragments 250
execute if score kothR matches 2400.. run execute as @a at @s if block ~ ~-1 ~ radiant:kothblock run scoreboard players add @s xp 350

execute if score kothR matches 2400.. run scoreboard players set kothR timer 0

scoreboard players add silo timer 1 
execute if score silo matches 18000.. run function silos/silo

execute if score silo matches 2400.. run scoreboard players set silo timer 0

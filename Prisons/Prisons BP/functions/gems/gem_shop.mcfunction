execute as @a[hasitem={item=radiant:speedup}] if score @s gems matches 2.. run scoreboard players add @s speed 1
execute as @a[hasitem={item=radiant:speedup}] if score @s gems matches 2.. run scoreboard players remove @s gems 2
clear @a radiant:speedup

execute as @a[hasitem={item=radiant:siloup}] if score @s gems matches 1.. run scoreboard players add @s siloAdd 1
execute as @a[hasitem={item=radiant:siloup}] if score @s gems matches 1.. run scoreboard players remove @s gems 1
clear @a radiant:siloup

execute as @a[hasitem={item=radiant:silomultiup}] if score @s gems matches 5.. run scoreboard players add @s siloMultiplier 1
execute as @a[hasitem={item=radiant:silomultiup}] if score @s gems matches 5.. run scoreboard players remove @s gems 5
clear @a radiant:silomultiup
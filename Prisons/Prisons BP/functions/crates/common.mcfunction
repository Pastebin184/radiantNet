scoreboard players random commonCrate randomScore 1 15

execute if score commonCrate randomScore matches 1..5 run function crates/rewards/commonReward1
execute if score commonCrate randomScore matches 6..10 run function crates/rewards/commonReward2
execute if score commonCrate randomScore matches 11..15 run function crates/rewards/commonReward3
scoreboard players random rareCrate randomScore 1 15

execute if score rareCrate randomScore matches 1..5 run function crates/rewards/rareReward1
execute if score rareCrate randomScore matches 6..10 run function crates/rewards/rareReward2
execute if score rareCrate randomScore matches 11..15 run function crates/rewards/rareReward3
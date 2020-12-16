# 5.rpg-challenge
This is the [**link**](https://jing-chu.github.io/5.rpg-challenge/)


Each calculation should run for one attack. For instance, if I have a bow and decide to attack. I might get lucky and strike twice.
If the opponent wears boots, he could dodge the attack twice, once or never.


| ITEMS | Boots                                | Staff                  | Sword           | Bow                          |
|-------|--------------------------------------|------------------------|-----------------|------------------------------|
|       | 30% chance to dodge an attack        | 20% increase in healing| 30% more damage | 30% chance to attack twice   |

<br>

| RACE | Humans               | Orcs                    | Elves                                                         | Vampires                                           |
|------|----------------------|-------------------------|---------------------------------------------------------------|----------------------------------------------------|
|      |20% less damage taken |40% more max health      | 30% chance to reflect the attack back to the opponent. They take damage equal to 50% of the original hit. |10% lifesteal from opponents current health at start of the vampire's turn. |

**ATTENTION**  
In the `character.js` file, you can define what effects will take place on certain events.
If the player is an orc and if he/she has boots, the stats will take effect straight on creation.
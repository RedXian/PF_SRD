/**
 * 
 * 
 */
$(function() {
	var CLASSES = {
	    "Barbarian" : {
	        "type" : "class",
	        "description" : "The barbarian is a brutal berserker from beyond the edge of civilized lands.",
	        "source" : "Core Rulebook"
	    },
	    "Bard" : {
	        "type" : "class",
	        "description" : "The bard uses skill and spell alike to bolster his allies, confound his enemies, and build upon his fame.",
	        "source" : "Core Rulebook"
	    },
	    "Cleric" : {
	        "type" : "class",
	        "description" : "A devout follower of a deity, the cleric can heal wounds, raise the dead, and call down the wrath of the gods.",
	        "source" : "Core Rulebook"
	    },
	    "Druid" : {
	        "type" : "class",
	        "description" : "The druid is a worshiper of all things natural—a spellcaster, a friend to animals, and a skilled shapechanger.",
	        "source" : "Core Rulebook"
	    },
	    "Fighter" : {
	        "type" : "class",
	        "description" : "Brave and stalwart, the fighter is a master of all manner of arms and armor.",
	        "source" : "Core Rulebook"
	    },
	    "Monk" : {
	        "type" : "class",
	        "description" : "A student of martial arts, the monk trains his body to be his greatest weapon and defense.",
	        "source" : "Core Rulebook"
	    },
	    "Paladin" : {
	        "type" : "class",
	        "description" : "The paladin is the knight in shining armor, a devoted follower of law and good.",
	        "source" : "Core Rulebook"
	    },
	    "Ranger" : {
	        "type" : "class",
	        "description" : "A tracker and hunter, the ranger is a creature of the wild and of tracking down his favored foes.",
	        "source" : "Core Rulebook"
	    },
	    "Rogue" : {
	        "type" : "class",
	        "description" : "The rogue is a thief and a scout, an opportunist capable of delivering brutal strikes against unwary foes.",
	        "source" : "Core Rulebook"
	    },
	    "Sorcerer" : {
	        "type" : "class",
	        "description" : "The spellcasting sorcerer is born with an innate knack for magic and has strange, eldritch powers.",
	        "source" : "Core Rulebook"
	    },
	    "Wizard" : {
	        "type" : "class",
	        "description" : "The wizard masters magic through constant study that gives him incredible magical power.",
	        "source" : "Core Rulebook"
	    }
	};

	var RACES = {
	    "Dwarf" : {
	        "type" : "race",
	        "Age" : {
	            "Adulthood" : "40",
	            "Intuitive" : "+3d6",
	            "Self-Taught" : "+5d6",
	            "Trained" : "+7d6"
	        },
	        "description" : "These short and stocky defenders of mountain fortresses are often seen as stern and humorless. Known for mining the earth's treasures and crafting magnificent items from ore and gemstones, they have an unrivaled affinity for the bounties of the deep earth. Dwarves also have a tendency toward traditionalism and isolation that sometimes manifests as xenophobia.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves are both tough and wise, but also a bit gruff.",
	            "Constitution" : "2",
	            "Wisdom" : "2",
	            "Charisma" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Slow and Steady" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves can see in the dark up to 60 feet."
	        },
	        "Defensive Training" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype."
	        },
	        "Greed" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price of nonmagical goods that contain precious metals or gemstones."
	        },
	        "Hatred" : {
		        "description" : "Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes due to special training against these hated foes."
	        },
	        "Hardy" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities."
	        },
	        "Stability" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground."
	        },
	        "Stonecunning" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word \"dwarven\" in its name as a martial weapon."
	        },
	        "Ancient Enmity" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves have long been in conflict with elves, especially the hated drow. Dwarves with this racial trait receive a +1 racial bonus on attack rolls against humanoid creatures of the elf subtype.",
	            "replaces" : ["Hatred"]
	        },
	        "Craftsman" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves are known for their superior craftsmanship when it comes to metallurgy and stonework. Dwarves with this racial trait receive a +2 racial bonus on all Craft or Profession checks related to metal or stone.",
	            "replaces" : ["Greed"]
	        },
	        "Deep Warrior" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves with this racial trait grew up facing the abominations that live deep beneath the surface. They receive a +2 dodge bonus to AC against monsters of the aberration type and a +2 racial bonus on combat maneuver checks made to grapple such creatures (or to continue a grapple).",
	            "replaces" : ["Defensive Training"]
	        },
	        "Giant Hunter" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves with this racial trait gain a +1 bonus on attack rolls against humanoids with the giant subtype. Furthermore, they gain a +2 bonus on Survival checks to find and follow tracks made by humanoids with the giant subtype.",
	            "replaces" : ["Hatred"]
	        },
	        "Lorekeeper" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves keep extensive records about their history and the world around them. Dwarves with this racial trait receive a +2 racial bonus on Knowledge (history) checks that pertain to dwarves or their enemies. They can make such skill checks untrained.",
	            "replaces" : ["Greed"]
	        },
	        "Magic Resistant" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some of the older dwarven clans are particularly resistant to magic. Dwarves with this racial trait gain spell resistance equal to 5 + their character level. This resistance can be lowered for 1 round as a standard action. Dwarves with this racial trait take a -2 penalty on all concentration checks made in relation to arcane spells.",
	            "replaces" : ["Hardy"]
	        },
	        "Minesight" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves with this racial trait increase the range of their darkvision to 90 feet; however, they are automatically dazzled in bright light and take a -2 penalty on saving throws against effects with the light descriptor.",
	            "replaces" : ["Darkvision"]
	        },
	        "Mountaineer" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Mountain dwarves are skilled at climbing and navigating narrow ledges. Dwarves with this racial trait are immune to altitude sickness and do not lose their Dexterity bonus to AC when making Climb or Acrobatics checks to cross narrow or slippery surfaces.",
	            "replaces" : ["Stability"]
	        },
	        "Relentless" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves are skilled at pushing their way through a battlefield, tossing aside lesser foes with ease. Dwarves with this racial trait receive a +2 bonus on combat maneuver checks made to bull rush or overrun an opponent. This bonus only applies while both the dwarf and his opponent are standing on the ground.",
	            "replaces" : ["Stability"]
	        },
	        "Rock Stepper" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves with this racial trait can skillfully negotiate rocky terrain. They can ignore difficult terrain created by rubble, broken ground, or steep stairs when they take a 5-foot step.",
	            "replaces" : ["Stonecunning"]
	        },
	        "Saltbeard" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves occasionally found iron cities along rugged seacoasts, and natives of such cities gain a +2 bonus on Profession (sailor) and Survival checks while at sea. They gain a +1 racial bonus on attack rolls and a +2 dodge bonus to AC against creatures with the aquatic or water subtype. Their greed racial trait applies only to treasure found in or under the water, but applies to all such treasure regardless of whether or not it contains metal or gemstones.",
	            "replaces" : ["Defensive Training", "Hatred", "Stonecunning"]
	        },
	        "Sky Sentinel" : {
	            "type" : "trait.racial.alternate",
	            "description" : "As creatures with a deep affinity for the ground, dwarves are wary of attacks from above. Enemies on higher ground gain no attack roll bonus against dwarves with this racial trait, and they gain a +1 racial bonus on attack rolls, a +2 dodge bonus to AC, and a +2 bonus on Perception checks against flying creatures.",
	            "replaces" : ["Defensive Training", "Hatred", "Stonecunning"]
	        },
	        "Stonesinger" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some dwarves' affinity for the earth grants them greater powers. Dwarves with this racial trait are treated as one level higher when casting spells with the earth descriptor or using granted powers of the Earth domain, the bloodline powers of the earth elemental bloodline, and revelations of the oracle's stone mystery. This ability does not give them early access to level-based powers; it only affects the powers they could use without this ability.",
	            "replaces" : ["Stonecunning"]
	        },
	        "Stubborn" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves are renowned for their stubbornness. Dwarves with this racial trait receive a +2 racial bonus on Will saves to resist spells and spell-like abilities of the enchantment (charm) and enchantment (compulsion) schools. In addition, if they fail such a save, they receive another save 1 round later to prematurely end the effect (assuming it has a duration greater than 1 round). This second save is made at the same DC as the first. If the dwarf has a similar ability from another source (such as a rogue's slippery mind), he can only use one of these abilities per round, but he can try the other on the second round if the first reroll ability fails.",
	            "replaces" : ["Hardy"]
	        },
	        "Surface Survivalist" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some dwarves have dwelt so long aboveground they have lost their ability to see at night. However, their adaptation to extreme environments allows them to treat wind conditions (when determining whether or not they are checked or blown away) and either hot or cold climates (choose one) as one step less severe.",
	            "replaces" : ["Darkvision"]
	        },
	        "Xenophobic" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Isolationist dwarves despise non-dwarven humanoids. They speak only Dwarven and do not gain any bonus languages from possessing a high Intelligence score. In addition, they learn only one language per 2 ranks of Linguistics they possess. However, their untrusting nature gives them a +1 bonus against mind-affecting effects, except for fear affects.",
	            "replaces" : ["Languages"]
	        },
	        "Wyrmscourged" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Dwarves with this racial trait gain a +1 bonus on attack rolls and a +2 dodge bonus to AC and on saving throws against the exceptional, supernatural, and spell-like abilities of dragons. They also gain a +2 racial bonus on Knowledge (arcana) checks to identify dragons and can make such checks untrained.",
	            "replaces" : ["defensive training, hatred, and stonecunning."]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Dwarven"],
	            "list" : ["Giant", "Gnome", "Goblin", "Orc", "Terran", "Undercommon"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Elf" : {
	        "type" : "race",
	        "Age" : {
	            "Adulthood" : "110",
	            "Intuitive" : "+4d6",
	            "Self-Taught" : "+6d6",
	            "Trained" : "+10d6"
	        },
	        "description" : "Tall, noble, and often haughty, elves are long-lived and subtle masters of the wilderness. Elves excel in the arcane arts. Often they use their intrinsic link to nature to forge new spells and create wondrous items that, like their creators, seem nearly impervious to the ravages of time. A private and often introverted race, elves can give the impression they are indifferent to the plights of others.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Elves are nimble, both in body and mind, but their form is frail.",
	            "Dexterity" : "+2",
	            "Intelligence" : "+2",
	            "Constitution" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Elves are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Elves have a base speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Elves can see twice as far as humans in conditions of dim light. See Additional Rules."
	        },
	        "Elven Immunities" : {
	            "type" : "trait.racial",
	            "description" : "Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects."
	        },
	        "Elven Magic" : {
	            "type" : "trait.racial",
	            "description" : "Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items."
	        },
	        "Keen Senses" : {
	            "type" : "trait.racial",
	            "description" : "Elves receive a +2 racial bonus on Perception skill checks."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word \"elven\" in its name as a martial weapon."
	        },
	        "Arcane Focus" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some elven families have such long traditions of producing wizards (and other arcane spellcasters) that they raise their children with the assumption each is destined to be a powerful magic-user, with little need for mundane concerns such as skill with weapons. Elves with this racial trait gain a +2 racial bonus on concentration checks made to cast arcane spells defensively.",
	            "replaces" : ["Weapon Familiarity"]
	        },
	        "Darkvision" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Though uncommon, some groups of elves are born with darkvision, rather than low-light vision. In many cases this is taken as a sign of a drow in the elf's ancestry, and can lead to persecution within the elf's home community. Elves with this racial trait gain darkvision with a range of 60 feet, but also gain sensitivity to light and are dazzled in areas of bright light or within the radius of a daylight spell.",
	            "replaces" : ["Low-light Vision"]
	        },
	        "Desert Runner" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some elves thrive in the deepest deserts, forever roaming across burned and parched lands. Elves with this racial trait receive a +4 racial bonus on Constitution checks and Fortitude saves to avoid fatigue, exhaustion, or ill effects from running, forced marches, starvation, thirst, or hot or cold environments.",
	            "replaces" : ["Elven Magic"]
	        },
	        "Dreamspeaker" : {
	            "type" : "trait.racial.alternate",
	            "description" : "A few elves have the ability to tap into the power of sleep, dreams, and prescient reverie. Elves with this racial trait add +1 to the saving throw DCs of spells of the divination school and sleep effects they cast. In addition, elves with Charisma scores of 15 or higher may use dream once per day as a spell-like ability (caster level is equal to the elf's character level).",
	            "replaces" : ["Elven Immunities"]
	        },
	        "Elemental Resistance" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Elves who dwell in the most extreme environments, from arctic wastelands to volcanic plains, develop natural resistance to the dangers of their homelands over the course of a few generations. Elves with this racial trait gain elemental resistance 5 to acid, cold, electricity, or fire. This choice is made at character creation, and once made it cannot be changed.",
	            "replaces" : ["Elven Immunities"]
	        },
	        "Envoy" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Elves often have trouble relating to neighbors of other races, especially those with much shorter lifespans. As a result, some are trained in minor magics that are particularly useful when dealing with non-elves. Elves with this racial trait and an Intelligence score of 11 or higher gain the following spell-like abilities once per day: comprehend languages, detect magic, detect poison, and read magic. The caster level for these effects is equal to the elf's level.",
	            "replaces" : ["Elven Magic"]
	        },
	        "Eternal Grudge" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some elves grow up in secluded, isolationist communities where generations-old slights and quarrels linger as eternal blood feuds. Elves with this racial trait receive a +1 bonus on attack rolls against humanoids of the dwarf and orc subtypes because of special training against these hated foes.",
	            "replaces" : ["Elven Magic"]
	        },
	        "Fleet-Footed" : {
	            "type" : "trait.racial.alternate",
	            "description" : "While all elves are naturally lithe and agile, some also are naturally speedy and have a strong desire to rush into situations rather than worrying about looking ahead. Elves with this racial trait receive Run as a bonus feat and a +2 racial bonus on initiative checks.",
	            "replaces" : ["Keen Senses", "Weapon Familiarity"]
	        },
	        "Lightbringer" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Many elves revere the sun, moon, and stars, but some are literally infused with the radiant power of the heavens. Elves with this racial trait are immune to light-based blindness and dazzle effects, and are treated as one level higher when determining the effects of any light-based spell or effect they cast (including spell-like and supernatural abilities). Elves with Intelligence scores of 10 or higher may use light at will as a spell-like ability.",
	            "replaces" : ["Elven Immunities", "Elven Magic"]
	        },
	        "Silent Hunter" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Elves are renowned for their subtlety and skill. Elves with this racial trait reduce the penalty for using Stealth while moving by 5 and can make Stealth checks while running at a -20 penalty (this number includes the penalty reduction from this racial trait).",
	            "replaces" : ["Elven Magic"]
	        },
	        "Spirit of the Waters" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some elves have adapted to life in tune with the sea or along the reedy depths of wild rivers and lakes. They gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language. They are proficient with longspear, trident, and net.",
	            "replaces" : ["Elven Magic", "Weapon Familiarity"]
	        },
	        "Urbanite" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Elves who live in cities for more than a century can grow to know the ebb and flow of social situations just as their forest-dwelling cousins know the rules of the wild. Elves with this racial trait gain a +2 racial bonus on Diplomacy checks made to gather information and Sense Motive checks made to get a hunch about a social situation.",
	            "replaces" : ["Keen Kenses"]
	        },
	        "Woodcraft" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Elves know the deep secrets of the wild like no others, especially secrets of the forests. Elves with this racial trait gain a +1 racial bonus on Knowledge (nature) and Survival checks. In forest terrain, these bonuses improve to +2.",
	            "replaces" : ["Elven Magic"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Elven"],
	            "list" : ["Celestial", "Draconic", "Gnoll", "Gnome", "Goblin", "Orc", "Sylvan"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Gnome" : {
	        "type" : "race",
	        "Age" : {
	            "Adulthood" : "40",
	            "Intuitive" : "+4d6",
	            "Self-Taught" : "+6d6",
	            "Trained" : "+9d6"
	        },
	        "description" : "Expatriates of the strange land of fey, these small folk have a reputation for flighty and eccentric behavior. Many gnomes are whimsical artisans and tinkers, creating strange devices powered by magic, alchemy, and their quirky imagination. Gnomes have an insatiable need for new experiences that often gets them in trouble.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes are physically weak but surprisingly hardy, and their attitude makes them naturally agreeable.",
	            "Constitution" : "+2",
	            "Charisma" : "+2",
	            "Strength" : "-2"
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks."
	        },
	        "Slow Speed" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes have a base speed of 20 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes can see twice as far as humans in conditions of dim light. See Additional Rules."
	        },
	        "Defensive Training" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes get a +4 dodge bonus to AC against monsters of the giant type."
	        },
	        "Gnome Magic" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day-dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier."
	        },
	        "Hatred" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes."
	        },
	        "Illusion Resistance" : {
		        "description" : "Gnomes get a +2 racial saving throw bonus against illusion spells or effects."
	        },
	        "Keen Senses" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes receive a +2 racial bonus on Perception skill checks."
	        },
	        "Obsessive" : {
	            "type" : "trait.racial",
	            "description" : "Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : " Gnomes treat any weapon with the word \"gnome\" in its name as a martial weapon."
	        },
	        "Academician" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some gnomes are more academically inclined than their kin. Gnomes with this racial trait gain a +2 bonus on any single Knowledge skill.",
	            "replaces" : ["Obsessive"]
	        },
	        "Bond to the Land" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some gnomes have strong ties to specific kinds of terrain, as a holdover from their fey origins. These gnomes gain a +2 dodge bonus to AC when in a specific terrain type selected from the ranger list of favored terrains. This choice is made at character creation, and cannot be changed.",
	            "replaces" : ["Defensive Training", "Hatred"]
	        },
	        "Darkvision" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some gnome strains have lived in the underground depths for so long they have given up on light entirely and gained darkvision with a range of 60 feet.",
	            "replaces" : ["Low-light Vision", "Keen Senses"]
	        },
	        "Eternal Hope" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes rarely lose hope and are always confident that even hopeless situations will work out. Gnomes with this racial trait receive a +2 racial bonus on saving throws against fear and despair effects. Once per day, after rolling a 1 on a d20, the gnome may reroll and use the second result.",
	            "replaces" : ["Defensive Training", "Hatred"]
	        },
	        "Explorer" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Many gnomes are obsessed with seeing as much of the world as possible, rather than perfecting some specific talent or vocation. These gnomes gain a +2 racial bonus on Climb checks and checks for one Knowledge skill of their choice.",
	            "replaces" : ["Hatred", "Obsessive"]
	        },
	        "Fell Magic" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes add +1 to the DC of any saving throws against necromancy spells that they cast. Gnomes with Wisdom scores of 11 or higher also gain the following spell-like abilities: 1/day—bleed, chill touch, detect poison, and touch of fatigue. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Wisdom modifier.",
	            "replaces" : ["Gnome Magic"]
	        },
	        "Gift of Tongues" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes love languages and learning about those they meet. Gnomes with this racial trait gain a +1 bonus on Bluff and Diplomacy checks, and they learn one additional language every time they put a rank in the Linguistics skill.",
	            "replaces" : ["Defensive Training", "Hatred"]
	        },
	        "Knack with Poison" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some gnomes have an instinctive understanding of poisons and their uses. Gnomes gain a +2 racial bonus on Fortitude saves against poison and a +2 bonus on Craft (alchemy) checks to make poison. The bonus on Fortitude saving throws against poisons increases to +4 if the gnome accidentally poisons himself when applying or readying the substance.",
	            "replaces" : ["Illusion Resistance", "Obsessive"]
	        },
	        "Magical Linguist" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes study languages in both their mundane and supernatural manifestations. Gnomes with this racial trait add +1 to the DC of spells they cast with the language-dependent descriptor or those that create glyphs, symbols, or other magical writings. They gain a +2 racial bonus on saving throws against such spells. Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day—arcane mark, comprehend languages, message, read magic. The caster level for these effects is equal to the gnome's level.",
	            "replaces" : ["Gnome Magic", "Illusion Resistance"]
	        },
	        "Master Tinker" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes experiment with all manner of mechanical devices. Gnomes with this racial trait gain a +1 bonus on Disable Device and Knowledge (engineering) checks. They are treated as proficient with any weapon they have personally crafted.",
	            "replaces" : ["Defensive Training", "Hatred"]
	        },
	        "Pyromaniac" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes with this racial trait are treated as one level higher when casting spells with the fire descriptor, using granted powers of the Fire domain, using the bloodline powers of the fire elemental bloodline or the revelations of the oracle's flame mystery, and determining the damage of alchemist bombs that deal fire damage (this ability does not give gnomes early access to level-based powers; it only affects the powers they could use without this ability). Gnomes with Charisma scores of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, flare, prestidigitation, produce flame. The caster level for these effects is equal to the gnome's level; the DCs are Charisma-based.",
	            "replaces" : ["Gnome Magic", "Illusion Resistance"]
	        },
	        "Warden of Nature" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Gnomes must often protect their homes against unnatural or pestilential infestations. Gnomes with this racial trait gain a +2 dodge bonus to AC against aberrations, oozes, and vermin, and a +1 bonus on attack rolls against them because of their special training.",
	            "replaces" : ["Defensive Training", "Hatred"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Gnome", "Sylvan"],
	            "list" : ["Draconic", "Dwarven", "Elven", "Giant", "Goblin", "Orc"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Halfling" : {
	        "type" : "race",
	        "description" : "Members of this diminutive race find strength in family, community, and their own innate and seemingly inexhaustible luck. While their fierce curiosity is sometimes at odds with their intrinsic common sense, halflings are eternal optimists and cunning opportunists with an incredible knack for getting out the worst situations.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Halflings are nimble and strong-willed, but their small stature makes them weaker than other races.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Strength" : "-2"
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks."
	        },
	        "Slow Speed" : {
	            "type" : "trait.racial",
	            "description" : "Halflings have a base speed of 20 feet."
	        },
	        "Fearless" : {
	            "type" : "trait.racial",
	            "description" : "Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck."
	        },
	        "Halfling Luck" : {
	            "type" : "trait.racial",
	            "description" : "Halflings receive a +1 racial bonus on all saving throws."
	        },
	        "Keen Senses" : {
	            "type" : "trait.racial",
	            "description" : "Halflings receive a +2 racial bonus on Perception skill checks."
	        },
	        "Sure-Footed" : {
	            "type" : "trait.racial",
	            "description" : "Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Halflings are proficient with slings and treat any weapon with the word \"halfling\" in its name as a martial weapon."
	        },
	        "Adaptable Luck" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some halflings have greater control over their innate luck. This ability gives them more options for how they can apply their good fortune from day to day, but also narrows its scope. Three times per day, a halfling can gain a +2 luck bonus on an ability check, attack roll, saving throw, or skill check. If halflings choose to use the ability before they make the roll or check, they gain the full +2 bonus; if they choose to do so afterward, they only gain a +1 bonus. Using adaptive luck in this way is not an action.",
	            "replaces" : ["Halfling Luck"]
	        },
	        "Craven" : {
	            "type" : "trait.racial.alternate",
	            "description" : "While most halflings are fearless, some are skittish, making them particularly alert. Halflings with this racial trait gain a +1 bonus on initiative checks and a +1 bonus on attack rolls when flanking. They take a -2 penalty on saves against fear effects and gain no benefit from morale bonuses on such saves. When affected by a fear effect, their base speed increases by 10 feet and they gain a +1 dodge bonus to Armor Class.",
	            "replaces" : ["Fearless", "Halfling Luck"]
	        },
	        "Fleet of Foot" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some halflings are quicker than their kin but less cautious. Halflings with this racial trait move at normal speed and have a base speed of 30 feet.",
	            "replaces" : ["Slow Speed", "Sure-footed"]
	        },
	        "Ingratiating" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings often survive at the whims of larger, more aggressive races. Because of this, they go out of their way to make themselves more useful, or at least entertaining, to larger folk. Halflings with this racial trait gain a +2 bonus on skill checks for a single Perform skill of their choice, and Perform is always a class skill for them. They also gain a +2 bonus on Craft and Profession checks.",
	            "replaces" : ["Keen Senses", "Sure-footed"]
	        },
	        "Low Blow" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some halflings train extensively in the art of attacking larger creatures. Halflings with this racial trait gain a +1 bonus on critical confirmation rolls against opponents larger than themselves.",
	            "replaces" : ["Keen Senses"]
	        },
	        "Outrider" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some halflings specialize in mounted combat. Halflings with this racial trait gain a +2 bonus on Handle Animal and Ride checks.",
	            "replaces" : ["Sure-footed"]
	        },
	        "Polyglot" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some halflings, especially those who spend a lot of time traveling, develop a talent for learning new languages. These halflings gain a +2 racial bonus on Linguistics checks, and it is always a class skill for them. Halflings with this racial trait also begin play with the ability to speak Common, Halfling, and any one other language of their choice (except for secret languages, such as Druidic) in addition to bonus languages due to high Intelligence. They still gain the normal list of halfling bonus languages.",
	            "replaces" : ["Keen Senses", "halfling language racial trait"]
	        },
	        "Practicality" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings value hard work and common sense. Halflings with this racial trait gain a +2 bonus on any one Craft or Profession skill, as well as on Sense Motive checks and saves against illusions.",
	            "replaces" : ["Fearless", "Sure-footed"]
	        },
	        "Shiftless" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings have a reputation for larceny and guile—and sometimes it's well deserved. Halflings with this racial trait gain a +2 racial bonus on Bluff and Sleight of Hand checks, and Sleight of Hand is always a class skill for them.",
	            "replaces" : ["Sure-footed"]
	        },
	        "Swift as Shadows" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings possess incredible stealth even while moving through obstructed areas. Halflings with this racial trait reduce the penalty for using Stealth while moving by 5, and reduce the Stealth check penalty for sniping by 10.",
	            "replaces" : ["Sure-footed"]
	        },
	        "Underfoot" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings must train hard to effectively fight bigger opponents. Halflings with this racial trait gain a +1 dodge bonus to AC against foes larger than themselves and a +1 bonus on Reflex saving throws to avoid trample attacks.",
	            "replaces" : ["Halfling Luck"]
	        },
	        "Wanderlust" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings love travel and maps. Halflings with this racial trait receive a +2 bonus on Knowledge (geography) and Survival checks. When casting spells or using abilities that provide or enhance movement, halflings treat their caster level as +1 higher than normal.",
	            "replaces" : ["Fearless", "Halfling Luck"]
	        },
	        "Warslinger" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Halflings are experts at the use of the sling. Halflings with this racial trait can reload a sling as a free action. Reloading a sling still requires two hands and provokes attacks of opportunity.",
	            "replaces" : ["Sure-footed"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Halfling"],
	            "list" : ["Dwarven", "Elven", "Gnome", "Goblin"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Half-elf" : {
	        "type" : "race",
	        "description" : "Often caught between the worlds of their progenitor races, half-elves are a race of both grace and contradiction. Their dual heritage and natural gifts often create brilliant diplomats and peacemakers, but half-elves are often susceptible to an intense and even melancholic isolation, realizing that they are never truly part of elven or human society.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Half-elf characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.",
	            "Any" : "+2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves have a base speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves can see twice as far as humans in conditions of dim light. See Additional Rules."
	        },
	        "Adaptability" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves receive Skill Focus as a bonus feat at 1st level."
	        },
	        "Elf Blood" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves count as both elves and humans for any effect related to race."
	        },
	        "Elven Immunities" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects."
	        },
	        "Keen Senses" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves receive a +2 racial bonus on Perception skill checks."
	        },
	        "Multitalented" : {
	            "type" : "trait.racial",
	            "description" : "Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes. See Classes for more information about favored classes."
	        },
	        "Ancestral Arms" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-elves receive training in an unusual weapon. Half-elves with this racial trait receive Exotic Weapon Proficiency or Martial Weapon Proficiency with one weapon as a bonus feat at 1st level.",
	            "replaces" : ["Adaptability"]
	        },
	        "Arcane Training" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Half-elves occasionally seek tutoring to help them master the magic in their blood. Half-elves with this racial trait have only one favored class, and it must be an arcane spellcasting class. They can use spell trigger and spell completion items for their favored class as if one level higher (or as a 1st-level character if they have no levels in that class).",
	            "replaces" : ["Multitalented"]
	        },
	        "Drow-Blooded" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-elves born of drow parents exhibit more drow traits than others—particularly many of the physical features of the drow—and have darkvision 60 feet and light blindness.",
	            "replaces" : ["Low-light Vision"]
	        },
	        "Drow Magic" : {
	            "type" : "trait.racial.alternate",
	            "description" : "A few half-elves with drow ancestry exhibit the innate magic of that race. Half-elves with this trait have drow blood somewhere in their background, and can cast dancing lights, darkness, and faerie fire each once per day, using the half-elf's character level as the caster level for these spell-like abilities.",
	            "replaces" : ["Adaptability", "Multitalented"]
	        },
	        "Dual Minded" : {
	            "type" : "trait.racial.alternate",
	            "description" : "The mixed ancestry of some half-elves makes them resistant to mental attacks. Half-elves with this racial trait gain a +2 bonus on all Will saving throws.",
	            "replaces" : ["Adaptability"]
	        },
	        "Integrated" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Many half-elves are skilled in the art of ingratiating themselves into a community as if they were natives. Half-elves with this racial trait gain a +1 bonus on Bluff, Disguise, and Knowledge (local) checks.",
	            "replaces" : ["Adaptability"]
	        },
	        "Sociable" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Half-elves are skilled at charming others and recovering from faux pas. If half-elves with this racial trait attempt to change a creature's attitude with a Diplomacy check and fail by 5 or more, they can try to influence the creature a second time even if 24 hours have not passed.",
	            "replaces" : ["Adaptability"]
	        },
	        "Wary" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Many half-elves have spent their long lives moving from place to place, often driven out by the hostility of others. Such experiences have made them wary of others' motivations. Half-elves with this trait gain a +1 racial bonus on Sense Motive and Bluff checks.",
	            "replaces" : ["Keen Senses"]
	        },
	        "Water Child" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-elves are born of elves adapted to life on or near the water. These half-elves gain a +4 racial bonus on Swim checks, can always take 10 while swimming, and may choose Aquan as a bonus language.",
	            "replaces" : ["Adaptability", "Multitalented"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Elven"],
	            "list" : ["Aboleth", "Abyssal", "Aklo", "Aquan", "Auran", "Boggard", "Catfolk", "Celestial", "Draconic", "Drow Sign Language", "Dwarven",
	                    "D'ziriak (understanding only,  cannot speak)", "Human Dialect", "Giant", "Gnoll", "Gnome", "Goblin", "Grippli", "Halfling", "Ignan",
	                    "Infernal", "Orc", "Sylvan", "Tengu", "Terran", "Undercommon"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Half-orc" : {
	        "type" : "race",
	        "description" : "Often fierce and savage, sometimes noble and resolute, half-orcs can manifest the best and worst qualities of their parent races. Many half-orcs struggle to keep their more bestial natures in check in order to epitomize the most heroic values of humanity. Unfortunately, many outsiders see half-orcs as hopeless abominations devoid of civility, if not monsters unworthy of pity or parley.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Half-orc characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.",
	            "Any" : "+2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Half-orcs are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Half-orcs have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Half-orcs can see in the dark up to 60 feet."
	        },
	        "Intimidating" : {
	            "type" : "trait.racial",
	            "description" : "Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature."
	        },
	        "Orc Blood" : {
	            "type" : "trait.racial",
	            "description" : "Half-orcs count as both humans and orcs for any effect related to race."
	        },
	        "Orc Ferocity" : {
	            "type" : "trait.racial",
	            "description" : "Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Half-orcs are proficient with greataxes and falchions and treat any weapon with the word \"orc\" in its name as a martial weapon."
	        },
	        "Acute Darkvision" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-orcs have exceptionally sharp darkvision, gaining darkvision 90 feet.",
	            "replaces" : ["Orc Ferocity"]
	        },
	        "Beastmaster" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-orcs have a spiritual kinship with fantastical beasts, capturing them for sport or living and hunting with them. A half-orc with this trait treats whips and nets as martial weapons and gains a +2 racial bonus on Handle Animal checks.",
	            "replaces" : ["Orc Ferocity"]
	        },
	        "Bestial" : {
	            "type" : "trait.racial.alternate",
	            "description" : "The orc blood of some half-orcs manifests in the form of particularly prominent orc features, exacerbating their bestial appearances but improving their already keen senses. They gain a +2 racial bonus on Perception checks.",
	            "replaces" : ["Orc Ferocity"]
	        },
	        "Cavewight" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-orcs live far below the surface, seeking freedom in winding cave complexes. Half-orcs with this racial trait gain a +1 racial bonus on Knowledge (dungeoneering) and Survival checks made underground.",
	            "replaces" : ["Iintimidating"]
	        },
	        "Chain Fighter" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-orcs have escaped from slavery and reforged the chains of their imprisonment into deadly weapons. Half-orcs with this racial trait are proficient with flails and heavy flails, and treat dire flails and spiked chains as martial weapons.",
	            "replaces" : ["Weapon Familiarity"]
	        },
	        "City-Raised" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Half-orcs with this trait know little of their orc ancestry and were raised among humans and other half-orcs in a large city. City-raised half-orcs are proficient with whips and longswords, and receive a +2 racial bonus on Knowledge (local) checks.",
	            "replaces" : ["Weapon Familiarity"]
	        },
	        "Forest Walker" : {
	            "type" : "trait.racial.alternate",
	            "description" : "More at home in the forests and jungles of the world, these half-orcs are well adapted to their surroundings. Half-orcs with this trait have low-light vision and gain a +2 racial bonus on Climb checks.",
	            "replaces" : ["Darkvision"]
	        },
	        "Gatecrasher" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Many half-orcs revel in acts of wanton destruction. Half-orcs with this racial trait gain a +2 racial bonus on Strength checks to break objects and on sunder combat maneuver checks.",
	            "replaces" : ["Orc Ferocity"]
	        },
	        "Rock Climber" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Half-orcs from mountainous regions are excellent climbers, and sometimes ambush prey by leaping down from above. Half-orcs with this racial trait gain a +1 racial bonus on Acrobatics and Climb checks.",
	            "replaces" : ["Intimidating"]
	        },
	        "Sacred Tattoo" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Many half-orcs decorate themselves with tattoos, piercings, and ritual scarification, which they consider sacred markings. Half-orcs with this racial trait gain a +1 luck bonus on all saving throws.",
	            "replaces" : ["Orc Ferocity"]
	        },
	        "Scavenger" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-orcs eke out a leaving picking over the garbage heaps of society, and must learn to separate rare finds from the inevitable dross. Half-orcs with this racial trait receive a +2 racial bonus on Appraise checks and on Perception checks to find hidden objects (including traps and secret doors), determine whether food is spoiled, or identify a potion by taste.",
	            "replaces" : ["Intimidating"]
	        },
	        "Shaman's Apprentice" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Only the most stalwart survive the years of harsh treatment that an apprenticeship to an orc shaman entails. Half-orcs with this trait gain Endurance as a bonus feat.",
	            "replaces" : ["Intimidating"]
	        },
	        "Skilled" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Second- and third-generation half-orcs often favor their human heritage more than their orc heritage. Half-orcs with this trait gain 1 additional skill rank per level.",
	            "replaces" : ["Darkvision"]
	        },
	        "Toothy" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some half-orcs' tusks are large and sharp, granting a bite attack. This is a primary natural attack that deals 1d4 points of piercing damage.",
	            "replaces" : ["Orc Ferocity"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Orc"],
	            "list" : ["Abyssal", "Draconic", "Giant", "Gnoll", "Goblin"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Human" : {
	        "type" : "race",
	        "description" : "Ambitious, sometimes heroic, and always confident, humans have an ability to work together toward common goals that makes them a force to be reckoned with. Though short-lived compared to other races, their boundless energy and drive allow them to accomplish much in their brief lifetimes.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Human characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature.",
	            "Any" : "+2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Humans are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Humans have a base speed of 30 feet."
	        },
	        "Bonus Feat" : {
	            "type" : "trait.racial",
	            "description" : "Humans select one extra feat at 1st level."
	        },
	        "Skilled" : {
	            "type" : "trait.racial",
	            "description" : "Humans gain an additional skill rank at first level and one additional rank whenever they gain a level."
	        },
	        "Adoptive Parentage" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans are sometimes orphaned and adopted by other races. Choose one humanoid race without the human subtype. You start play with that race's languages and gain that race's weapon familiarity racial trait (if any). If the race does not have weapon familiarity, you gain either Skill Focus or Weapon Focus as a bonus feat that is appropriate for that race instead.",
	            "replaces" : ["Bonus feat"]
	        },
	        "Dual Talent" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some humans are uniquely skilled at maximizing their natural gifts. These humans pick two ability scores and gain a +2 racial bonus in each of those scores.",
	            "replaces" : ["Ability Modifiers", "Bonus Feat", "Skilled"]
	        },
	        "Eye for Talent" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans have great intuition for hidden potential. They gain a +2 racial bonus on Sense Motive checks. In addition, when they acquire an animal companion, bonded mount, cohort, or familiar, that creature gains a +2 bonus to one ability score of the character's choice.",
	            "replaces" : ["Bonus feat"]
	        },
	        "Focused Study" : {
	            "type" : "trait.racial.alternate",
	            "description" : "All humans are skillful, but some, rather than being generalists, tend to specialize in a handful of skills. At 1st, 8th, and 16th level, such humans gain Skill Focus in a skill of their choice as a bonus feat.",
	            "replaces" : ["Bonus feat"]
	        },
	        "Heart of the Fields" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans born in rural areas are used to hard labor. They gain a racial bonus equal to half their character level to any one Craft or Profession skill, and once per day they may ignore an effect that would cause them to become fatigued or exhausted.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Mountains" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans born in the mountains are skilled at negotiating heights and precipices. They gain a +2 racial bonus on Climb checks and Acrobatics checks to move on narrow surfaces and uneven ground. Furthermore, they are considered acclimated to the effects of high altitude.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Sea" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans born near the sea are always drawn to it. They gain a +2 racial bonus on Profession (sailor) and Swim checks, and these are always class skills for them. They can hold their breath twice as long as normal, and spellcasters gain a +4 racial bonus on concentration checks when attempting to cast spells underwater.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Slums" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans who eke out a life in a city's teeming slums must be quick and clever. They gain a +2 racial bonus on Sleight of Hand and Stealth checks, and a +4 racial bonus on Survival checks in urban and underground settings. In addition, they may roll twice when saving against disease, taking the better roll.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Snows" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans born in chilly climes treat cold climates as one category less severe. They gain a +2 racial bonus on Fortitude saving throws against the effects of cold climates, on any check or saving throw to avoid slipping and falling, and to CMD against trip combat maneuvers. This bonus applies on Acrobatics and Climb checks made in slippery conditions.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Streets" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans from bustling cities are skilled with crowds. They gain a +1 racial bonus on Reflex saves and a +1 dodge bonus to Armor Class when adjacent to at least two other allies. Crowds do not count as difficult terrain for them.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Sun" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans born in tropical climates treat hot climates as one category less severe. They also gain a +2 racial bonus on Fortitude saving throws against the effects of a hot climate, as well as against the poison and distraction ability of swarms and vermin.",
	            "replaces" : ["Skilled"]
	        },
	        "Heart of the Wilderness" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Humans raised in the wild learn the hard way that only the strong survive. They gain a racial bonus equal to half their character level on Survival checks. They also gain a +5 racial bonus on Constitution checks to stabilize when dying and add half their character level to their Constitution score when determining the negative hit point total necessary to kill them.",
	            "replaces" : ["Skilled"]
	        },
	        "Heroic" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Some humans are born heroes. In campaigns that use the optional hero point system, each time these humans gain a level, they gain 2 hero points instead of 1. If they take the Blood of Heroes feat, they gain 3 hero points each level instead of 2.",
	            "replaces" : ["Bonus feat"]
	        },
	        "Mixed Heritage" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Often human civilization is defined by more than one characteristic. A human with this trait may select a second \"Heart of the\" racial trait. This replaces the bonus feat racial trait."
	        },
	        "Silver Tongued" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Human are often adept at subtle manipulation and putting even sworn foes at ease. Humans with this trait gain a +2 bonus on Diplomacy and Bluff checks. In addition, when they use Diplomacy to shift a creature's attitude, they can shift up to three steps up rather than just two.",
	            "replaces" : ["Skilled"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common"],
	            "list" : ["Aboleth", "Abyssal", "Aklo", "Aquan", "Auran", "Boggard", "Catfolk", "Celestial", "Draconic", "Drow Sign Language", "Dwarven",
	                    "D'ziriak (understanding only, cannot speak)", "Human Dialect", "Giant", "Gnoll", "Gnome", "Goblin", "Grippli", "Halfling", "Ignan",
	                    "Infernal", "Orc", "Sylvan", "Tengu", "Terran", "Undercommon"]
	        },
	        "source" : "Core Rulebook"
	    },
	    "Aasimar" : {
	        "type" : "race",
	        "description" : "Creatures blessed with a celestial bloodline, aasimars seem human except for some exotic quality that betrays their otherworldly origin. While aasimars are nearly always beautiful, something simultaneously a part of and apart from humanity, not all of them are good, though very few are evil.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars are insightful, confident, and personable.",
	            "Wisdom" : "+2",
	            "Charisma" : "+2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars can see in the dark up to 60 feet."
	        },
	        "Skilled" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars have a +2 racial bonus on Diplomacy and Perception checks."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars can use daylight once per day as a spell-like ability (caster level equal to the aasimar's class level)."
	        },
	        "Celestial Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Aasimars have acid resistance 5, cold resistance 5, and electricity resistance 5."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Celestial"],
	            "list" : ["Draconic", "Dwarven", "Elven", "Gnome", "Halfling", "Sylvan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Catfolk" : {
	        "type" : "race",
	        "description" : "A race of graceful explorers, catfolk are both clannish and curious by nature. They tend to get along with races that treat them well and respect their boundaries. They love exploration, both physical and intellectual, and tend to be natural adventurers.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Catfolk are sociable and agile, but often lack common sense.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Wisdom" : "-2"
	        },
	        "Catfolk" : {
	            "type" : "trait.racial",
	            "description" : "Catfolk are humanoids with the catfolk subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Catfolk are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Catfolk have a base speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "In dim light, catfolk can see twice as far as humans."
	        },
	        "Cat's Luck (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Once per day when a catfolk makes a Reflex saving throw, he can roll the saving throw twice and take the better result. He must decide to use this ability before the saving throw is attempted."
	        },
	        "Natural Hunter" : {
	            "type" : "trait.racial",
	            "description" : "Catfolk receive a +2 racial bonus on Perception, Stealth, and Survival checks."
	        },
	        "Sprinter" : {
	            "type" : "trait.racial",
	            "description" : "Catfolk gain a 10-foot racial bonus to their speed when using the charge, run, or withdraw actions."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Catfolk"],
	            "list" : ["Elven", "Gnoll", "Gnome", "Goblin", "Halfling", "Orc", "Sylvan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Dhampir" : {
	        "type" : "race",
	        "description" : "The accursed spawn of vampires, dhampirs are living creatures tainted with the curse of undeath, which causes them to take damage from positive energy and gain healing from negative energy. While many members of this race embrace their dark sides, others are powerfully driven to rebel against their taint and hunt down and destroy vampires and their ilk.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Dhampirs are fast and seductive, but their racial bond to the undead impedes their mortal vigor.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Constitution" : "-2"
	        },
	        "Dhampir" : {
	            "type" : "trait.racial",
	            "description" : "Dhampirs are humanoids with the dhampir subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Dhampirs are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Dhampirs have a base speed of 30 feet."
	        },
	        "Senses" : {
	            "type" : "trait.racial",
	            "description" : "Low-light vision and darkvision 60 feet."
	        },
	        "Manipulative" : {
	            "type" : "trait.racial",
	            "description" : "+2 racial bonus on Bluff and Perception."
	        },
	        "Undead Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Dhampirs gain a +2 racial bonus on saving throws against disease and mind-affecting effects."
	        },
	        "Light Sensitivity" : {
	            "type" : "trait.racial",
	            "description" : "Dhampirs are dazzled in areas of bright sunlight or within the radius of a daylight spell."
	        },
	        "Negative Energy Affinity" : {
	            "type" : "trait.racial",
	            "description" : "Though a living creature, a dhampir reacts to positive and negative energy as if it were undead—positive energy harms it, while negative energy heals it."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "A dhampir can use detect undead three times per day as a spell-like ability. The caster level for this ability equals the dhampir's class level."
	        },
	        "Resist Level Drain (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "A dhampir takes no penalties from energy drain effects, though he can still be killed if he accrues more negative levels then he has Hit Dice. After 24 hours, any negative levels a dhampir takes are removed without the need for an additional saving throw."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common"],
	            "list" : ["Aboleth", "Abyssal", "Aklo", "Aquan", "Auran", "Boggard", "Catfolk", "Celestial", "Draconic", "Drow Sign Language", "Dwarven",
	                    "D'ziriak (understanding only, cannot speak)", "Human Dialect", "Giant", "Gnoll", "Gnome", "Goblin", "Grippli", "Halfling", "Ignan",
	                    "Infernal", "Orc", "Sylvan", "Tengu", "Terran", "Undercommon"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Drow" : {
	        "type" : "race",
	        "description" : "Dark reflections of surface elves, drow are shadowy hunters who strive to snuff out the world's light. Drow are powerful magical creatures who typically serve demons, and only their chaotic nature stops them from becoming an even greater menace. A select few forsake their race's depraved and nihilistic society to walk a heroic path.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Drow are nimble and manipulative.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Constitution" : "-2"
	        },
	        "Elf" : {
	            "type" : "trait.racial",
	            "description" : "Drow are humanoids with the elf subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Drow are Medium creatures and receive no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Drow have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Drow can see in the dark up to 120 feet."
	        },
	        "Drow Immunities" : {
	            "type" : "trait.racial",
	            "description" : "Drow are immune to magic sleep effects and gain a +2 racial bonus on saving throws against enchantment spells and effects."
	        },
	        "Keen Senses" : {
	            "type" : "trait.racial",
	            "description" : "Drow gain a +2 racial bonus on Perception checks."
	        },
	        "Poison Use" : {
	            "type" : "trait.racial",
	            "description" : "Drow are skilled in the use of poison and never risk accidentally poisoning themselves."
	        },
	        "Spell Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Drow possess spell resistance equal to 6 plus their class levels."
	        },
	        "Spell-Like Abilities" : {
	            "type" : "trait.racial",
	            "description" : "A drow can cast dancing lights, darkness, and faerie fire, once each per day, using her total character level as her caster level."
	        },
	        "Light Blindness" : {
	            "type" : "trait.racial",
	            "description" : "Abrupt exposure to bright light blinds drow for 1 round; on subsequent rounds, they are dazzled as long as they remain in the affected area."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Drow are proficient with the hand crossbow, rapier, and short sword."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Elven", "Undercommon"],
	            "list" : ["Abyssal", "Aklo", "Aquan", "Common", "Draconic", "Drow Sign Language", "Gnome", "Goblin"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Fetchling" : {
	        "type" : "race",
	        "description" : "Long ago, fetchlings were humans exiled to the Shadow Plane, but that plane's persistent umbra has transformed them into a race apart. These creatures have developed an ability to meld into the shadows and have a natural affinity for shadow magic. Fetchlings—who call themselves kayal—often serve as emissaries between the inhabitants of the Shadow Plane and the Material Plane.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings are quick and forceful, but often strange and easily distracted by errant thoughts.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Wisdom" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings are Medium creatures and receive no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings can see in the dark up to 60 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings can see twice as far as humans in conditions of dim light."
	        },
	        "Skilled" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings have a +2 racial bonus on Knowledge (planes) and Stealth checks."
	        },
	        "Shadow Blending (Su)" : {
	            "type" : "trait.racial",
	            "description" : "Attacks against a fetchling in dim light have a 50% miss chance instead of the normal 20% miss chance. This ability does not grant total concealment; it just increases the miss chance."
	        },
	        "Shadowy Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Fetchlings have cold resistance 5 and electricity resistance 5."
	        },
	        "Spell-Like Abilities (Sp)" : {
	            "type" : "trait.racial",
	            "description" : "A fetchling can use disguise self once per day as a spell-like ability. He can assume the form of any humanoid creature using this spell-like ability. When a fetchling reaches 9th level in any combination of classes, he gains shadow walk (self only) as a spell-like ability usable once per day, and at 13th level, he gains plane shift (self only, to the Shadow Plane or the Material Plane only) usable once per day. A fetchling's caster level is equal to his total Hit Dice."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common"],
	            "list" : ["Aklo", "Aquan", "Auran", "Draconic", "D'ziriak (understanding only, cannot speak)", "Ignan", "Terran", "any regional human tongue"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Goblin" : {
	        "type" : "race",
	        "description" : "Crazy pyromaniacs with a tendency to commit unspeakable violence, goblins are the smallest of the goblinoid races. While they are a fun-loving race, their humor is often cruel and hurtful. Adventuring goblins constantly wrestle with their darkly mischievous side in order to get along with others. Few are truly successful.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Goblins are fast, but weak and unpleasant to be around.",
	            "Dexterity" : "+4",
	            "Strength" : "-2",
	            "Charisma" : "-2"
	        },
	        "Goblinoid" : {
	            "type" : "trait.racial",
	            "description" : "Goblins are humanoids with the goblinoid subtype."
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Goblins are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their CMB and CMD, and a +4 size bonus on Stealth checks."
	        },
	        "Fast" : {
	            "type" : "trait.racial",
	            "description" : "Goblins are fast for their size, and have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Goblins can see in the dark up to 60 feet."
	        },
	        "Skilled" : {
	            "type" : "trait.racial",
	            "description" : "+4 racial bonus on Ride and Stealth checks."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Goblin"],
	            "list" : ["Common", "Draconic", "Dwarven", "Gnoll", "Gnome", "Halfling", "Orc"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Hobgoblin" : {
	        "type" : "race",
	        "description" : "These creatures are the most disciplined and militaristic of the goblinoid races. Tall, tough as nails, and strongly built, hobgoblins would be a boon to any adventuring group, were it not for the fact that they tend to be cruel and malicious, and often keep slaves.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Hobgoblins are fast and hardy.",
	            "Dexterity" : "+2",
	            "Constitution" : "+2"
	        },
	        "Goblinoid" : {
	            "type" : "trait.racial",
	            "description" : "Hobgoblins are humanoids with the goblinoid subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Hobgoblins are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Hobgoblins have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Hobgoblins can see in the dark up to 60 feet."
	        },
	        "Sneaky" : {
	            "type" : "trait.racial",
	            "description" : "Hobgoblins receive a +4 racial bonus on Stealth checks."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Goblin"],
	            "list" : ["Draconic", "Dwarven", "Infernal", "Giant", "Orc"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Ifrit" : {
	        "type" : "race",
	        "description" : "Ifrits are a race descended from mortals and the strange inhabitants of the Plane of Fire. Their physical traits and personalities often betray their fiery origins, and they tend to be restless, independent, and imperious. Frequently driven from cities for their ability to manipulate flame, ifrits make powerful fire sorcerers and warriors who can wield flame like no other race.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Ifrits are passionate and quick, but impetuous and destructive.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Wisdom" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Ifrits are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Ifrits are Medium creatures and receive no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Ifrits have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Ifrits can see in the dark up to 60 feet."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "Burning hands 1/day (caster level equals the ifrit's level)."
	        },
	        "Energy Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Ifrits have fire resistance 5."
	        },
	        "Fire Affinity" : {
	            "type" : "trait.racial",
	            "description" : "Ifrit sorcerers with the elemental (fire) bloodline treat their Charisma score as 2 points higher for all sorcerer spells and class abilities. Ifrit spellcasters with the Fire domain use their domain powers and spells at +1 caster level."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Ignan"],
	            "list" : ["Aquan", "Auran", "Dwarven", "Elven", "Gnome", "Halfling", "Terran"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Kobold" : {
	        "type" : "race",
	        "description" : "Considering themselves the scions of dragons, kobolds have diminutive statures but massive egos. A select few can take on more draconic traits than their kin, and many are powerful sorcerers, canny alchemists, and cunning rogues.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds are fast but weak.",
	            "Dexterity" : "+2",
	            "Strength" : "-4",
	            "Constitution" : "-2"
	        },
	        "Reptilian" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds are humanoids with the reptilian subtype."
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty on their combat maneuver checks and to Combat Maneuver Defense, and a +4 size bonus on Stealth checks."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds can see in the dark up to 60 feet."
	        },
	        "Armor" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds have a +1 natural armor bonus."
	        },
	        "Crafty" : {
	            "type" : "trait.racial",
	            "description" : "Kobolds gain a +2 racial bonus on Craft (trapmaking), Perception, and Profession (miner) checks. Craft (traps) and Stealth are always class skills for a kobold."
	        },
	        "Weakness" : {
	            "type" : "trait.racial",
	            "description" : "Light sensitivity."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Draconic"],
	            "list" : ["Common", "Dwarven", "Gnome", "Undercommon"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Orc" : {
	        "type" : "race",
	        "description" : "Savage, brutish, and hard to kill, orcs are often the scourge of far-flung wildernesses and cavern deeps. Many orcs become fearsome barbarians, as they are muscular and prone to bloody rages. Those few who can control their bloodlust make excellent adventurers.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Orcs are brutal and savage.",
	            "Strength" : "+4",
	            "Intelligence" : "-2",
	            "Wisdom" : "-2",
	            "Charisma" : "-2"
	        },
	        "Orc" : {
	            "type" : "trait.racial",
	            "description" : "Orcs are humanoids with the orc subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Orcs are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Orcs have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Orcs can see in the dark up to 60 feet."
	        },
	        "Light Sensitivity" : {
	            "type" : "trait.racial",
	            "description" : "Orcs are dazzled in areas of bright sunlight or within the radius of a daylight spell."
	        },
	        "Ferocity" : {
	            "type" : "trait.racial",
	            "description" : "Orcs can remain conscious and continue fighting even if their hit point totals fall below 0. Orcs are still staggered at 0 hit points or lower and lose 1 hit point each round as normal."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Orcs are always proficient with greataxes and falchions, and treat any weapon with the word \"orc\" in its name as a martial weapon."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Orc"],
	            "list" : ["Dwarven", "Giant", "Gnoll", "Goblin", "Undercommon"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Oread" : {
	        "type" : "race",
	        "description" : "Creatures of human ancestry mixed with the blood of creatures from the Plane of Earth, oreads are as strong and solid as stone. Often stubborn and steadfast, their unyielding nature makes it hard for them to get along with most races other than dwarves. Oreads make excellent warriors and sorcerers who can manipulate the raw power of stone and earth.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Oreads are strong, solid, stable, and stoic.",
	            "Strength" : "+2",
	            "Wisdom" : "+2",
	            "Charisma" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Oreads are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Oreads are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Slow Speed" : {
	            "type" : "trait.racial",
	            "description" : "Oreads have a base speed of 20 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Oreads can see in the dark up to 60 feet."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "Magic stone 1/day (caster level equals the oread's total level)."
	        },
	        "Energy Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Oreads have acid resistance 5."
	        },
	        "Earth Affinity" : {
	            "type" : "trait.racial",
	            "description" : "Oread sorcerers with the elemental (earth) bloodline treat their Charisma score as 2 points higher for all sorcerer spells and class abilities. Oread clerics with the Earth domain use their domain powers and spells at +1 caster level."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common, Terran"],
	            "list" : ["Aquan", "Auran", "Dwarven", "Elven", "Gnome", "Halfling", "Ignan", "Undercommon"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Ratfolk" : {
	        "type" : "race",
	        "description" : "These small, ratlike humanoids are clannish and nomadic masters of trade. Often tinkers and traders, they are more concerned with accumulating interesting trinkets than amassing wealth. Ratfolk often adventure to find new and interesting curiosities rather than coin.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk are agile and clever, yet physically weak.",
	            "Dexterity" : "+2",
	            "Intelligence" : "+2",
	            "Strength" : "-2"
	        },
	        "Ratfolk" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk are humanoids with the ratfolk subtype."
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk are Small and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty on combat maneuver checks and to their CMD, and a +4 size bonus on Stealth checks."
	        },
	        "Slow Speed" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk have a base speed of 20 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk can see in the dark up to 60 feet."
	        },
	        "Rodent Empathy" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk gain a +4 racial bonus on Handle Animal checks made to influence rodents."
	        },
	        "Swarming" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk are used to living and fighting communally, and are adept at swarming foes for their own gain and their foes' detriment. Up to two ratfolk can share the same square at the same time. If two ratfolk in the same square attack the same foe, they are considered to be flanking that foe as if they were in two opposite squares."
	        },
	        "Tinker" : {
	            "type" : "trait.racial",
	            "description" : "Ratfolk gain a +2 racial bonus on Craft (alchemy), Perception, and Use Magic Device checks."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common"],
	            "list" : ["Aklo", "Draconic", "Dwarven", "Gnoll", "Gnome", "Goblin", "Halfling", "Orc", "Undercommon"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Sylph" : {
	        "type" : "race",
	        "description" : "Ethereal folk of elemental air, sylphs are the result of human blood mixed with that of airy elemental folk. Like ifrits, oreads, and undines, they can become powerful elemental sorcerers with command over their particular elemental dominion. They tend to be beautiful and lithe, and have a knack for eavesdropping.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Sylphs are quick and insightful, but slight and delicate.",
	            "Dexterity" : "+2",
	            "Intelligence" : "+2",
	            "Constitution" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Sylphs are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Sylphs are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Sylphs have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Sylphs can see in the dark up to 60 feet."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "Feather fall 1/day (caster level equals the sylph's total level)."
	        },
	        "Energy Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Sylphs have electricity resistance 5."
	        },
	        "Air Affinity" : {
	            "type" : "trait.racial",
	            "description" : "Sylph sorcerers with the elemental (air) bloodline treat their Charisma score as 2 points higher for all sorcerer spells and class abilities. Sylph spellcasters with the Air domain use their domain powers and spells at +1 caster level."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Auran"],
	            "list" : ["Aquan", "Dwarven", "Elven", "Gnome", "Halfling", "Ignan", "Terran"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Tengu" : {
	        "type" : "race",
	        "description" : "These crowlike humanoid scavengers excel in mimicry and swordplay. Flocking into densely populated cities, tengus occasionally join adventuring groups out of curiosity or necessity. Their impulsive nature and strange habits can often be unnerving to those who are not used to them.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Tengus are fast and observant, but relatively fragile and delicate.",
	            "Dexterity" : "+2",
	            "Wisdom" : "+2",
	            "Constitution" : "-2"
	        },
	        "Tengu" : {
	            "type" : "trait.racial",
	            "description" : "Tengus are humanoids with the tengu subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Tengus are Medium creatures and receive no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Tengus have a base speed of 30 feet."
	        },
	        "Senses" : {
	            "type" : "trait.racial",
	            "description" : "Tengus have low-light vision."
	        },
	        "Sneaky" : {
	            "type" : "trait.racial",
	            "description" : "Tengus gain a +2 racial bonus on Perception and Stealth checks."
	        },
	        "Gifted Linguist" : {
	            "type" : "trait.racial",
	            "description" : "Tengus gain a +4 racial bonus on Linguistics checks, and learn 2 languages each time they gain a rank in Linguistics rather than 1 language."
	        },
	        "Swordtrained" : {
	            "type" : "trait.racial",
	            "description" : "Tengus are trained from birth in swordplay, and as a result are automatically proficient with swordlike weapons (including bastard swords, daggers, elven curve blades, falchions, greatswords, kukris, longswords, punching daggers, rapiers, scimitars, short swords, and two-bladed swords)."
	        },
	        "Natural Weapon" : {
	            "type" : "trait.racial",
	            "description" : "A tengu has a bite attack that deals 1d3 points of damage."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Tengus begin play speaking Common and Tengu"],
	            "list" : [" Tengus with high Intelligence scores can choose any languages they want (except for secret languages, such as Druidic)"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Tiefling" : {
	        "type" : "race",
	        "description" : "Diverse and often despised by humanoid society, tieflings are mortals stained with the blood of fiends. Other races rarely trust them, and this lack of empathy usually causes tieflings to embrace the evil, depravity, and rage that seethe within their corrupt blood. A select few see the struggle to smother such dark desires as motivation for grand heroism.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings are quick in body and mind, but are inherently strange and unnerving.",
	            "Dexterity" : "+2",
	            "Intelligence" : "+2",
	            "Charisma" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings are Medium creatures and receive no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings have a base speed of 30 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings see in the dark for up to 60 feet."
	        },
	        "Skilled" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings gain a +2 racial bonus on Bluff and Stealth checks."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings can use darkness once per day as a spell-like ability. The caster level for this ability equals the tiefling's class level."
	        },
	        "Fiendish Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Tieflings have cold resistance 5, electricity resistance 5, and fire resistance 5."
	        },
	        "Fiendish Sorcery" : {
	            "type" : "trait.racial",
	            "description" : "Tiefling sorcerers with the Abyssal or Infernal bloodlines treat their Charisma score as 2 points higher for all sorcerer class abilities."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Tieflings begin play speaking Common and either Abyssal or Infernal"],
	            "list" : [" Tieflings with high intelligence scores can choose from the following: Abyssal, Draconic, Dwarven, Elven, Gnome, Goblin, Halfling, Infernal, and Orc"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Undine" : {
	        "type" : "race",
	        "description" : "Like their cousins, the ifrits, oreads, and sylphs, undines are humans touched by planar elements. They are the scions of elemental water, equally graceful both on land and in water. Undines are adaptable and resistant to cold, and have an affinity for water magic.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Undines are both perceptive and agile, but tend to adapt rather than match force with force.",
	            "Dexterity" : "+2",
	            "Wisdom" : "+2",
	            "Strength" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Undines are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Undines are Medium creatures and receive no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Undines have a base speed of 30 feet on land. They also have a swim speed of 30 feet, can move in water without making Swim checks, and always treat Swim as a class skill."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Undines can see in the dark up to 60 feet."
	        },
	        "Spell-Like Ability" : {
	            "type" : "trait.racial",
	            "description" : "Hydraulic push 1/day (caster level equals the undine's level)."
	        },
	        "Energy Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Undines have cold resistance 5."
	        },
	        "Water Affinity" : {
	            "type" : "trait.racial",
	            "description" : "Undine sorcerers with the elemental (water) bloodline treat their Charisma score as 2 points higher for all sorcerer spells and class abilities. Undine clerics with the Water domain cast their Water domain powers and spells at +1 caster level."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Aquan"],
	            "list" : ["Auran", "Dwarven", "Elven", "Gnome", "Halfling", "Ignan", "Terran"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Changelings" : {
	        "type" : "race",
	        "description" : "The offspring of hags and their mortal lovers, changelings are abandoned and raised by foster parents. Always female, changelings all hear a spiritual call during puberty to find their true origins. Tall and slender, with dark hair and eyes mismatched in color, changelings are eerily attractive.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Changelings are frail, but are clever and comely.",
	            "Wisdom" : "+2",
	            "Charisma" : "+2",
	            "Constitution" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Changelings are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Humanoid" : {
	            "type" : "trait.racial",
	            "description" : "Changelings are humanoids with the changeling subtype."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Changelings have a base speed of 30 feet."
	        },
	        "Hag Racial Trait" : {
	            "type" : "trait.racial",
	            "description" : "The changeling inherits one of the following racial traits, depending on her mother's hag type:",
	            "abilitySelection" : [
	                    {
	                        "name" : "Hulking Changeling (Annis Hag)",
	                        "type" : "trait.racial",
	                        "description" : "The changeling gains a +1 racial bonus on melee damage."
	                    },
	                    {
	                        "name" : "Green Widow (Green Hag)",
	                        "type" : "trait.racial",
	                        "description" : "The changeling gains a +2 racial bonus on Bluff checks against creatures that are sexually attracted to her."
	                    },
	                    {
	                        "name" : "Sea Lungs (Sea Hag)",
	                        "type" : "trait.racial",
	                        "description" : "The changeling may hold her breath for a number of rounds equal to three times her Constitution before she risks drowning."
	                    }]
	        },
	        "Claws" : {
	            "type" : "trait.racial",
	            "description" : "Changelings' fingernails are hard and sharp, granting them two claw attacks (1d4 points of damage each)."
	        },
	        "Natural Armor" : {
	            "type" : "trait.racial",
	            "description" : "Changelings have a +1 natural armor bonus."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Changelings can see in the dark up to 60 feet."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Changelings begin play speaking Common and the primary language of their host society"],
	            "list" : [" Changelings with high Intelligence scores can choose from the following: Aklo, Draconic, Dwarven, Elven, Giant, Gnoll, Goblin, and Orc"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Duergar" : {
	        "type" : "race",
	        "description" : "Gray skinned, deep-dwelling dwarves who hate their lighter skinned cousins, duergar view life as constant toil ending only in death. Though these dwarves are typically evil, honor and keeping one's word means everything to them, and a rare few make loyal adventuring companions.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Duergar are hearty and observant, but also belligerent.",
	            "Constitution" : "+2",
	            "Wisdom" : "+2",
	            "Charisma" : "-4"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Duergar are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Dwarf" : {
	            "type" : "trait.racial",
	            "description" : "Duergar are humanoids with the dwarf subtype."
	        },
	        "Slow and Steady" : {
	            "type" : "trait.racial",
	            "description" : "Duergar have a base speed of 20 feet, but their speed is never modified by armor or encumbrance."
	        },
	        "Superior Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Duergar can see in the dark up to 120 feet."
	        },
	        "Duergar Immunities" : {
	            "type" : "trait.racial",
	            "description" : "Duergar are immune to paralysis, phantasms, and poison. They gain a +2 racial bonus on saves against spells and spell-like abilities."
	        },
	        "Stability" : {
	            "type" : "trait.racial",
	            "description" : "Duergar receive a +4 racial bonus to their CMD against bull rush or trip attempts while on solid ground."
	        },
	        "Spell-Like Abilities" : {
	            "type" : "trait.racial",
	            "description" : "A duergar can use enlarge person and invisibility once each per day, using its character level as its caster level and affecting itself only."
	        },
	        "Light Sensitivity" : {
	            "type" : "trait.racial",
	            "description" : "Duergar are dazzled in areas of bright light."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Dwarven", "Undercommon"],
	            "list" : ["Aklo", "Draconic", "Giant", "Goblin", "Orc", "Terran"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Gillmen" : {
	        "type" : "race",
	        "description" : "Survivors of a land-dwelling culture whose homeland was destroyed, gillmen were saved and transformed into an amphibious race by the aboleths. Though in many ways they appear nearly human, gillmen's bright purple eyes and gills set them apart from humanity. Reclusive and suspicious, gillmen know that one day the aboleths will call in the debt owed to them.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Gillmen are vigorous and beautiful, but their domination by the aboleths has made them weak-willed.",
	            "Constitution" : "+2",
	            "Charisma" : "+2",
	            "Wisdom" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Gillmen are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Aquatic" : {
	            "type" : "trait.racial",
	            "description" : "Gillmen are humanoids with the aquatic subtype."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Gillmen have a base speed of 30 feet on land. As aquatic creatures, they also have a swim speed of 30 feet, can move in water without making Swim checks, and always treat Swim as a class skill."
	        },
	        "Amphibious" : {
	            "type" : "trait.racial",
	            "description" : "Gillmen have the aquatic subtype, but can breathe both water and air."
	        },
	        "Enchantment Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Gillmen gain a +2 racial saving throw bonus against non-aboleth enchantment spells and effects, but take a -2 penalty on such saving throws against aboleth sources."
	        },
	        "Water Dependent" : {
	            "type" : "trait.racial",
	            "description" : "A gillman's body requires constant submersion in fresh or salt water. Gillmen who spend more than 1 day without fully submerging themselves in water risk internal organ failure, painful cracking of the skin, and death within 4d6 hours."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Aboleth"],
	            "list" : ["Aklo", "Aquan", "Draconic", "Elven"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Gripplis" : {
	        "type" : "race",
	        "description" : "Furtive frogfolk with the ability to camouflage themselves among fens and swamps, gripplis typically keep to their wetland homes, only rarely interacting with the outside world. Their chief motivation for leaving their marshy environs is to trade in metal and gems.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis are nimble and alert, but spindly.",
	            "Dexterity" : "+2",
	            "Wisdom" : "+2",
	            "Strength" : "-2"
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their CMB and CMD, and a +4 size bonus on Stealth checks."
	        },
	        "Grippli" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis are humanoids with the grippli subtype."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis have a base speed of 30 feet and a climb speed of 20 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis can see in the dark up to 60 feet."
	        },
	        "Camouflage" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis receive a +4 racial bonus on Stealth checks in marshes and forested areas."
	        },
	        "Swamp Stride (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "A grippli can move through difficult terrain at its normal speed while within a swamp. Magically altered terrain affects a grippli normally."
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Gripplis are proficient with nets."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Grippli"],
	            "list" : ["Boggard", "Draconic", "Elven", "Gnome", "Goblin", "Sylvan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Kitsune" : {
	        "type" : "race",
	        "description" : "These shapeshifting, foxlike folk share a love of mischief, art, and the finer things in life. They can appear as a single human as well as their true form, that of a foxlike humanoid. Kitsune are quick-witted, nimble, and gregarious, and because of this, a fair number of them become adventurers.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune are agile and companionable, but tend to be physically weak.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Strength" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Kitsune" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune are humanoids with the kitsune and shapechanger subtypes."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune have a base speed of 30 feet."
	        },
	        "Low-Light Vision (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune can see twice as far as humans in conditions of dim light."
	        },
	        "Change Shape (Su)" : {
	            "type" : "trait.racial",
	            "description" : "A kitsune can assume the appearance of a specific single human form of the same sex. The kitsune always takes this specific form when she uses this ability. A kitsune in human form cannot use her bite attack, but gains a +10 racial bonus on Disguise checks made to appear human. Changing shape is a standard action. This ability otherwise functions as alter self, except that the kitsune does not adjust her ability scores."
	        },
	        "Agile (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune receive a +2 racial bonus on Acrobatics checks."
	        },
	        "Kitsune Magic (Ex/Sp)" : {
	            "type" : "trait.racial",
	            "description" : "Kitsune add +1 to the DC of any saving throws against enchantment spells that they cast. Kitsune with a Charisma score of 11 or higher gain the following spell-like ability: 3/day—dancing lights."
	        },
	        "Natural Weapons (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "In her natural form, a kitsune has a bite attack that deals 1d4 points of damage."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Sylvan"],
	            "list" : ["any human language", "Aklo", "Celestial", "Elven", "Gnome", "Tengu"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Merfolk" : {
	        "type" : "race",
	        "description" : "These creatures have the upper torso of a well-built and attractive humanoid and a lower half consisting of a finned tail. Though they are amphibious and extremely strong swimmers, their lower bodies make it difficult for them to move on land. Merfolk can be shy and reclusive. Typically keeping to themselves, they are distrustful of land-dwelling strangers.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk are graceful, hale, and beautiful.",
	            "Dexterity" : "+2",
	            "Constitution" : "+2",
	            "Charisma" : "+2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Slow Speed" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk have a base speed of 5 feet. They have a swim speed of 50 feet."
	        },
	        "Aquatic" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk are humanoids with the aquatic subtype."
	        },
	        "Amphibious" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk are amphibious, but prefer not to spend long periods out of the water."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk have low-light vision."
	        },
	        "Armor" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk have a +2 natural armor bonus."
	        },
	        "Legless" : {
	            "type" : "trait.racial",
	            "description" : "Merfolk have no legs, and cannot be tripped."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Aquan"],
	            "list" : ["Aboleth", "Aklo", "Draconic", "Elven", "Sylvan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Nagaji" : {
	        "type" : "race",
	        "description" : "It is believed that nagas created the nagaji as a race of servants and that the nagaji worship their creators as living gods. Due to their reptilian nature and strange mannerisms, these strange, scaly folk inspire fear and wonder in others not of their kind. They are resistant to both poison and mind-affecting magic.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji are strong and have forceful personalities, but tend to ignore logic and mock scholastic pursuits.",
	            "Strength" : "+2",
	            "Charisma" : "+2",
	            "Intelligence" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Reptilian" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji are humanoids with the reptilian subtype."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji have a base speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji can see twice as far as humans in conditions of dim light."
	        },
	        "Armored Scales" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji have a +1 natural armor bonus from their scaly flesh."
	        },
	        "Resistant (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji receive a +2 racial saving throw bonus against mind-affecting effects and poison."
	        },
	        "Serpent's Sense (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Nagaji receive a +2 racial bonus on Handle Animal checks against reptiles, and a +2 racial bonus on Perception checks."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Draconic"],
	            "list" : ["any human tongue", "Abyssal", "Aklo", "Celestial", "Draconic", "Giant", "Infernal", "Sylvan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Samsaran" : {
	        "type" : "race",
	        "description" : "Ghostly servants of karma, samsarans are creatures reincarnated hundreds if not thousands of times in the hope of reaching true enlightenment. Unlike humans and other races, these humanoids remember much of their past lives.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Samsarans are insightful and strong-minded, but their bodies tend to be frail.",
	            "Intelligence" : "+2",
	            "Wisdom" : "+2",
	            "Constitution" : "-2"
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Samsarans are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Samsarans have a base speed of 30 feet."
	        },
	        "Low-Light Vision (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Samsarans can see twice as far as humans in conditions of dim light."
	        },
	        "Lifebound (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "Samsarans gain a +2 racial bonus on all saving throws made to resist death effects, saving throws against negative energy effects, Fortitude saves made to remove negative levels, and Constitution checks made to stabilize if reduced to negative hit points."
	        },
	        "Samsaran Magic (Sp)" : {
	            "type" : "trait.racial",
	            "description" : "Samsarans with a Charisma score of 11 or higher gain the following spell-like abilities: 1/day—comprehend languages, deathwatch, and stabilize. The caster level for these effects is equal to the samsaran's level."
	        },
	        "Shards of the Past (Ex)" : {
	            "type" : "trait.racial",
	            "description" : "A samsaran's past lives grant her bonuses on two particular skills. A samsaran chooses two skills—she gains a +2 racial bonus on both of these skills, and they are treated as class skills regardless of what class she actually takes."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Samsaran"],
	            "list" : ["any human language", "Abyssal", "Aquan", "Auran", "Celestial", "Draconic", "Giant", "Ignan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Strix" : {
	        "type" : "race",
	        "description" : "Hunted to dwindling numbers by humans, who see them as winged devils, strix are black-skinned masters of the nighttime sky. Their territorial conflicts have fueled their hatred for humans. This longstanding feud means that these nocturnal creatures often attack humans on sight.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Strix are swift and elusive, but tend to be stubborn and swift to anger.",
	            "Dexterity" : "+2",
	            "Charisma" : "-2"
	        },
	        "Strix" : {
	            "type" : "trait.racial",
	            "description" : "Strix are humanoids with the strix subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Strix are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Strix have a base speed of 30 feet on land. They also have a fly speed of 60 feet (average)."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Strix can see twice as far as humans in conditions of dim light."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Strix can see in the dark up to 60 feet."
	        },
	        "Hatred" : {
	            "type" : "trait.racial",
	            "description" : "Strix receive a +1 racial bonus on attack rolls against humanoid creatures with the human subtype because of their special training against these hated foes."
	        },
	        "Nocturnal" : {
	            "type" : "trait.racial",
	            "description" : "Strix gain a +2 racial bonus on Perception and Stealth checks in dim light or darkness."
	        },
	        "Suspicious" : {
	            "type" : "trait.racial",
	            "description" : "Strix receive a +2 racial bonus on saving throws against illusion spells and effects."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Strix"],
	            "list" : ["Auran", "Common", "Draconic", "Giant", "Gnome", "Goblin", "Infernal"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Suli" : {
	        "type" : "race",
	        "description" : "Also called suli-jann, these humanoids are the descendants of mortals and jann. These strong and charismatic individuals manifest mastery over elemental power in their adolescence, giving them the ability to manipulate earth, fire, ice, or electricity. This elemental power tends to be reflected in the suli's personality as well.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Sulis are brawny and charming, but slow-witted.",
	            "Strength" : "+2",
	            "Charisma" : "+2",
	            "Intelligence" : "-2"
	        },
	        "Native Outsider" : {
	            "type" : "trait.racial",
	            "description" : "Sulis are outsiders with the native subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Sulis are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Sulis have a base speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Sulis can see twice as far as humans in dim light."
	        },
	        "Negotiator" : {
	            "type" : "trait.racial",
	            "description" : "Sulis are keen negotiators, and gain a +2 racial bonus on Diplomacy and Sense Motive checks."
	        },
	        "Elemental Assault (Su)" : {
	            "type" : "trait.racial",
	            "description" : "Once per day as a swift action, a suli can shroud her arms in acid, cold, electricity, or fire. This lasts for one round per level, and can be dismissed as a free action. Unarmed strikes with her arms or hands (or attacks with weapons held in those hands) deal +1d6 points of damage of the appropriate energy type."
	        },
	        "Energy Resistance 5" : {
	            "type" : "trait.racial",
	            "description" : "Sulis have resistance to acid 5, cold 5, electricity 5, and fire 5."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "one elemental language (Aquan, Auran, Ignan, or Terran)"],
	            "list" : ["Aquan", "Auran", "Draconic", "Ignan", "Terran"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Svirfneblin" : {
	        "type" : "race",
	        "description" : "Gnomes who guard their hidden enclaves within dark tunnels and caverns deep under the earth, svirfneblin are as serious as their surface cousins are whimsical. They are resistant to the magic of the foul creatures that share their subterranean environs, and wield powerful protective magic. Svirfneblin are distrustful of outsiders and often hide at their approach.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin are fast and observant but relatively weak and emotionally distant.",
	            "Strength" : "-2",
	            "Dexterity" : "+2",
	            "Wisdom" : "+2",
	            "Charisma" : "-4"
	        },
	        "Gnome" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin are humanoids with the gnome subtype."
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty to their CMB and CMD, and a +4 size bonus on Stealth checks."
	        },
	        "Defensive Training" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin gain a +2 dodge bonus to Armor Class."
	        },
	        "Senses" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin have darkvision 120 ft. and low-light vision."
	        },
	        "Fortunate" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin gain a +2 racial bonus on all saving throws."
	        },
	        "Skilled" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin gain a +2 racial bonus on Stealth checks; this improves to a +4 bonus underground. They gain a +2 racial bonus on Craft (alchemy) checks and Perception checks."
	        },
	        "Hatred" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and dwarven subtypes due to training against these hated foes."
	        },
	        "Stonecunning" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin gain stonecunning as dwarves."
	        },
	        "Spell Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin have SR equal to 11 + their class levels."
	        },
	        "Svirfneblin Magic" : {
	            "type" : "trait.racial",
	            "description" : "Svirfneblin add +1 to the DC of any illusion spells they cast. Svirfneblin also gain the following spell-like abilities: Constant—nondetection; 1/day—blindness/deafness, blur, disguise self; caster level equals the svirfneblin's class levels."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Gnome", "Undercommon"],
	            "list" : ["Aklo", "Common", "Draconic", "Dwarven", "Elven", "Giant", "Goblin", "Orc", "and Terran"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Vanara" : {
	        "type" : "race",
	        "description" : "These mischievous, monkeylike humanoids dwell in jungles and warm forests. Covered in soft fur and sporting prehensile tails and handlike feet, vanaras are strong climbers. These creatures are at home both on the ground and among the treetops.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Vanaras are agile and insightful, but are also rather mischievous.",
	            "Dexterity" : "+2",
	            "Wisdom" : "+2",
	            "Charisma" : "-2"
	        },
	        "Vanara" : {
	            "type" : "trait.racial",
	            "description" : "Vanaras are humanoids with the vanara subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Vanaras are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Vanaras have a base speed of 30 feet and a Climb speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "A vanara can see twice as far as a human in dim light."
	        },
	        "Nimble" : {
	            "type" : "trait.racial",
	            "description" : "Vanaras have a +2 racial bonus on Acrobatics and Stealth checks."
	        },
	        "Prehensile Tail" : {
	            "type" : "trait.racial",
	            "description" : "A vanara has a long, flexible tail that she can use to carry objects. She cannot wield weapons with her tail, but the tail allows her to retrieve a small, stowed object carried on her person as a swift action."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Vanaran"],
	            "list" : ["Aklo", "Celestial", "Elven", "Gnome", "Goblin", "Sylvan"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Vishkanya" : {
	        "type" : "race",
	        "description" : "Strangely beautiful on the outside and poisonous on the inside, vishkanyas see the world through slitted serpent eyes. Vishkanyas possess a serpent's grace and ability to writhe out of their enemies' grasp with ease. Vishkanyas have a reputation for being both seductive and manipulative. They can use their saliva or blood to poison their weapons.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas are graceful and elegant, but they are often irrational.",
	            "Dexterity" : "+2",
	            "Charisma" : "+2",
	            "Wisdom" : "-2"
	        },
	        "Vishkanya" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas are humanoids with the vishkanya subtype."
	        },
	        "Medium" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas are Medium creatures and have no bonuses or penalties due to their size."
	        },
	        "Normal Speed" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas have a base speed of 30 feet."
	        },
	        "Low-Light Vision" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas can see twice as far as humans in conditions of dim light."
	        },
	        "Keen Senses" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas receive a +2 racial bonus on Perception checks."
	        },
	        "Limber" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas receive a +2 racial bonus on Escape Artist and Stealth checks."
	        },
	        "Poison Resistance" : {
	            "type" : "trait.racial",
	            "description" : "A vishkanya has a racial bonus on saving throws against poison equal to its Hit Dice."
	        },
	        "Poison Use" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas are skilled in the use of poison and never accidentally poison themselves when using or applying poison."
	        },
	        "Toxic" : {
	            "type" : "trait.racial",
	            "description" : "A number of times per day equal to his Constitution modifier (minimum 1/day), a vishkanya can envenom a weapon that he wields with his toxic saliva or blood (using blood requires the vishkanya to be injured when he uses this ability). Applying venom in this way is a swift action.",
	            "ability" : {
	                "name" : "Vishkanya Venom",
	                "type" : "trait.racial",
	                "description" : "Injury; save Fort DC 10 + 1/2 the vishkanya's Hit Dice + the vishkanya's Constitution modifier; frequency 1/round for 6 rounds; effect 1d2 Dex; cure 1 save."
	            }
	        },
	        "Weapon Familiarity" : {
	            "type" : "trait.racial",
	            "description" : "Vishkanyas are always proficient with blowguns, kukri, and shuriken."
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Vishkanya"],
	            "list" : ["Aklo", "Draconic", "Elven", "Goblin", "Sylvan", "Undercommon"]
	        },
	        "source" : "Advanced Race Guide"
	    },
	    "Wayang" : {
	        "type" : "race",
	        "description" : "The small wayangs are creatures of the Plane of Shadow. They are so attuned to shadow that it even shapes their philosophy, believing that upon death they merely merge back into darkness. The mysteries of their shadowy existence grant them the ability to gain healing from negative energy as well as positive energy.",
	        "Ability Modifiers" : {
	            "type" : "trait.racial",
	            "description" : "Wayang are nimble and cagey, but their perception of the world is clouded by shadows.",
	            "Dexterity" : "+2",
	            "Intelligence" : "+2",
	            "Wisdom" : "-2"
	        },
	        "Wayang" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs are humanoids with the wayang subtype."
	        },
	        "Small" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a -1 penalty on their CMB and to CMD, and a +4 size bonus on Stealth checks."
	        },
	        "Slow Speed" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs have a base speed of 20 feet."
	        },
	        "Darkvision" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs can see in the dark up to 60 feet."
	        },
	        "Light and Dark (Su)" : {
	            "type" : "trait.racial",
	            "description" : "Once per day as an immediate action, a wayang can treat positive and negative energy effects as if she were an undead creature, taking damage from positive energy and healing damage from negative energy. This ability lasts for 1 minute once activated."
	        },
	        "Lurker" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs gain a +2 racial bonus on Perception and Stealth checks."
	        },
	        "Shadow Magic" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs add +1 to the DC of any saving throws against spells of the shadow subschool that they cast. Wayangs with a Charisma score of 11 or higher also gain the following spell-like abilities: 1/day—ghost sound, pass without trace, and ventriloquism. The caster level for these effects is equal to the wayang's level. The DC for these spells is equal to 10 + the spell's level + the wayang's Charisma modifier."
	        },
	        "Shadow Resistance" : {
	            "type" : "trait.racial",
	            "description" : "Wayangs get a +2 racial bonus on saving throws against spells of the shadow subschool."
	        },
	        "Dissolution's Child" : {
	            "type" : "trait.racial.alternate",
	            "description" : "Once per day, you may change your appearance to look as if you were little more than a 4-foot-tall area of shadow. Your physical form still exists and you are not incorporeal—only your appearance changes. This works like invisibility, except it only lasts 1 round per level (maximum 5 rounds). This is a supernatural ability.",
	            "replaces" : ["Shadow Magic"]
	        },
	        "Languages" : {
	            "type" : "trait.racial",
	            "default" : ["Common", "Wayang"],
	            "list" : ["any human language", "Abyssal", "Aklo", "Draconic", "Goblin", "Infernal", "Nagaji", "Samsaran", "Tengu"]
	        },
	        "source" : "Advanced Race Guide"
	    }
	};

	var raceList = [];
	var optGroups = {
	    prefix : "r",
	    list : []
	};
	$.each(RACES, function(key, value) {
		if ($.inArray(value.source, optGroups.list) == -1) {
			optGroups.list.push(value.source);
		}
		raceList.push({
		    name : key,
		    source : value.source
		});
	});

	optGroups.list.sort(function(a, b) {
		var BookOrder = ["Core Rulebook", "Advanced Player's Guide", "Ultimate Magic", "Ultimate Combat", "Advanced Race Guide", "Advanced Class Guide"];
		a = $.inArray(a, BookOrder);
		b = $.inArray(b, BookOrder);
		return a - b;
	});

	$.each(optGroups.list, function(key, group) {
		if (typeof group === 'string') {
			$("<optgroup />", {
			    label : group,
			    id : optGroups.prefix + group.replace(/[\s']*/g, '')
			}).text(group).appendTo($("#race"));
		}
	});

	raceList.sort(function(a, b) {
		return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
	});

	$.each(raceList, function(key, race) {
		$("<option />", {
			"value" : race.name
		}).text(race.name).appendTo($("#r" + race.source.replace(/[\s']*/g, '')));
	});

	function getModifier(score) {
		return Math.floor(score / 2) - 5;
	}

	$(".stat .stat-score").change(function() {
		var stat = $(this).parent().attr("id");
		var score = $(this).val();
		$("." + stat + "-mod").val(getModifier(score));
	});

	function clearRacialAbilityMods() {
		$(".stat").each(function(index) {
			var stat = $(this).attr("id");
			var score = parseInt($("#" + stat + " .stat-score").val());
			var rMod = parseInt($("#" + stat + " .stat-racialMod").val());
			$("#" + stat + " .stat-score").val(score - rMod);
			$("#" + stat + " .stat-racialMod").val(0);
			$("." + stat + "-mod").val(0);
		});
	}

	$("#Any").change(function() {

		// Clear Ability Modifiers
		clearRacialAbilityMods();

		var race = $("#race").val();
		var stat = $(this).val();
		var mod = parseInt(RACES[race]["Ability Modifiers"].Any);

		$("#" + stat + " .stat-racialMod").val(mod);
		var score = parseInt($("#" + stat + " .stat-score").val());
		$("#" + stat + " .stat-score").val(score + parseInt(mod));
	});

	function serialCommaJoin(arrayList){
		// TODO: Add support for 'or' and 'nor'
		if (arrayList.length < 3) {
			return arrayList.join(" and ");
		} else {
			arrayList[arrayList.length-1] = "and " + arrayList[arrayList.length-1];
		}		
		return arrayList.join(", ");
	}
	
	$("#race").change(function() {
		$("#output").empty();
		$("#Any").hide();
		$("#Any>option:eq(0)").attr("selected", true);

		clearRacialAbilityMods();

		var race = $(this).val();
		$("<H2 />").text(race).appendTo("#output");
		if (RACES[race].description) {
			$("<P />").text(RACES[race].description).appendTo("#output");
		}
		$.each(RACES[race], function(key, value) {
			if (value.type == "trait.racial") {
				switch (key) {
				case "Ability Modifiers":
					var line = $("<P />").text(value.description);
					$("<B />").text(key + ": ").prependTo(line);
					line.appendTo("#output");
					$.each(value, function(stat, mod) {
						var abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma", "Any"];
						if ($.inArray(stat, abilities) != -1) {
							if (stat != "Any") {
								$("#" + stat + " .stat-racialMod").val(parseInt(mod));
								var score = parseInt($("#" + stat + " .stat-score").val()) + parseInt(mod);
								$("#" + stat + " .stat-score").val(score);
								$("." + stat + "-mod").val(getModifier(score));
							} else {
								$("#Any").show();
							}

							var li = $("<LI />").text(mod);
							$("<B />").text(stat + ": ").prependTo(li);
							li.appendTo("#output");
						}
					});
					break;
				case "Languages":
					var line = $("<P />").text(serialCommaJoin(value["default"]));
					$("<B />").text("Starting Languages: ").prependTo(line);
					line.appendTo("#output");
					
					var line = $("<P />").text(serialCommaJoin(value.list));
					$("<B />").text("Available Languages: ").prependTo(line);
					line.appendTo("#output");
					break;
				default:
					var line = $("<P />").text(value.description);
					$("<B />").text(key + ": ").prependTo(line).appendText;
					line.appendTo("#output");
				}
			}
		});
	});
});

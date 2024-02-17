// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('apple_gold').displayName('苹果与金锭').maxStackSize(16).tooltip('§8在工作台分解它!')
	event.create('experience_bottle_one').displayName('附魔之瓶 8x').maxStackSize(9).tooltip('§7蕴含着 9 瓶附魔之瓶的力量...')
	event.create('experience_bottle_two').displayName('附魔之瓶 64x').maxStackSize(1).tooltip('§7蕴含着 64 瓶附魔之瓶的力量...')
	event.create('effect_golden_apple').displayName('药水金苹果').maxStackSize(64).tooltip('§7药水效果的集合...包含正面和负面。').food(food => {
		food
			.hunger(4)
			.saturation(4) // This value does not directly translate to saturation points gained
			// The real value can be assumed to be:
			// min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
			.effect('minecraft:speed', 600, 0, 1) //速度
			.effect('minecraft:absorption', 2400, 0, 1) //伤害吸收
			.effect('minecraft:fire_resistance', 3600, 0, 1) //防火
			.effect('minecraft:slowness', 400, 5, 1)//缓慢
			.effect('minecraft:resistance', 400, 3, 1)//抗性
			.effect('minecraft:regeneration', 440, 1, 1)//生命恢复
			//.removeEffect('minecraft:poison')
			.alwaysEdible() // Like golden apples
		//.fastToEat() // Like dried kelp
		//.meat() // Dogs are willing to eat it
	})
	event.create('effect_golden_apple_two').displayName('药水金苹果').maxStackSize(64).tooltip('§7药水效果的集合...只有正面。').food(food => {
		food
			.hunger(4)
			.saturation(4) // This value does not directly translate to saturation points gained
			// The real value can be assumed to be:
			// min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
			.effect('minecraft:speed', 600, 0, 1) //速度
			.effect('minecraft:absorption', 2400, 0, 1) //伤害吸收
			.effect('minecraft:fire_resistance', 3600, 0, 1) //防火
			//.effect('minecraft:slowness', 400, 5, 1)//缓慢
			.effect('minecraft:resistance', 400, 4, 1)//抗性
			.effect('minecraft:regeneration', 440, 2, 1)//生命恢复
			//.removeEffect('minecraft:poison')
			.alwaysEdible() // Like golden apples
		//.fastToEat() // Like dried kelp
		//.meat() // Dogs are willing to eat it
	})
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})


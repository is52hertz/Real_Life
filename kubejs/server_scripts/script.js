// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	// 破损鞘翅
	event.shaped(Item.of('minecraft:elytra', '{Damage:432}'), [
		'PSP',
		'P P',
		'P P'
	], {
		P: 'minecraft:phantom_membrane',
		S: 'minecraft:string'
	})
	// 附魔金苹果
	//1
	event.shaped('kubejs:effect_golden_apple', [
		'GBG',
		'PAC',
		'TRF'
	], {
		G: 'minecraft:gold_ingot',
		B: 'minecraft:gold_block',
		P: 'farmersdelight:apple_pie',
		A: 'minecraft:golden_apple',
		C: 'farmersdelight:apple_cider',
		T: Item.of('minecraft:potion', '{Potion:"minecraft:strong_turtle_master"}'),
		R: Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}'),
		F: Item.of('minecraft:potion', '{Potion:"minecraft:fire_resistance"}')
	}).replaceIngredient('minecraft:potion', 'minecraft:glass_bottle')
	//2
	event.smithing('kubejs:effect_golden_apple_two', 'kubejs:effect_golden_apple', 'minecraft:totem_of_undying')
	//3
	event.smithing('minecraft:enchanted_golden_apple', 'kubejs:effect_golden_apple_two', 'kubejs:experience_bottle_two')
	// 切石机：金苹果 -> 苹果
	event.stonecutting(Item.of('kubejs:apple_gold'), 'minecraft:golden_apple')
	// 分解
	event.shapeless('minecraft:apple', ['kubejs:apple_gold']).replaceIngredient('kubejs:apple_gold', 'minecraft:gold_ingot')
	// 皮革马铠 (bear_fur)
	event.shaped('minecraft:leather_horse_armor', [
		'  L',
		'LBL',
		'L L'
	], {
		L: 'minecraft:leather',
		B: 'alexsmobs:bear_fur'
	})
	// 皮革马铠 (hoglin_hide)
	event.shaped('minecraft:leather_horse_armor', [
		'  L',
		'LHL',
		'L L'
	], {
		L: 'minecraft:leather',
		H: 'nethers_delight:hoglin_hide'
	})
	// 铁马铠 (bear_fur)
	event.shaped('minecraft:iron_horse_armor', [
		'  I',
		'IBI',
		'I I'
	], {
		I: 'minecraft:iron_ingot',
		B: 'alexsmobs:bear_fur'
	})
	// 铁马铠 (hoglin_hide)
	event.shaped('minecraft:iron_horse_armor', [
		'  I',
		'IHI',
		'I I'
	], {
		I: 'minecraft:iron_ingot',
		H: 'nethers_delight:hoglin_hide'
	})
	// 金马铠 (bear_fur)
	event.shaped('minecraft:golden_horse_armor', [
		'  G',
		'GBG',
		'G G'
	], {
		G: 'minecraft:gold_ingot',
		B: 'alexsmobs:bear_fur'
	})
	// 金马铠 (hoglin_hide)
	event.shaped('minecraft:golden_horse_armor', [
		'  G',
		'GHG',
		'G G'
	], {
		G: 'minecraft:gold_ingot',
		H: 'nethers_delight:hoglin_hide'
	})
	// 钻石马铠 (bear_fur)
	event.shaped('minecraft:diamond_horse_armor', [
		'  D',
		'DBD',
		'D D'
	], {
		D: 'minecraft:diamond',
		B: 'alexsmobs:bear_fur'
	})
	// 钻石马铠 (hoglin_hide)
	event.shaped('minecraft:diamond_horse_armor', [
		'  D',
		'DHD',
		'D D'
	], {
		D: 'minecraft:diamond',
		H: 'nethers_delight:hoglin_hide'
	})
	// 不死图腾
	event.shaped('minecraft:totem_of_undying', [
		'GGG',
		'MEM',
		'HGH'
	], {
		E: 'kubejs:experience_bottle_one',
		G: 'minecraft:gold_ingot',
		H: Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_healing"}'),
		M: 'minecraft:emerald'
	})
	// 末影珍珠
	event.shaped('minecraft:ender_pearl', [
		'RRR',
		'RER',
		'RRR'
	], {
		E: 'minecraft:emerald',
		R: 'minecraft:rotten_flesh'
	})
	// 潜影壳
	event.shaped('minecraft:shulker_shell', [
		'PPP',
		'P P',
		'   '
	], {
		P: 'minecraft:popped_chorus_fruit'
	})
	// 附魔之瓶
	event.shapeless('minecraft:experience_bottle', ['3x minecraft:lapis_lazuli', 'minecraft:glass_bottle'])
	// 附魔之瓶 8x
	event.shapeless('kubejs:experience_bottle_one', ['9x minecraft:experience_bottle'])
	// 附魔之瓶 64x
	event.shapeless('kubejs:experience_bottle_two', ['9x kubejs:experience_bottle_one'])
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('player.chat', function (event) {
	// KICK
	if (event.message.startsWith('CNM')) {
		event.server.runCommandSilent('kick ' + event.player.name + ' 脏话踢出 ')
		event.server.runCommandSilent(`say 踢出玩家${event.player.name}(原因：脏话{CNM})`)
		event.cancel()//取消该事件，也就是说玩家的聊天信息不会显示
	}
	// 前缀 (伪造聊天)
	let input = event.message.trim();//获取聊天信息
	if (event.player.data.stats.hasAchievement('minecraft:end/kill_dragon')) {
		event.server.tell([Text.black('[A]').bold(), `<${event.player.name}> ${input}`]);
		event.cancel();
	}
})

events.listen('recipes.stonecutting', function (e) {
	e.stonecutting('minecraft:apple', 'minecraft:golden_apple');
	e.addJson('namespaces:my_mod/advancements/my_advancement', {
		"criteria": {
			"triggered": {
				"trigger": "minecraft:custom",
				"conditions": {
					"stat": {
						"type": "minecraft:crafted_item",
						"name": "minecraft:golden_apple"
					}
				}
			}
		},
		"rewards": {
			"experience": 0
		}
	});
});
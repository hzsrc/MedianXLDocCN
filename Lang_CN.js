// ==UserScript==
// @name         魔电官网文档中文化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  实用工具
// @author       黑本
// @match        https://docs.median-xl.com/doc/items/*
// @updateURL    https://raw.githubusercontent.com/hibem/MedianXLDocCN/master/Lang_CN.js
// @downloadURL  https://raw.githubusercontent.com/hibem/MedianXLDocCN/master/Lang_CN.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

//符文

    //技能
    document.body.innerHTML = document.body.innerHTML
    .replace(/ to Divine Apparition/g, 'Divine Apparition（神圣显现 -瞬移，冰冻）')
    .replace(/ Mark of the Wild/g, 'Mark of the Wild（野性印记 -增伤）')
    .replace(/ to Hamstring/g, 'Hamstring（断筋 -近战、晕眩）')
    .replace(/ to Mana Sweep/g, ' Mana Sweep（法力扫荡 -吸法、伤害）')
    .replace(/ to Mana Tide Totem/g, 'Mana Tide Totem（法力潮汐图腾）')
    .replace(/ Bloodlust/g, ' Bloodlust（嗜血 -增伤）')
    .replace(/ Banish/g, ' Banish（放逐，诅咒 -减敌最大生命）')
    .replace(/ Frog Prince/g, ' Frog Prince（青蛙王子 -施放冰环）')
    .replace(/ to Plague/g, ' to Plague（疫病）')
    .replace(/ Shower of Rocks/g, ' Shower of Rocks（石头澡 -伤害、减速）')
    .replace(/ Spike Nova/g, ' Spike Nova（飞矛新星 -伤害）')
    .replace(/ to Wyrd/g, ' to Wyrd（环形冲击波）')
    .replace(/ to Iron Spiral/g, ' to Iron Spiral（铁螺旋）')
    .replace(/ to Winter Avatar/g, ' to Winter Avatar（凛冬化身 -冰环）')
    .replace(/ Ice Lance/g, ' Ice Lance（冰枪）')
    .replace(/ to Deathgaze/g, ' to Deathgaze（死亡凝视）')
    .replace(/ Glacial Nova/g, ' Glacial Nova（冰川新星）')
    .replace(/ Lifeblood/g, ' Lifeblood（命脉 -生命回复）')
    .replace(/ Gamma Field/g, ' Gamma Field（毒伤）')
    .replace(/ to Dragon Wyrms/g, ' to Dragon Wyrms（翼龙 -陷阱）')
    .replace(/ to Noctule/g, ' to Noctule（山蝠 -近战）')
    .replace(/ Apocalypse/g, ' Apocalypse（天启 -火伤）')
    .replace(/ to Hammertime/g, ' to Hammertime（锤子时间）')
    .replace(/ Nightmare/g, ' Nightmare（噩梦 -诅咒，减速）')
    .replace(/ to Wild and Free/g, ' to Wild and Free（自由自在）')
    .replace(/ Shatterblade/g, ' Shatterblade（刀片）')
    .replace(/ Punisher/g, ' Punisher（惩罚者）')
    .replace(/ Charged Strike/g, ' Charged Strike（充能一击）')
    .replace(/ Squall Wave/g, ' Squall Wave（飓风波）')
    .replace(/ Blade Spirits/g, ' Blade Spirits（刀刃之灵 -召唤）')
    .replace(/ Shuriken Flurry/g, ' Shuriken Flurry（手里剑乱舞）')
    .replace(/ Fire Splash/g, ' Fire Splash（火花飞溅）')
    .replace(/ Venomous Spirit/g, ' Venomous Spirit（剧毒之灵 -法术）')
    .replace(/ Abyss/g, ' Abyss（深渊 -法师冰法术）')
    .replace(/ Frozen Crown/g, ' Frozen Crown（冰冻王冠 -法术）')
    .replace(/ to Vanquish/g, ' to Vanquish（征服 -3秒增伤BUFF）')
    .replace(/ Flamefront/g, ' Flamefront（烈焰前线 -法术）')
    .replace(/ Crucify/g, ' Crucify（折磨 -近战）')
    .replace(/ Charm/g, ' Charm（魅惑）')
    .replace(/Gift of Inner Fire/g, 'Gift of Inner Fire（内燃之礼 -回血）')
    .replace(/ Celerity/g, ' Celerity（迅捷 -加速）')
    .replace(/ Mind Flay/g, ' Mind Flay（精神鞭笞 -骑士法术）')
    .replace(/ Blink/g, ' Blink（闪烁 -瞬移，晕眩）')
    .replace(/ Arrow Swarm/g, ' Arrow Swarm（箭群 -多重射击）')
    .replace(/ Wraith Arrow/g, ' Wraith Arrow（幽灵箭 ）')
    .replace(/ Frozen Soul/g, ' Frozen Soul（冰冻之魂）')


    //怪物
    .replace(/ Condemned/g, ' Condemned（火人）')
    .replace(/ Moon Knight/g, ' Moon Knight（月亮骑士）')
    .replace(/ Banshee/g, ' Banshee（女妖）')
    .replace(/ Acid Beast/g, ' Acid Beast（酸液兽）')
    .replace(/ Umbaru Spirit/g, ' Umbaru Spirit（部族巫师，特钢则）')
    .replace(/ Horror Arche/g, ' Horror Arche（恐怖射手）')
    .replace(/ Burning Dead Archer/g, ' Burning Dead Archer（燃烧射手）')
    .replace(/ Bone Archer/g, ' Bone Archer（骷髅射手）')
    .replace(/ Dark Templar/g, ' Dark Templar（黑暗圣堂）')
    .replace(/ Infernal Lord/g, ' Infernal Lord（炼狱领主）')
    .replace(/ Zombie/g, ' Zombie（僵尸）')

    //符文
    .replace(/El Rune/g, '1# El')
    .replace(/Eld Rune/g, '2# Eld')
    .replace(/Tir Rune/g, '3# Tir')
    .replace(/Nef Rune/g, '4# Nef')
    .replace(/Eth Rune/g, '5# Eth')
    .replace(/Ith Rune/g, '6# Ith')
    .replace(/Tal Rune/g, '7# Tal')
    .replace(/Ral Rune/g, '8# Ral')
    .replace(/Ort Rune/g, '9# Ort')
    .replace(/Thul Rune/g, '10# Thul')
    .replace(/Amn Rune/g, '11# Amn')
    .replace(/Sol Rune/g, '12# Sol')
    .replace(/Shael Rune/g, '13# Shael')
    .replace(/Dol Rune/g, '14# Dol')
    .replace(/Hel Rune/g, '15# Hel')
    .replace(/Io Rune/g, '16# Io')
    .replace(/Lum Rune/g, '17# Lum')
    .replace(/Ko Rune/g, '18# Ko')
    .replace(/Fal Rune/g, '19# Fal')
    .replace(/Lem Rune/g, '20# Lem')
    .replace(/Pul Rune/g, '21# Pul')
    .replace(/Um Rune/g, '22# Um')
    .replace(/Mal Rune/g, '23# Mal')
    .replace(/Ist Rune/g, '24# Ist')
    .replace(/Gul Rune/g, '25# Gul')
    .replace(/Vex Rune/g, '26# Vex')
    .replace(/Ohm Rune/g, '27# Ohm')
    .replace(/Lo Rune/g, '28# Lo')
    .replace(/Sur Rune/g, '29# Sur')
    .replace(/Ber Rune/g, '30# Ber')
    .replace(/Jah Rune/g, '31# Jah')
    .replace(/Cham Rune/g, '32# Cham')
    .replace(/Zod Rune/g, '33# Zod')
    .replace(/Sha Rune/g, '34# Sha')
    .replace(/Lah Rune/g, '35# Lah')
    .replace(/Kur Rune/g, '36# Kur')
    .replace(/Ix Rune/g, '37# Ix')
    .replace(/Thur Rune/g, '38# Thur')
    .replace(/Nas Rune/g, '39# Nas')
    .replace(/Ath Rune/g, '40# Ath')
    .replace(/Kra Rune/g, '41# Kra')
    .replace(/Vith Rune/g, '42# Vith')
    .replace(/No Rune/g, '43# No')
    .replace(/Yul Rune/g, '44# Yul')
    .replace(/Thai Rune/g, '45# Thai')
    .replace(/Rha Rune/g, '46# Rha')
    .replace(/Xar Rune/g, '47# Xar')
    .replace(/Nih Rune/g, '48# Nih')
    .replace(/Lai Rune/g, '49# Lai')
    .replace(/On Rune/g, '50# On')
    .replace(/Taha Rune/g, '51# Taha')
    .replace(/Ghal Rune/g, '52# Ghal')
    .replace(/Qor Rune/g, '53# Qor')
    .replace(/Krys Rune/g, '54# Krys')
    .replace(/Auhe Rune/g, '55# Auhe')
    .replace(/Shaad Rune/g, '56# Shaad')
    .replace(/Ma Rune/g, '魔法符文')
    .replace(/Po Rune/g, '毒素符文')
    .replace(/Fi Rune/g, '火焰符文')
    .replace(/Ea Rune/g, '大地符文')
    .replace(/Co Rune/g, '寒冰符文')
    .replace(/Li Rune/g, '闪电符文')
    .replace(/Xis Rune/g, '卡布符文')


//其他
    .replace(/Many runewords contain only one rune, but you can fill up the sockets /g, '许多神符之语仅需要一枚符文，但是你需要在镶嵌这枚符文')
    .replace(/before/g, '之前')
    .replace(/ the rune with jewels. To make a runeword in an item with 4 sockets, for example,/g, '用珠宝填满前面的孔，举个栗子，有一件装备有4个孔')
    .replace(/you must/g, '你必须按顺序')
    .replace(/ insert 3 jewels \+ 1 rune/g, '镶嵌 3枚珠宝和1枚符文')
    .replace(/Grey items only!/g, '只能用于灰色装备！')
    .replace(/Some people do not seem to know this. You can only make runewords in nonmagical socketed \(grey\) items!/g, '很多人看来不知道，你只能在普通带孔装备（灰色）上装备神符之语！')

    .replace(/ contains 537 all-new runewords./g, ' 包含了 537 个全新的神符之语')
    .replace(/LIST OF RUNEWORDS/g, '神符之语列表')
    .replace(/RUNEWORDS/g, '神符之语')
    .replace(/except /g, '除了 ')
    .replace(/Cannot be Unsocketed/g, '无法取出镶嵌物')


    //装备属性词条
    .replace(/Drains 2% Life per Second/g, '每秒流失2%的生命')
    .replace(/Amazing Grace/g, '奇异恩典')
    .replace(/ second Cooldown to Blade Spirits/g, ' 秒刀刃之灵冷却时间')
    .replace(/ over 2 seconds/g, '2秒内')
    .replace(/ Increased Mana Pulse Duration/g, ' 提升法力波动持续时间')
    .replace(/ Chance to cast level /g, ' 的机会施展等级 ')
    .replace(/ Hit Recovery/g, ' 快速打击恢复（FHR）')
    .replace(/ Block Speed/g, ' 格挡速度（FBR）')
    .replace(/ on Kill/g, ' 当杀死怪物')
    .replace(/ Enhanced damage/g, ' 增强伤害（ED）')
    .replace(/ Bonus to Attack Rating/g, ' 额外准确率（AR）')
    .replace(/ to All Attributes/g, ' 所有属性')
    .replace(/ Gold Find/g, ' 更多金币')
    .replace(/ to Light Radius/g, ' 照亮范围')
    .replace(/ Bonus Damage to/g, ' 更多伤害')
    .replace(/ Attack Speed/g, ' 增加攻速（IAS）')
    .replace(/Adds /g, '增加 ')
    .replace(/ cold damage/g, ' 的冰冷伤害')
    .replace(/ poison damage/g, ' 的毒素伤害')
    .replace(/ fire damage/g, ' 的火焰伤害')
    .replace(/ lightning damage/g, ' 的闪电伤害')
    .replace(/ magic damage/g, ' 的魔法伤害')
    .replace(/ damage/g, ' 的伤害')
    .replace(/ to Maximum Damage/g, ' 最大伤害')
    .replace(/Based on Character Level/g, '基于角色等级')
    .replace(/ to all Attributes/g, ' 至所有属性')
    .replace(/ on Melee Attack/g, ' 当近战攻击时')
    .replace(/ to All Skills/g, ' 所有技能')
    .replace(/ to Minimum Damage/g, ' 最小伤害')
    .replace(/Stun Attack/g, '晕眩攻击')
    .replace(/ to Summoned Minion Life/g, '召唤物生命')
    .replace(/ to Strength/g, ' 力量')
    .replace(/ Bonus to Energy Factor/g, ' 增加精力因子')
    .replace(/ to Energy/g, ' 精力')
    .replace(/ to Dexterity/g, ' 敏捷')
    .replace(/ Reanimate as/g, ' 复活为')
    .replace(/ Cast Speed/g, ' 快速施法（FCR）')
    .replace(/ Life stolen per Hit/g, ' 生命偷取（LL）')
    .replace(/ Mana stolen per Hit/g, ' 法力偷取（LM）')
    .replace(/ to Life/g, ' 生命值')
    .replace(/Maximum Fire Resist /g, '最大火焰抗性 ')
    .replace(/Maximum Cold Resist /g, '最大冰冷抗性 ')
    .replace(/Maximum Lightning Resist /g, '最大闪电抗性 ')
    .replace(/Maximum Poison Resist /g, '最大毒素抗性 ')
    .replace(/Fire Resist /g, '火焰抗性（fr）')
    .replace(/Slow Target /g, '减慢目标')
    .replace(/Cold Resist /g, '冰冷抗性（cr）')
    .replace(/Lightning Resist /g, '闪电抗性（lr）')
    .replace(/Poison Resist /g, '毒素抗性（lr）')
    .replace(/Physical Resist /g, '物理抗性 ')
    .replace(/Physical Damage Reduced by /g, '物理伤害降低（dr） ')
    .replace(/Elemental\/Magic Damage Reduced by /g, '元素/魔法伤害降低')
    .replace(/ to Poison Spell Damage/g, ' 至毒素法术伤害')
    .replace(/ to Lightning Spell Damage/g, ' 至闪电法术伤害')
    .replace(/ to Cold Spell Damage/g, ' 至冰冷法术伤害')
    .replace(/ to Fire Spell Damage/g, ' 至火焰法术伤害')
    .replace(/ to Physical\/Magic Spell Damage/g, ' 至物理/魔法伤害')
    .replace(/ Strength Factor to Spell Damage/g, ' 力量因子至法术伤害')
    .replace(/ Energy Factor to Spell Damage/g, ' 法力因子至法术伤害')
    .replace(/ to Spell Damage/g, ' 至所有法术伤害')
    .replace(/ Chance of Crushing Blow/g, ' 压碎性打击（CB）')
    .replace(/ Charges/g, ' 聚气')
    .replace(/ Combat Speeds/g, ' 所有战斗速度')
    .replace(/ Increased Healing Rate from Apples/g, '增加食用苹果的恢复效率')
    .replace(/ Chance of Uninterruptable Attack/g, ' 不间断攻击（UA）')
    .replace(/Total Character Defense /g, '角色整体防御 ')
    .replace(/ to Enemy Cold Resistance/g, ' 敌人冰冷抗性')
    .replace(/ to Enemy Poison Resistance/g, ' 敌人毒素抗性')
    .replace(/ to Enemy Fire Resistance/g, ' 敌人火焰抗性')
    .replace(/ to Enemy Lightning Resistance/g, ' 敌人冰冷抗性')
    .replace(/Increase Maximum Life and Mana /g, '增加最大生命和法力值 ')
    .replace(/Requirements /g, '需求 ')
    .replace(/ Damage to Demons/g, ' 对恶魔的伤害（DTD）')
    .replace(/ Life Regenerated per Second/g, ' 每秒生命恢复')
    .replace(/ Life on Striking/g, ' 击中时恢复生命')
    .replace(/ Mana on Striking/g, ' 击中时恢复法力')
    .replace(/ Life on Attack/g, '打击时恢复生命')
    .replace(/ Life after each Kill/g, '杀死怪物获取生命（LAEK）')
    .replace(/ Mana after each Kill/g, '杀死怪物获取法力（MAEK）')
    .replace(/Target Takes Additional Damage of /g, '目标受到额外伤害 ')
    .replace(/Indestructible/g, '无法破坏')
    .replace(/ Movement Speed/g, ' 移动速度')
    .replace(/ Magic Find/g, ' 魔法物品获取（MF）')
    .replace(/Enhanced Weapon Damage /g, '增强武器伤害 ')
    .replace(/ to Vitality/g, ' 体力')
    .replace(/Hit Causes Monster to Flee /g, '击中使怪物逃跑')
    .replace(/Attacker Flees after Striking /g, '受到打击时恐吓怪物')
    .replace(/Half Freeze Duration/g, '冰冻时间减半')
    .replace(/Cannot Be Frozen/g, '无法冰冻')
    .replace(/Maximum Mana /g, '增加法力值 ')
    .replace(/Maximum Life /g, '增加生命值 ')
    .replace(/Regenerate Mana /g, '法力恢复速度 ')
    .replace(/ Bonus to Buff\/Debuff\/Cold Skill Duration/g, '延长Buff/Debuff/冰冻技能的效果时间')
    .replace(/ Energy Factor to Spell Damage/g, ' 精力因子至法术伤害')
    .replace(/ to Enemy Elemental Resistances/g, ' 敌人元素抗性')
    .replace(/Maximum Elemental Resists/g, '最大元素抗性')
    .replace(/Elemental Resists /g, '元素抗性 ')
    .replace(/ Deadly Strike/g, ' 致命一击（DS）')
    .replace(/ to Summoned Minion Resistances/g, ' 召唤物抗性')
    .replace(/ to Summoned Minion Damage/g, '召唤物伤害')
    .replace(/ to Summoned Minion Attack Rating/g, '召唤物准确率')
    .replace(/ to Maximum Barbarian Minions/g, ' 野蛮人召唤物数量')
    .replace(/ to Maximum Necromancer Minions/g, '死灵法师召唤物数量')
    .replace(/ Damage to Undead/g, '对不死生物的伤害（DTU）')
    .replace(/ Defense vs. Missile/g, ' 对飞弹的防御')
    .replace(/Ignore Target's Defense/g, '忽视目标防御')
    .replace(/ Enhanced Defense/g, '增强防御')
    .replace(/ Defense/g, ' 防御值')
    .replace(/ Skill Levels/g, '技能等级')
    .replace(/ to Druid/g, ' 德鲁伊')
    .replace(/ to Assassin/g, ' 刺客')
    .replace(/ to Barbarian/g, ' 野蛮人')
    .replace(/ to Amazon/g, ' 亚马逊')
    .replace(/ to Sorceress/g, ' 法师')
    .replace(/ to Necromancer/g, ' 死灵法师')
    .replace(/ to Paladin/g, ' 圣骑士')
    .replace(/Amazon Only/g, '限亚马逊')
    .replace(/Druid Only/g, '限德鲁伊')
    .replace(/Assassin Only/g, '限刺客')
    .replace(/Barbarian Only/g, '限野蛮人')
    .replace(/Sorceress Only/g, '限法师')
    .replace(/Necromancer Only/g, '限死灵法师')
    .replace(/Paladin Only/g, '限圣骑士')
    .replace(/ over 1 seconds/g, '在1秒内')
    .replace(/ to Experience Gained/g, '经验获取')
    .replace(/ Life when Struck by an Enemy/g, '生命受打击时')
    .replace(/Mana when Struck by an Enemy/g, '法力受打击时')
    .replace(/ on Striking/g, ' 在打击时')
    .replace(/ when Struck/g, ' 受到打击时')
    .replace(/ when Attacked/g, ' 当击中时')
    .replace(/ on Death Blow/g, ' 当最后一击')
    .replace(/ when you Level-Up/g, ' 当升级时')
    .replace(/Slows Attacker by /g, ' 减慢攻击者 ')
    .replace(/Slows Ranged Attacker by /g, '减慢远程攻击者 ')
    .replace(/Slows Melee Target by /g, '减慢近战目标 ')
    .replace(/ Damage to The Zakarum/g, ' 对萨卡兰姆的伤害（DTZ）')
    .replace(/Attacker Takes Cold Damage of /g, '攻击者受到冰冷伤害 ')
    .replace(/Attacker Takes Fire Damage of /g, '攻击者受到火焰伤害')
    .replace(/ Bonus Elemental Damage to Bloodlust/g, ' 增加嗜血的元素伤害')
    .replace(/You may Only use Melee, Summon and Support Skills/g, '仅可使用近战，召唤和支援技能')
    .replace(/ Base Block Chance/g, '基础格挡值')
    .replace(/ Bonus to Poison Skill Duration/g, ' 增加毒素技能持续时间')
    .replace(/Poison Length Reduced by /g, '中毒时间减少 ')
    .replace(/Lion Stance Damage Bonus /g, '狮子姿态伤害增加 ')
    .replace(/ Slower Block Rate/g, '降低格挡速度')
    .replace(/Cold Absorb /g, '冰冷吸收')
    .replace(/Fire Absorb /g, '火焰吸收')
    .replace(/Lightning Absorb /g, '闪电吸收')
    .replace(/Poison Absorb /g, '毒素吸收')
    .replace(/ Chance to Avoid Damage/g, ' 躲避伤害')
    .replace(/Druid Morph/g, '德鲁伊形态')
    .replace(/Based on Blessed Life Skill Level/g, '基于 Blessed Life 的等级')
    .replace(/ when using an Apple/g, ' 当食用苹果时')
    .replace(/ Damage Taken Goes To Mana/g, ' 受到伤害转化为法力')
    .replace(/Attacker Takes Elemental Damage of /g, '攻击者受到元素伤害 ')
    .replace(/One-Hand Damage/g, '单手伤害')
    .replace(/Two-Hand Damage/g, '双手伤害')
    .replace(/Throw Damage/g, '投掷伤害')
    .replace(/Required Level/g, '需要等级')
    .replace(/Required Strength/g, '需要力量')
    .replace(/Required Dexterity/g, '需要敏捷')
    .replace(/Strength Damage Bonus/g, '力量伤害加成')
    .replace(/Dexterity Damage Bonus/g, '敏捷伤害加成')
    .replace(/ per Strength/g, ' 每点力量')
    .replace(/ per Dexterity/g, ' 每点敏捷')
    .replace(/Socketed /g, '孔数 ')
    .replace(/ to Mana/g, ' 法力值')
    .replace(/Orb Effects Applied to this Item are Doubled/g, '双倍神秘之球奖励')

//装备
    .replace(/Weapons<br>/g, '武器<br>')
    .replace(/Throwing Knives/g, '飞刀')
    .replace(/Necromancer Scythes/g, '死灵法师专属镰刀')
    .replace(/Throwing Axes/g, '飞斧')
    .replace(/Amazon Spears/g, '亚马逊专属矛')
    .replace(/Paladin Spears/g, '圣骑士专属矛')
    .replace(/Paladin Clubs, Paladin Maces, Paladin Hammers/g, '圣骑士专属棍，棒，锤')
    .replace(/Spears/g, '长矛')
    .replace(/Sorceress Orbs/g, '法师单手法球')
    .replace(/Sorceress Crystal Swords/g, '扭曲之刃（法师）')
    .replace(/Sorceress Body Armor/g, '法师专属衣服')
    .replace(/Paladin Shields/g, '圣骑士专属盾')
    .replace(/Barbarian Shields/g, '野蛮人专属盾')
    .replace(/Assassin Shields/g, '刺客专属盾')
    .replace(/Necromancer Shields/g, '死灵法师专属盾')
    .replace(/Amazon Shields/g, '亚马逊专属盾')
    .replace(/Scythes/g, '镰刀')
    .replace(/Sceptres/g, '权杖')
    .replace(/Paladin Helms/g, '圣骑士专属头盔')
    .replace(/Paladin Clubs, Paladin Maces, Paladin Hammers/g, '圣骑士专属钝器')
    .replace(/Barbarian Swords/g, '野蛮人专属剑')
    .replace(/Barbarian One-Handed Axes/g, '野蛮人单手斧')
    .replace(/Barbarian Two-Handed Axes/g, '野蛮人双手斧')
    .replace(/One-Handed Swords/g, '单手剑')
    .replace(/One-Handed Axes/g, '单手斧')
    .replace(/Necromancer Wands/g, '死灵法师单手短杖')
    .replace(/Necromancer Staves/g, '死灵法师双手长杖')
    .replace(/Necromancer Daggers/g, '死灵法师专属匕首')
    .replace(/Necromancer Crossbows/g, '死灵法师专属十字弓')
    .replace(/Druid Staves/g, '德鲁伊专属法杖')
    .replace(/Druid Helms/g, '德鲁伊专属头盔')
    .replace(/Maces/g, '钉锤（棍棒顶端圆形发展 偏小）')
    .replace(/Hammers/g, '锤子（顶端为横向发展 偏大）')
    .replace(/Amazon Javelins/g, '亚马逊专属标枪')
    .replace(/Javelins/g, '标枪')
    .replace(/Barbarian Helms/g, '野蛮人头盔')
    .replace(/Staves/g, '长柄法杖')
    .replace(/Crossbows/g, '十字弓')
    .replace(/Druid Bows/g, '德鲁伊专属弓')
    .replace(/Amazon Bows/g, '亚马逊专属弓')
    .replace(/Amazon Helms/g, '亚马逊专属头盔')
    .replace(/Bows/g, '弓')
    .replace(/Daggers/g, '匕首')
    .replace(/Assassin Claws/g, '刺客爪')
    .replace(/Assassin Naginatas/g, '眉间刀（刺客）')
    .replace(/Body Armor/g, '衣服')
    .replace(/Circlets/g, '头环')
    .replace(/Shields/g, '盾牌')
    .replace(/Belts/g, '腰带')
    .replace(/Boots/g, '鞋子')
    .replace(/Helms/g, '头盔')

//菜单
    .replace(/CUBE RECIPES/g, '合成公式')
    .replace(/Cube Recipes/g, '合成公式')
    .replace(/GEMS AND RUNES/g, '宝石和符文')
    .replace(/Gems and Runes/g, '宝石和符文')
    .replace(/Base Items/g, '基础装备')
    .replace(/BASE ITEMS/g, '基础装备')
    .replace(/Items /g, '物品 ')
    .replace(/Runewords/g, '神符之语')
    .replace(/SETS/g, '套装')
    .replace(/Sets/g, '套装')
    .replace(/Tiered Uniques/g, '品级暗金装备')
    .replace(/Sacred Uniques/g, '神圣暗金装备')
    .replace(/TIERED UNIQUES/g, '品级暗金装备')
    .replace(/SACRED UNIQUES/g, '神圣暗金装备')
    .replace(/Gloves/g, '手套');

})

();


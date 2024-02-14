Find more info on the website: https://kubejs.com/

Directory information:

assets - Acts as a resource pack, you can put any client resources in here, like textures, models, etc. Example: assets/kubejs/textures/item/test_item.png
data - Acts as a datapack, you can put any server resources in here, like loot tables, functions, etc. Example: data/kubejs/loot_tables/blocks/test_block.json

startup_scripts - Scripts that get loaded once during game startup - Used for adding items and other things that can only happen while the game is loading (Can be reloaded with /kubejs reload_startup_scripts, but it may not work!)
server_scripts - Scripts that get loaded every time server resources reload - Used for modifying recipes, tags, loot tables, and handling server events (Can be reloaded with /reload)
client_scripts - Scripts that get loaded every time client resources reload - Used for JEI events, tooltips and other client side things (Can be reloaded with F3+T)

config - KubeJS config storage. This is also the only directory that scripts can access other than world directory
exported - Data dumps like texture atlases end up here

You can find type-specific logs in logs/kubejs/ directory

---
Directory information:
assets
//相对于资源包，可以存放客户端资源，例如：材质，模型等等
- Acts as a resource pack, you can put any client resources in here, like textures, models, etc.
Example: assets/kubejs/textures/item/test_item.png

data
//相对于数据包，可以存放服务端资源，例如：战利列表，函数等等
- Acts as a datapack, you can put any server resources in here, like loot tables, functions, etc.
Example: data/kubejs/loot_tables/blocks/test_block.json

startup_scripts
//在游戏启动期间加载的脚步
- Scripts that get loaded once during game startup
//用于添加物品和其他在游戏启动时加载的东西，可以用/kubejs reload_startup_scripts 指令重载，但可能不起作
用！
·Used for adding items and other things that can only happen while the game is loading (Can be
reloaded with /kubejs reload_startup_scripts, but it may not work!)

server_scripts
//服务端资源重载时加载的脚本
- Scripts that get loaded every time server resources reload
//用于修改配方，标签，战利列表和处理服务器事件，可以用/reload指令重载
- Used for modifying recipes, tags, loot tables, and handling server events (Can be reloaded with /
reload)

client_scripts
//客户端资源重载时加载的脚本
- Scripts that get loaded every time client resources reload
//用于JEI事件，工具提示和其他客户端内容，可以用 F3+T 重载
- Used for JEI events,tooltips and other client side things (Can be reloaded with F3+T)

config
//kubeJs配置存储，这也是脚本除了 world 目录外可以访问的唯一的目录
- KubeJs config storage. This is also the only directory that scripts canaccessother than world directory

exported
//数据存储
- Data dumps like texture atlases end up here

//日志
You can find type-specific logs in logs/kubejs/ directory









在Minecraft中，使用数据包制作进度的话，通常需要通过触发游戏事件来完成。这里是监听合成事件和触发进度的一般方法。

首先，你需要在你的数据包中创建一个新的进度，然后在创建的进度中设定触发条件。这个进度的JSON文件大致会是这个样子：

```json
{
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
    "experience": 0  }
}
```

在这个考虑的实现中，进度会在玩家合成金苹果时触发。

然后，你需要在KubeJS的脚本中监听Forge的合成事件。这一步可能需要使用KubeJS的`EventManager`。示例的JavaScript代码可能如下：

```JavaScript
events.listen('recipes.stonecutting', function(e){
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
      "experience": 0    }
  });
});
```

要注意的是，这个方法是假定你正在使用Forge和KubeJs，并且具有相应的知识和能力来修改和使用这些代码片段。这个实现可能不完全正常工作，因为这通常需要根据你的具体需求和设置来进行具体的调整和修改。且这些代码仅为你提供一个参考的实现方法。实际使用时可能需要相应的调整和修改来实现你的需求。所以实现时需要小心并确保你的设置和代码都是正确并且可以顺利的运行。
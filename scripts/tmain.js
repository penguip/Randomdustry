


Events.on(ClientLoadEvent, b  => {
Blocks.siliconSmelter.outputItems = ItemStack.with(Items.surgeAlloy, 1, Items.silicon, 1, Items.phaseFabric, 2)
Blocks.siliconSmelter.consumeItem(Items.coal, 1)
Blocks.siliconCrucible.consumeItem(Items.silicon, 1)
Blocks.siliconCrucible.outputItems = ItemStack.with(Items.pyratite, 3, Items.surgeAlloy, 8, Items.phaseFabric, 16, Items.blastCompound, 1)
Blocks.siliconCrucible.outputLiquids = LiquidStack.with(Liquids.cryofluid, 1, Liquids.slag, 10)
});

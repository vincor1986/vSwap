# vSwap
A BSC smart contract for executing swaps between different pancakeswap and pancakeswap clone dexes in a single transaction.

Copyright (c) 2021 vincor1986

IMPORTANT: Please note that I have made vSwap available freely for information and development purposes only. Please only use if you are an experienced developer who understands the code. If you choose to deploy and use this smart contract, you do so at your own risk, and I do not accept responsibility for any losses (financial or otherwise) that you may incur as a result.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To contact the developer, please email: info@vincentcoraldean.com

A copy of the GNU General Public License is included (LICENSE) in this repo. Also, see https://www.gnu.org/licenses/ for more information.

!! Please note that this is NOT compatible with my other repo Merlin !!
If you try to use this smart contract with Merlin, please make sure you know how to fully reprogram Merlin to be compatible.

This smart contract has one callable method: "vSwap". It enables swaps between different BSC pancakeswap / pancakeswap clone dex liquidity pools in a single transaction. 
This may be useful for arbitrage or cyclic arbitrage. If when mined, the minimum output amount is not achieved, the vSwap method should exit early with a non-failure result. Otherwise, it should perform the swap through the route of liquidity pools instructed. Providing accurate and correct information regarding addresses and fees is critically important to the operation of this contract. Please make sure to verify and provide accurate parameters if calling the contract method.

The smart contract code modifies some PancakeSwap Router contract code to enable swaps between liquidity pools from any pancake swap clone dex. See details of changes below.

Please refer to the functionCallData.js file for some useful information about required parameters and encoding data for a function call.


Original PancakeSwap Router Contract: https://github.com/pancakeswap/pancake-swap-periphery/blob/master/contracts/PancakeRouter.sol

Changes: 

Omitted all but: safeMath library, pancake library (only including getAmountsOut function, getAmountOut function, sortTokens function and getReserves function), IPancakePair interface, safeTransferFrom function (edited), _ swap function (edited), swapExactTokensForTokens (edited and renamed "vSwap") and ensure modifier.

Rather than calculating / sending amounts through "path" address array elements; getAmountsOut & safeTransferFrom & _ swap functions calculate / send amounts through the introduced "pairPath" address array elements. Also, the getAmountsOut function takes into account the introduced "fee" number array elements to calculate output accurately. The vSwap function returns success early rather than reverting the tx if the minAmountOut value is not met. A constructor function establishes an owner on deployment and an "onlyOwner" modifier has been included in the vSwap function.

IMPORTANT: Please note that I have made vSwap available for information and development purposes only. Please only use if you are an experienced developer who understands the code. If you choose to deploy and use this smart contract, you do so at your own risk, and I do not take responsibility for any losses (financial or otherwise) that you may incur as a result.

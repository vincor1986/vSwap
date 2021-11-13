// This function is not ready to use, it demonstrates how data could be encoded for calling the vSwap contract method. 
// The values and code below are for explanatory purposes only. 

const encodeDataForFunctionCall = () => {
  // description of input parameters

  // amountIn = input amount in wei format expressed as a string;
  // example: 1 WBNB
  const amountIn = "1000000000000000000";

  //amountOutMin = minimum amount accepted back in wei format expressed as a string;
  // example: 1.1 WBNB
  const minAmountOut = "1100000000000000000";

  // path = array of token addresses expressed as strings;
  // example: [WBNB, ADA, ETH, WBNB];
  const path = [
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  ];

  // pairPath = array of liquidity pool addresses expressed as strings;
  // example: [WBNB-ADA (pancakeSwap), ADA-ETH (apeSwap), ETH-WBNB (pancakeSwapV2)]
  const pairPath = [
    "0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF",
    "0x61FE209E404166a53Cc627d0ae30A65606315dA7",
    "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
  ];

  // fee array = each value relates to equivalent index in pairPath array, (feeArray[0] is the fee associated with pairPath[0]). 
  // Values are represented by multiplying the percentage fee by 100 - therefore pancakeSwapV2 fee of 0.25% becomes 25 - expressed as number
  //example: [pancakeSwap (0.2%), apeSwap (0.2%), pancakeSwapV2 (0.25%)]
  const feeArray = [20, 20, 25];

  // sender = this will be where the output amount is sent to as the final step of the transaction.
  const sender = "0x0101010101010101010101010101010101010101";

  // deadline for tx mining - tx reverts if the deadline has expired - unix timestamp (10 digits long) expressed as string;
  // example: 3 minutes from when code runs;
  const deadline = (Date.now() + 180000).toString().substring(0, 10);

  const data = web3.eth.abi.encodeFunctionCall(
    {
      name: "vSwap",
      type: "function",
      inputs: [
        {
          type: "uint256",
          name: "amountIn",
        },
        {
          type: "uint256",
          name: "amountOutMin",
        },
        {
          type: "address[]",
          name: "path",
        },
        {
          type: "address[]",
          name: "pairPath",
        },
        {
          type: "uint256[]",
          name: "fee",
        },
        {
          type: "address",
          name: "to",
        },
        {
          type: "uint256",
          name: "deadline",
        },
      ],
    },
    [amountIn, minAmountOut, path, pairPath, feeArray, sender, deadline]
  );

  return data;
};

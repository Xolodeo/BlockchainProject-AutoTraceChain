// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";


library PriceConverter {
    function getPrice() public view returns(uint256){
        //нам нужны address and ABI для работы с контрактами
        // address 0x694AA1769357215DE4FAC081bf1f309aDC325306
        // ABI 
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306); //Используем импортированный интерфейс для работы по адресу
        (, int256 price,,,) = priceFeed.latestRoundData(); // убираем ненужные поля в выводе, так как нас интересует только цена
        //Цена ETH в USD
        // Здесь int256, а не uint так как цена может быть отрицательной. В нашем же msg.value там uint256 - то есть типы разные
        return uint256(price * 1e10); 
    }
    function getConversionRate(uint256 rubAmount) internal view returns (uint256) {
        uint256 ethPriceUsd = getPrice(); // 2500_000000000000000000


        uint256 rubPerUsd = 77; // 77_000000000000000000
    
        uint256 rubToUsd = (rubAmount * 1e18) / rubPerUsd; // 400000_000000000000000000 / 77

        uint256 usdToEth = (rubToUsd * 1e18) / ethPriceUsd; 

        return usdToEth;
    }

    function getVersion() internal view returns(uint256) {
        return AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306).version();
    }
}

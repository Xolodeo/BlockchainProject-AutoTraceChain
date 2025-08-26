// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {PriceConverter} from "./PriceConverter.sol";

contract AutoChain{
    using PriceConverter for uint256;

    struct Passport {
        uint256 series;
        uint256 number;
        string where_issued;
        string when_issued;     
    }
    struct FullName {
        string name;
        string surname;
        string fathername; 
    }
    struct CarInfo {
        string model;
        uint256 release_year;
        string car_id;
        string color;
        string sign_id;
        uint256 mileage;
        uint256 engine_volume;
        CarPassport car_passport;
        CarRegistration car_registration;
    }
    struct CarPassport{
        uint256 car_series;
        uint256 car_number;
        string car_where_issued;
        string car_when_issued;
    }
    struct CarRegistration{
        uint256 reg_car_series;
        uint256 reg_car_number;
    }
    struct Advert{
        FullName full_seller_name;
        Passport seller_passport;
        string seller_reg_addr;
        CarInfo full_car_info;
        uint256 car_cost;
        string description;
    }
    struct AcquirerProfile{
        FullName fullAcquirerName;
        Passport acquirerPassport;
        string acquirerRegAddr;
    }
    struct HistoryPiece{
        uint256 dateOfOperation;
        string actionHappened;
        bool isSigned;
    }

    struct Deal{
        uint256 id;
        address sellerAddress;
        Advert advert;
        address acquirerAddress;
        AcquirerProfile profile;
        Dealstatus status;
        bool sellerSigned;
        bool buyerSigned;
    }

    struct DealDetails{
        CarInfo full_car_info;
        uint256 car_cost;
        string description;
    }
    
    struct MainAd{
        uint256 adId;
        string model;
        uint256 release_year;
        uint256 mileage;
        uint256 engine_volume;
        uint256 car_cost;
    }

    enum Dealstatus { Active, InProcess, Finished }
    mapping(uint256 => Deal) public deals;
    uint256 public currentEmptyId = 0;

    function SellerInfo(Advert memory _advert) public { // Функция для получения информации о продавце с FrontEnd
        deals[currentEmptyId].id = currentEmptyId;
        deals[currentEmptyId].advert = _advert;
        deals[currentEmptyId].sellerAddress = msg.sender;
        deals[currentEmptyId].status = Dealstatus.Active;
        currentEmptyId += 1;
    }
    function ShowAdvertInfo() view public returns (MainAd[] memory){ // View функция. Возврат массива со всеми сделками в статусе Active.
        uint256 activeCounter = 0;
         for (uint256 index = 0; index < currentEmptyId; index++){
            if (deals[index].status == Dealstatus.Active){
                activeCounter +=1;
            }
         }

         MainAd[] memory activeDeals = new MainAd[](activeCounter);

         uint256 dealsCounter = 0;
         for (uint256 dealsIndex = 0; dealsIndex < currentEmptyId; dealsIndex++){
            if (deals[dealsIndex].status == Dealstatus.Active){
                activeDeals[dealsCounter].adId = deals[dealsIndex].id;
                activeDeals[dealsCounter].model = deals[dealsIndex].advert.full_car_info.model;
                activeDeals[dealsCounter].release_year = deals[dealsIndex].advert.full_car_info.release_year;
                activeDeals[dealsCounter].mileage = deals[dealsIndex].advert.full_car_info.mileage;
                activeDeals[dealsCounter].engine_volume = deals[dealsIndex].advert.full_car_info.engine_volume;
                activeDeals[dealsCounter].car_cost = deals[dealsIndex].advert.car_cost;
                dealsCounter++;
            }
         }

        return activeDeals;
    }


    function AcquirerInfo(uint256 _dealId, AcquirerProfile memory _acquirerProfile) public payable { // Функция для получения информации о покупателе со стороны FrontEnd + средства для оплаты. 

        require((deals[_dealId].sellerAddress != msg.sender), "You're the owner of the deal.");
        require((deals[_dealId].status == Dealstatus.Active), "This deal is already in process. Reload page.");
        require((deals[_dealId].advert.car_cost.getConversionRate() <= msg.value), "Not enough money to acquire.");
        deals[_dealId].acquirerAddress = msg.sender;
        deals[_dealId].profile = _acquirerProfile;
        deals[_dealId].status = Dealstatus.InProcess;
    }


    function ShowAcquirerInfo(uint256 _dealId) view public returns (AcquirerProfile memory){ // View функция. Отображение информации о покупателе на FrontEnd. Может не понадобиться.
        return deals[_dealId].profile;
    }

    function SignCheck(uint256 _dealId, bool isSeller) public {
        Deal storage deal = deals[_dealId];

        if (isSeller && msg.sender == deal.sellerAddress) {
            deal.sellerSigned = true;
        } else if (!isSeller && msg.sender == deal.acquirerAddress) {
            deal.buyerSigned = true;
        }

        if (deal.sellerSigned && deal.buyerSigned) {
            payable(deal.sellerAddress).transfer(address(this).balance);
            deal.status = Dealstatus.Finished;
        }
    }

    function SetCarHistory(HistoryPiece memory _record) public { // Добавление записи с информацией об действии с автомобиля
    }
    function CarHistory() view public { //View функция. Отображение истории автомобиля


    }

    function Test(uint256 _number) pure public returns (uint256){
        return _number + 100;
    } 
    
    function ShowSoloAdvertInfo(uint256 _advertIndex) view public returns (DealDetails memory){
        DealDetails memory soloAd;

        soloAd.full_car_info = deals[_advertIndex].advert.full_car_info;
        soloAd.car_cost = deals[_advertIndex].advert.car_cost;
        soloAd.description = deals[_advertIndex].advert.description;
        return soloAd; 
    }

    function AdDelete(uint256 _dealId) public{
            require(deals[_dealId].sellerAddress == msg.sender, "You are not an owner of this advert.");
            deals[_dealId].status = Dealstatus.Finished;
    }

    function ToEthConverter(uint256 _carCost) view public returns(uint256){ // Преобразует рубли в ETH 
        return _carCost.getConversionRate();
    }
    
}
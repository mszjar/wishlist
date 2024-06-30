// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

error NotEnoughFunds();
error AlreadyBought();

contract WishList {
  struct Item {
    uint256 id;
    string name;
    uint256 price;
    bool bought;
    address boughtBy;
  }

  uint256 public nextId;  // Variable d'état, stockée en storage
  mapping (address => Item[]) private wishList;  // Variable d'état, stockée en storage

  // Fonction pour obtenir la liste de souhaits
  function getWishList(address _of) external view returns (Item[] memory) {
    return wishList[_of];  // wishList est en storage, mais la fonction retourne une copie en memory
  }

  // Fonction pour ajouter un élément à la liste de souhaits
  function addToWishList(string calldata _name, uint256 _price) external {
    nextId++;  // nextId est une variable d'état, donc l'incrémentation modifie la valeur en storage
    Item memory thisItem = Item(nextId, _name, _price, false, address(0));  // thisItem est en memory, temporaire
    wishList[msg.sender].push(thisItem);  // wishList[msg.sender] est en storage, donc le push modifie storage
  }

  // Fonction pour obtenir la clé d'un élément de la liste de souhaits
  function getKeyByAddressAndId(address _for, uint256 _id) internal view returns(uint256) {
    uint256 result;
    for (uint256 i = 0; i < wishList[_for].length ; i++) {
      if (wishList[_for][i].id == _id) {
          result = i;
      }
    }
    return result;
  }

    // Fonction pour acheter un élément de la liste de souhaits
  function buyItem(address _for, uint256 _id) external payable {
    uint256 key = getKeyByAddressAndId(_for, _id);  // key est en memory, temporaire
    if(msg.value < wishList[_for][key].price) {
      revert NotEnoughFunds();
    }
    if(wishList[_for][key].bought) {
      revert AlreadyBought();
    }
    wishList[_for][key].bought = true;  // wishList[_for][key] est en storage, donc la modification est en storage
    wishList[_for][key].boughtBy = msg.sender;  // wishList[_for][key] est en storage, donc la modification est en storage
    (bool sent,) = _for.call{value: msg.value}("");
    require(sent, "Failed to send Ether");
  }


}

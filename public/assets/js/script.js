const contractAddress = "0x7A2eDb2D800B93616129fc63F757594E2Fb053af";
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_dealId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "surname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fathername",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.FullName",
            "name": "fullAcquirerName",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "series",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "where_issued",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "when_issued",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.Passport",
            "name": "acquirerPassport",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "acquirerRegAddr",
            "type": "string"
          }
        ],
        "internalType": "struct AutoChain.AcquirerProfile",
        "name": "_acquirerProfile",
        "type": "tuple"
      }
    ],
    "name": "AcquirerInfo",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_dealId",
        "type": "uint256"
      }
    ],
    "name": "AdDelete",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "surname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fathername",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.FullName",
            "name": "full_seller_name",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "series",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "where_issued",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "when_issued",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.Passport",
            "name": "seller_passport",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "seller_reg_addr",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "release_year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "car_id",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "sign_id",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "mileage",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "engine_volume",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "car_series",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "car_number",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "car_where_issued",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "car_when_issued",
                    "type": "string"
                  }
                ],
                "internalType": "struct AutoChain.CarPassport",
                "name": "car_passport",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "reg_car_series",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reg_car_number",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct AutoChain.CarRegistration",
                "name": "car_registration",
                "type": "tuple"
              }
            ],
            "internalType": "struct AutoChain.CarInfo",
            "name": "full_car_info",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "car_cost",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "internalType": "struct AutoChain.Advert",
        "name": "_advert",
        "type": "tuple"
      }
    ],
    "name": "SellerInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "dateOfOperation",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "actionHappened",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isSigned",
            "type": "bool"
          }
        ],
        "internalType": "struct AutoChain.HistoryPiece",
        "name": "_record",
        "type": "tuple"
      }
    ],
    "name": "SetCarHistory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_dealId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isSeller",
        "type": "bool"
      }
    ],
    "name": "SignCheck",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CarHistory",
    "outputs": [],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentEmptyId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "deals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sellerAddress",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "surname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fathername",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.FullName",
            "name": "full_seller_name",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "series",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "where_issued",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "when_issued",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.Passport",
            "name": "seller_passport",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "seller_reg_addr",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "release_year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "car_id",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "sign_id",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "mileage",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "engine_volume",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "car_series",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "car_number",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "car_where_issued",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "car_when_issued",
                    "type": "string"
                  }
                ],
                "internalType": "struct AutoChain.CarPassport",
                "name": "car_passport",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "reg_car_series",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reg_car_number",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct AutoChain.CarRegistration",
                "name": "car_registration",
                "type": "tuple"
              }
            ],
            "internalType": "struct AutoChain.CarInfo",
            "name": "full_car_info",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "car_cost",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "internalType": "struct AutoChain.Advert",
        "name": "advert",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "acquirerAddress",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "surname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fathername",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.FullName",
            "name": "fullAcquirerName",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "series",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "where_issued",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "when_issued",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.Passport",
            "name": "acquirerPassport",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "acquirerRegAddr",
            "type": "string"
          }
        ],
        "internalType": "struct AutoChain.AcquirerProfile",
        "name": "profile",
        "type": "tuple"
      },
      {
        "internalType": "enum AutoChain.Dealstatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "sellerSigned",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "buyerSigned",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_dealId",
        "type": "uint256"
      }
    ],
    "name": "ShowAcquirerInfo",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "surname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "fathername",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.FullName",
            "name": "fullAcquirerName",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "series",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "where_issued",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "when_issued",
                "type": "string"
              }
            ],
            "internalType": "struct AutoChain.Passport",
            "name": "acquirerPassport",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "acquirerRegAddr",
            "type": "string"
          }
        ],
        "internalType": "struct AutoChain.AcquirerProfile",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ShowAdvertInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "adId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "model",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "release_year",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "mileage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "engine_volume",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "car_cost",
            "type": "uint256"
          }
        ],
        "internalType": "struct AutoChain.MainAd[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_advertIndex",
        "type": "uint256"
      }
    ],
    "name": "ShowSoloAdvertInfo",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "model",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "release_year",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "car_id",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "color",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "sign_id",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "mileage",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "engine_volume",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "car_series",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "car_number",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "car_where_issued",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "car_when_issued",
                    "type": "string"
                  }
                ],
                "internalType": "struct AutoChain.CarPassport",
                "name": "car_passport",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "reg_car_series",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "reg_car_number",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct AutoChain.CarRegistration",
                "name": "car_registration",
                "type": "tuple"
              }
            ],
            "internalType": "struct AutoChain.CarInfo",
            "name": "full_car_info",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "car_cost",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "internalType": "struct AutoChain.DealDetails",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_number",
        "type": "uint256"
      }
    ],
    "name": "Test",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_carCost",
        "type": "uint256"
      }
    ],
    "name": "ToEthConverter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

let provider, signer, contract;
let announcements = [];

async function connectWallet() {
  if (!window.ethereum) {
    alert("Пожалуйста, установите MetaMask.");
    throw new Error("MetaMask не найден");
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  } catch (err) {
    console.error("Ошибка подключения кошелька:", err);
    throw err;
  }
}

function updateConnectButton(account) {
  const button = document.getElementById("connect-metamask-btn");
  const text = document.getElementById("metamask-btn-text");
  if (!button || !text) return;

  const shortAddr = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
  text.textContent = shortAddr;
  button.classList.add("connected");
  button.disabled = true;

  showWalletAddress(account);

  const msg = document.createElement("p");
  msg.textContent = "Успешно подключено! Переход на главную...";
  msg.style.color = "#00FF00";
  msg.style.marginTop = "10px";
  msg.style.fontWeight = "bold";
  button.parentNode.appendChild(msg);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

function showWalletAddress(account) {
  const display = document.getElementById("wallet-display");
  const addressElem = document.getElementById("wallet-address");

  if (display && addressElem) {
    const shortAddr = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
    addressElem.textContent = shortAddr;
    display.style.display = "flex";
  }
}

async function checkWalletConnection() {
  const button = document.getElementById("connect-metamask-btn");
  if (!window.ethereum) {
    alert("Для работы нужен MetaMask.");
    return;
  }

  try {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      await connectWallet();
      showWalletAddress(accounts[0]);
      updateConnectButton(accounts[0]);
    } else if (button) {
      button.addEventListener("click", async () => {
        try {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          await connectWallet();
          showWalletAddress(accounts[0]);
          updateConnectButton(accounts[0]);
        } catch (err) {
          if (err.code === 4001) alert("Подключение отменено.");
          else if (err.code === -32002) alert("Запрос уже обрабатывается.");
          else alert("Ошибка подключения.");
        }
      });
    }
  } catch (err) {
    console.error("Ошибка проверки аккаунтов:", err);
  }
}

// Выход
function logout() {
  localStorage.removeItem("userWallet");
  localStorage.setItem("userLoggedOut", "true");
  const display = document.getElementById("wallet-display");
  if (display) display.style.display = "none";
  window.location.href = "auth.html";
}

async function loadAnnouncements() {
  if (!contract) await connectWallet();
  const deals = await contract.ShowAdvertInfo();

  return deals.map((d) => ({
    id: d.adId.toString(),
    model: d.model,
    release_year: parseInt(d.release_year),
    mileage: parseInt(d.mileage),
    engine_volume: parseInt(d.engine_volume),
    car_cost: parseInt(d.car_cost),
    title: d.model || "Без названия",
    image: "public/assets/img/car-img.png"
  }));
}

async function deleteAnnouncement(id, event) {
  event?.preventDefault();
  event?.stopPropagation();

  if (!confirm("Удалить это объявление?")) return;

  try {
    await connectWallet();
    const tx = await contract.AdDelete(id);
    await tx.wait();
    alert("Объявление удалено.");
    location.reload();
  } catch (err) {
    console.error("Ошибка удаления:", err);
    alert("Ошибка. Возможно, вы не владелец.");
  }
}

function formatPriceWithDots(value) {
  return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

async function submitSellerInfo(advertData) {
  try {
    await connectWallet();
    const tx = await contract.SellerInfo(advertData);
    await tx.wait();
  } catch (err) {
    console.error("Ошибка при вызове SellerInfo:", err);
    throw err;
  }
}

function setupCreateForm() {
  const form = document.getElementById("announcement-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const rawCost = document.getElementById("car_cost").value;
    const costNum = Number(rawCost.replace(/\D/g, ''));

    const advertData = [
      [
        document.getElementById("seller_name").value,
        document.getElementById("seller_surname").value,
        document.getElementById("seller_fathername").value || ""
      ],
      [
        parseInt(document.getElementById("seller_series").value),
        parseInt(document.getElementById("seller_number").value),
        document.getElementById("seller_where_issued").value,
        document.getElementById("seller_when_issued").value
      ],
      document.getElementById("seller_reg_addr").value,
      [
        document.getElementById("model").value,
        parseInt(document.getElementById("release_year").value),
        document.getElementById("car_id").value,
        document.getElementById("color").value,
        document.getElementById("sign_id").value,
        parseInt(document.getElementById("mileage").value),
        parseInt(document.getElementById("engine_volume").value),
        [
          parseInt(document.getElementById("car_series").value),
          parseInt(document.getElementById("car_number").value),
          document.getElementById("car_where_issued").value,
          document.getElementById("car_when_issued").value
        ],
        [
          parseInt(document.getElementById("reg_car_series").value),
          parseInt(document.getElementById("reg_car_number").value)
        ]
      ],
      costNum,
      document.getElementById("seller_description").value
    ];

    try {
      await submitSellerInfo(advertData);
      alert("Объявление успешно размещено!");
      window.location.href = "index.html";
    } catch (err) {
      console.error("Ошибка отправки:", err);
      alert("Ошибка при отправке. Проверьте Metamask.");
    }
  });
}

async function signAsBuyer(dealId) {
  try {
    await connectWallet();

    const profile = {
      fullAcquirerName: {
        name: document.getElementById("buyer_name").value.trim(),
        surname: document.getElementById("buyer_surname").value.trim(),
        fathername: document.getElementById("buyer_fathername").value.trim() || ""
      },
      acquirerPassport: {
        series: parseInt(document.getElementById("buyer_series").value.trim()),
        number: parseInt(document.getElementById("buyer_number").value.trim()),
        where_issued: document.getElementById("buyer_where_issued").value.trim(),
        when_issued: document.getElementById("buyer_when_issued").value.trim()
      },
      acquirerRegAddr: document.getElementById("buyer_reg_addr").value.trim()
    };

    const details = await contract.ShowSoloAdvertInfo(dealId);
    const ethAmount = await contract.ToEthConverter(details.car_cost);

    const tx = await contract.AcquirerInfo(dealId, profile, { value: ethAmount });
    await tx.wait();

    alert("Сделка начата!");
    window.location.href = "index.html";
  } catch (err) {
    console.error("Ошибка подписания сделки:", err);
    alert("Ошибка. Убедитесь, что вы не владелец и достаточно ETH.");
  }
}

function renderHomePage() {
  const container = document.getElementById("cars-grid");
  if (!container) return;

  container.innerHTML = "";

  announcements.forEach((ann) => {
    if (!ann.title || !ann.release_year || !ann.engine_volume || !ann.mileage || !ann.car_cost) {
      console.warn("Пропущено объявление:", ann);
      return;
    }

    const card = document.createElement("div");
    card.className = "car-card";
    card.dataset.id = ann.id;

    card.innerHTML = `
      <div class="car-info">
        <img src="${ann.image}" alt="${ann.title}" />
        <h2>${ann.title}</h2>
        <p>${ann.release_year} год, ${ann.engine_volume} л, ${ann.mileage.toLocaleString('ru-RU')} км</p>
        <p class="price">Цена: ${ann.car_cost.toLocaleString('ru-RU')} ₽</p>
        <button data-action="show-details">Подробнее</button>
        <button class="delete-btn" data-action="delete" data-id="${ann.id}">Удалить</button>
      </div>
    `;

    container.appendChild(card);
  });
}

async function renderDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const dealId = parseInt(urlParams.get("id"));
  const container = document.getElementById("details-content");

  if (!container || isNaN(dealId)) {
    container.innerHTML = "<p>Неверный ID.</p>";
    return;
  }

  try {
    const details = await contract.ShowSoloAdvertInfo(dealId);
    const car = details.full_car_info;

    const release_year = car.release_year.toNumber?.() || Number(car.release_year);
    const mileage = car.mileage.toNumber?.() || Number(car.mileage);
    const engine_volume = car.engine_volume.toNumber?.() || Number(car.engine_volume);
    const price = details.car_cost.toNumber?.() || Number(details.car_cost);

    container.innerHTML = `
      <div class="container">
        <h1 class="page-title">${car.model}</h1>
        <div class="car-details">
          <img src="public/assets/img/car-img.png" class="car-image">
          <div class="car-details-header">
            <h2>Информация об автомобиле</h2>
            <button class="history-btn top-right" data-action="go-to-history" data-id="${dealId}">
              История авто
            </button>
          </div>
          <table class="car-info-table">
            <tr><th>Марка и модель</th><td>${car.model}</td></tr>
            <tr><th>Год выпуска</th><td>${release_year}</td></tr>
            <tr><th>Пробег</th><td>${mileage.toLocaleString('ru-RU')} км</td></tr>
            <tr><th>Объём двигателя</th><td>${engine_volume} л</td></tr>
            <tr><th>VIN</th><td>${car.car_id}</td></tr>
            <tr><th>Цвет</th><td>${car.color}</td></tr>
            <tr><th>Госномер</th><td>${car.sign_id}</td></tr>
            <tr class="price-row"><th>Цена</th><td><span class="price pulsating-price">${price.toLocaleString('ru-RU')} ₽</span></td></tr>
          </table>
        </div>
        <div class="details-section">
          <h2>Комментарии продавца:</h2>
          <p>${details.description}</p>
        </div>
        <div class="form-section">
          <h2>Данные покупателя:</h2>
        
          <form id="buyer-form" novalidate>
            <div class="flex">
              <label class="floating-label">
                <input type="text" class="form-input" id="buyer_surname" required />
                <span>Фамилия</span>
              </label>
              <label class="floating-label">
                <input type="text" class="form-input" id="buyer_name" required />
                <span>Имя</span>
              </label>
            </div>
        
            <label class="floating-label">
              <input type="text" class="form-input" id="buyer_fathername" />
              <span>Отчество</span>
            </label>
        
            <div class="flex">
              <label class="floating-label">
                <input type="text" class="form-input" id="buyer_series" required />
                <span>Серия паспорта</span>
              </label>
              <label class="floating-label">
                <input type="text" class="form-input" id="buyer_number" required />
                <span>Номер</span>
              </label>
            </div>
        
            <label class="floating-label">
              <input type="text" class="form-input" id="buyer_where_issued" required />
              <span>Кем выдан</span>
            </label>
            <label class="floating-label">
              <input type="date" class="form-input" id="buyer_when_issued" required />
              
            </label>
            <label class="floating-label">
              <input type="text" class="form-input" id="buyer_reg_addr" required />
              <span>Адрес регистрации</span>
            </label>
        
            <div class="button-row">
              <button type="button" class="deal-btn" id="sign-deal-btn">Купить</button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.getElementById("sign-deal-btn").addEventListener("click", () => {
      const required = [
        "buyer_surname", "buyer_name", "buyer_series", "buyer_number",
        "buyer_where_issued", "buyer_when_issued", "buyer_reg_addr"
      ];
      const missing = required.some(id => !document.getElementById(id).value.trim());
      if (missing) {
        alert("Заполните все обязательные поля.");
        return;
      }
      signAsBuyer(dealId);
    });

  } catch (err) {
    console.error("Ошибка загрузки деталей:", err);
    container.innerHTML = "<p>Ошибка загрузки информации.</p>";
  }
}

function renderHistoryPage() {
  const container = document.getElementById("history-content");
  if (!container) return;

  const id = parseInt(new URLSearchParams(window.location.search).get("id"));
  if (isNaN(id)) {
    container.innerHTML = "<p>Неверный ID.</p>";
    return;
  }

  const ann = announcements.find(a => a.id == id);
  if (!ann) {
    container.innerHTML = `<p>Объявление с ID ${id} не найдено.</p>`;
    return;
  }

  container.innerHTML = `
    <h1 class="page-title">История автомобиля <span class="car-title">${ann.title}</span></h1>
    <table class="car-info-table">
      <thead>
        <tr><th>Дата</th><th>Действие</th><th>Статус</th></tr>
      </thead>
      <tbody>
        <tr><td>12.03.2024 14:30</td><td>Замена масла</td><td class="confirmed">✔</td></tr>
        <tr><td>25.01.2024 14:30</td><td>ДТП</td><td class="rejected">✘</td></tr>
        <tr><td>10.12.2023 14:30</td><td>ТО</td><td class="confirmed">✔</td></tr>
      </tbody>
    </table>
  `;
}

let points = [];
let particles = [];

function setup() {
  const container = document.getElementById('background');
  if (!container) return;

  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent(container);
  frameRate(60);

  for (let i = 0; i < 50; i++) {
    points.push({
      x: random(width),
      y: random(height),
      vx: random(-1.5, 1.5),
      vy: random(-1.5, 1.5)
    });
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-0.5, 0.5),
      vy: random(-0.5, 0.5)
    });
  }
}

function draw() {
  if (!document.getElementById('background')) {
    noLoop();
    return;
  }

  background(255);
  stroke(0);
  noFill();

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const d = dist(points[i].x, points[i].y, points[j].x, points[j].y);
      if (d < 200) {
        line(points[i].x, points[i].y, points[j].x, points[j].y);
        const cursorD = dist(mouseX, mouseY, points[i].x, points[i].y);
        if (cursorD < 200) line(mouseX, mouseY, points[i].x, points[i].y);
      }
    }
  }

  fill(0);
  for (const p of points) {
    ellipse(p.x, p.y, 5);
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }

  for (const p of particles) {
    ellipse(p.x, p.y, 2);
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

document.addEventListener("DOMContentLoaded", async () => {
  const page = window.location.pathname.split("/").pop();

  if (page === "auth.html") {
    await checkWalletConnection();
    return;
  }

  try {
    await connectWallet();
    announcements = await loadAnnouncements();

    if (page === "" || page === "index.html") {
      renderHomePage();
    } else if (page === "details.html") {
      renderDetailsPage();
    } else if (page === "history.html") {
      renderHistoryPage();
    } else if (page === "create-announcement.html") {
      setupCreateForm();
    }

    const accounts = await provider.listAccounts();
    if (accounts.length > 0) {
      showWalletAddress(accounts[0]);
    }

    const newBtn = document.getElementById("new-announcement-btn");
    if (newBtn) {
      newBtn.addEventListener("click", () => {
        window.location.href = "create-announcement.html";
      });
    }

    // 5. Делегирование кликов
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]");
      if (!target) return;

      const action = target.dataset.action;
      const id = target.dataset.id;

      switch (action) {
        case "show-details":
          const card = target.closest(".car-card");
          if (card) window.location.href = `details.html?id=${card.dataset.id}`;
          break;

        case "delete":
          e.preventDefault();
          e.stopPropagation();
          deleteAnnouncement(id, e);
          break;

        case "go-to-history":
          window.location.href = `history.html?id=${id}`;
          break;
      }
    });

  } catch (err) {
    console.error("Ошибка инициализации:", err);
    document.getElementById("cars-grid")?.insertAdjacentHTML("beforebegin", `
      <p style="color: red; text-align: center;">Ошибка загрузки данных. Проверьте подключение.</p>
    `);
  }
});
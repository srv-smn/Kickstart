# CrowdCoin
### It is a website where creators can create a campaign and contributors can fund then with ethereum
#### This is a project based on Block Chain where all our project will be saved on block chain

## About the application
#### The application contains the dollowing page
![Home Page](/pic/1.png)
This is the * home page * of our application where we can see all the campaigns where we can see all the campaigns and get an option to create a new one .


  ![Home Page](/pic/2.png)
  In this page we will see the * details of a particular campaigns * .
  Details such as :
  - Address of Manager
  - Minimum Contribution (wei)
  - Number of Requests
  - Number of Approvers
  -Campaign Balance (ether)

  and we got a Button to * Contribute * into the campaigns

  ![Home Page](/pic/3.png)
  Here we can see all the request made by manager
  If the contributers found that the request made by manager of campaign is genuine then they can approve the request , if more than 50% of the contributers have approve the requests then the manager can finalize the request and the ether will transfered to the recipient address .
  A * Create Button * is there through which we can create a new requests .

  ![Home Page](/pic/4.png)
  Here we needd to fill the details about the request

  ### Language/Technology used
  - Next JS
  - Solidity

  ### Dependencies
  - metamask must be installed in the user's browser so that you can contribute into a campaign .
  - Metamask must be connected to Rinkeby Network
  - You must have `react JS` , `Next JS` and `Node` installed
  - You must have a `infura` account and from that copy your `rinkeby` project link
  - Solidity compiler `solidity` version `0.4.17`
  - `fs-extra:^9.0.0`
  - `ganache-cli:^6.9.1`
  - `mocha:^7.1.1`
  - `next:^4.1.4`
  - `react-dom:^16.13.1`
  - `truffle-hdwallet-provider:0.0.3`
  - `web3:1.0.0-beta.26`
  - `semantic-ui-react`

  ### How to install:
  In the base folder in command line run the following command
  - ganache : `npm install --save ganache-cli`
  - mocha : `npm install --save mocha`
  - solidity : `npm install --save solc@0.4.17`
  - fs-extra : `npm install --save fs-extra`
  - web3 : `npm install --save web3@1.0.0-beta.26`
  - Next JS : `npm install --save next@4.1.4 react react-dom`
  - semantic-ui-react : `npm install --save semantic-ui-react`
  - truffle- hd wallet : `npm install --save truffle-hdwallet-provider@0.0.3`

  ### How to run this code :
  *make the following change in ethereum/web3.js*

  1. Paste the infura link in web3.js file
      `  const provider = new Web3.providers.HttpProvider(
          'https://rinkeby.infura.io/v3/1ec6558. . . .' // paste your infura link here
        );
        web3 = new Web3(provider);`

  2. Paste your 12 word pnemonic in ethereum/deploy.js*
  const provider = new HDWalletProvider(
  'frame apart post kick armed . . . .' , // paste your ethereum wallet pnemonic here which u got from meta mask
  'https://rinkeby.infura.io/v3/1ecf5b647d9a60 . . .'  // paste your infura rinkeby project link here
  );

### Now in the base folder run `npm run dev` to start the server
### Now goto browser at : `http://localhost:3000/`


## to deploy a total new Crowdcoin site
- goto ethereum folder run `node deploy.js`
- now you will get a address at which contract has been deployed in `cmd` , `copy` the Address
- goto ethereum/factory.js
    `const instance = new web3.eth.Contract(
      JSON.parse(CampaignFactory.interface),
      '0xC492ae08D078F41F126d06D03F1e78ce1F3Dc2db' // erase the address and paste the address that you got after deploying
    );`
and then again start the server in main directory as `npm run dev`

#### For any query feel free to contact [Sourav Suman ](https://www.linkedin.com/in/srvsmn)

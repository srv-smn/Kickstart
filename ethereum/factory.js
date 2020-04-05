import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB61F62e1269c9aB92dB15EBee91B165BF9F401ce'
);

export default instance ;

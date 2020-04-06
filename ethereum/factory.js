import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC492ae08D078F41F126d06D03F1e78ce1F3Dc2db'
);

export default instance ;

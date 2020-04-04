import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4724B92DB40c586984C22e74420800c3782a3FB6'
);

export default instance ;

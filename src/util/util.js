export let chan=(methd,SE_OWNER,SE)=> {

  function spl_b(b) {
      return b+'_bool';
  }
  function spl_s(s) {
      return s+'_style';
  }
  // if(){
    methd(SE_OWNER,spl_b(SE),true);

    methd(SE_OWNER,spl_s(SE),true);
    // u=false
  // }else{
    methd(SE_OWNER,spl_b(SE),false);

    methd(SE_OWNER,spl_s(SE),false);
};

export default {
  chan,
}



























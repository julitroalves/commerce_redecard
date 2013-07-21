function print_cupom() {
  var print_path = Drupal.settings['peticoes_redecard']['print_path'];

  return window.open(print_path, '_blank', 'width=280,height=440,left=0,top=100,screenX=0,screenY=100');
}

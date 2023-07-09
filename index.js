function createNewImage(src, alt, left, bottom) {
    var image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.style.position = 'fixed';
    image.style.left = left + 'px';
    image.style.bottom = bottom + 'px';
    document.body.appendChild(image);
  }
  
  createNewImage('assets/green-character.gif', 'Green Character', 100, 100);
  createNewImage('assets/pine-tree.png', 'Pine Tree', 450, 200);
  createNewImage('assets/tree.png', 'Tree', 200, 300);
  createNewImage('assets/pillar.png', 'Pillar', 350, 100);
  createNewImage('assets/crate.png', 'Crate', 150, 200);
  createNewImage('assets/well.png', 'Well', 500, 425);
  
  function newItem(src, alt, left, bottom) {
    var item = document.createElement('img');
    item.src = src;
    item.alt = alt;
    item.style.position = 'fixed';
    item.style.left = left + 'px';
    item.style.bottom = bottom + 'px';
    document.body.appendChild(item);
  }
  
  newItem('assets/sword.png', 'Sword', 500, 405);
  
  var sword = document.querySelector('img[alt="Sword"]');
  sword.addEventListener('click', function(){
      sword.remove();
  });
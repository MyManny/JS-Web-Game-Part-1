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
  
    item.addEventListener('dblclick', function(){
      item.remove();
    });
  }
  
  newItem('assets/sword.png', 'Sword', 500, 405);
  newItem('assets/shield.png', 'Shield', 165, 185);
  newItem('assets/staff.png', 'Staff', 600, 100);
  
  document.body.style.backgroundImage = 'url("assets/sky.png"), url("assets/grass.png")';
  document.body.style.backgroundRepeat = 'no-repeat, no-repeat';
  document.body.style.backgroundPosition = 'center top, center bottom';
  document.body.style.backgroundSize = 'cover';
  
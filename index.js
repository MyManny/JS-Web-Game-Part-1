function createNewImage(src, alt, width, height, left, bottom) {
    var image = document.createElement('img');
    
    image.src = src;
    
    image.alt = alt;
    image.width = width;
    image.height = height;
    image.style.position = 'fixed';
    image.style.left = left + 'px';
    image.style.bottom = bottom + 'px';
    
    document.body.appendChild(image);
  }
  
  createNewImage('assets/green-character.gif', 'Green Character', 200, 200, 100, 100);
  
  createNewImage('assets/pine-tree.png', 'Pine Tree', 200, 200, 450, 200);
  
  createNewImage('assets/tree.png', 'Tree', 200, 200, 200, 300);
  
  createNewImage('assets/pillar.png', 'Pillar', 200, 200, 350, 100);
  
  createNewImage('assets/crate.png', 'Crate', 200, 200, 150, 200);

  createNewImage('assets/well.png', 'Well', 200, 200, 500, 425);

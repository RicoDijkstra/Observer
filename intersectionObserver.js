let alleLinks = document.querySelectorAll('nav a');
let sectieLijst = document.querySelectorAll('section');

const options = {
  treshold: 1.0
};

const checkIntersection = (entries, observer) => {
  entries.forEach( entry => {
    if(entry.isIntersecting) {
      let link = zoekLink('#'+entry.target.parentNode.id);
      maakActief(link,false);
    }
  });
};

let observer = new IntersectionObserver(checkIntersection, options);

sectieLijst.forEach(sectie => {
  observer.observe(sectie.getElementsByTagName('p')[0]);
});

const verwijderActief = () => {
  alleLinks.forEach( (link) => {
    if(link.classList = 'actief') {
      link.classList.remove('actief');
    }
  });
};

const maakActief = (elem,isLink) => {
  verwijderActief();
  if(isLink) {
    elem.classList.add('actief');
  } else {
    elem[0].classList.add('actief');
  }

};

alleLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    maakActief(e.target,true);
    window.location = e.target.href;
  });
});

const zoekLink = (id) => {
  let link = document.querySelectorAll('nav a[href="'+id+'"]');
  return link;
};

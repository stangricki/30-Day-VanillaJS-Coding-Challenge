const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Hello!")
    
    // Interpolated
    var a = "added variable"
    console.log("Hello I am %s string!", a)
    console.log(`Hello I am ${a} string!`) //ES6

    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn("OH NOOOO!!!");

    // Error :|
    console.error("Shit!");

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p); // shows actual element
    console.dir(p); // shows everything concerning that element

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`); 
      // console.groupCollapsed(`${dog.name}`); można użyc zamiast console.group 
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`); // WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOW !!!!!
    });

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data'); // WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOW !!!!!
        console.log(data);
      });

    console.table(dogs);
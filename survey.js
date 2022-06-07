const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {

  rl.question('What do you like doing for fun?', (activity) => {

    rl.question('What do you like listening to?', (music) => {

      rl.question('Is breakfast, lunch or dinner your favourite meal?', (meal) => {

        rl.question('What is your favourite thing to eat?', (food) => {

          rl.question('What is your favourite sport?', (sport) => {

            rl.question('What is you superpower? Tell us about it!', (power) => {

              console.log (`This here is ${name}. They love ${activity}, and they usally listen to ${music} while doing it. Their favourite meal is ${meal} and their go to food is ${food}. They often play ${sport} to burn off the calories. They also have a super power, ${power}. WOW!`)
              rl.close();
            })
          })
        })
      })
    })
  })
});
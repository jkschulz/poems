const author = {firstName: "Deyby", lastName: "Rodriguez"}

let message = `This poem is by ${author.firstName} ${author.lastName}. Enjoy`

let poem = ["Roses Are Red", "Violets Are Blue", "I love JavaScript", "I hope you do too!"]

let poemOut = () => {
  let i;
  for(i=0; i <= poem.length; i++){
    console.log(poem[i])
    }
  console.log(message);
}  

poemOut();


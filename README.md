# Task 1: Caesar cipher CLI

Caesar cipher: https://en.wikipedia.org/wiki/Caesar_cipher

### Steps to install:

1) Open a terminal and type: `git clone https://github.com/3igrik/rsschool-nodejs.git`
2) Install dependencies, type in terminal: `npm install`

### Application commands:

* `-a` | `--action <type>` - an action *encode/decode* **(required)**
* `-s` | `--shift <number>` - a shift  **(required)**
* `-i` | `--input <file path>` - an input file 
* `-o` | `--output <file path>` - an output file

### Examples:

`$ node index -a encode -s 7 -i "./input.txt" -o "./output.txt"`

> input.txt: This is secret. Message about "_" symbol!
>
> output.txt: Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

`$ node index --action decode --shift 7 --input input.txt --output output.txt:`

> input.txt: Aopz pz zljyla. Tlzzhnl hivba "_" zftivs! 
>
> output.txt: This is secret. Message about "_" symbol!

`$ node index --action encode --shift -1 --input input.txt --output output.txt`

> input.txt: This is secret. Message about "_" symbol!
>
> output.txt: Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!
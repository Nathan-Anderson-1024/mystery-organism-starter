// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// create factory function with two parameters
const pAequorFactory = (number, array) => {
  // return an object that contains the properties specimenNum and dna (15 bases) that correspond to the parameters
  return {
    specimenNum: number,
    dna: array,
    // randomly select base in dna property and change it, then return dna
    mutate() {
      const selectRandomPosition = Math.floor(Math.random() * 15); // selects a random number between 0 and 14
      //console.log(selectRandomPosition)
      let changeBase = this.dna[selectRandomPosition]; //a random position in the dna array
      if (changeBase === 'A') {
        this.dna[selectRandomPosition] = 'T';
      }
      else if (changeBase === 'T') {
        this.dna[selectRandomPosition] = 'A';
      }
      else if (changeBase === 'C') {
        this.dna[selectRandomPosition] = 'G';
      }
      else {
        this.dna[selectRandomPosition] = 'C';
      }
      const mutatedStrain = this.dna;
      return mutatedStrain;
    },
    compareDNA(pastData) {
      // Compare current sequence to passed in sequence
      let countMatches = 0;
      let percentMatch = 0;
      let i = 0;
      const totalCount = this.dna.length;
      for (const nucleotide of this.dna) {
        if (nucleotide === pastData[i]) {
          countMatches++;
          i++;
        }
        else {
          i++;
        }
      }
      percentMatch = (countMatches / totalCount) * 100;
      console.log(`Specimen #1 and specimen #2 have ${percentMatch}% DNA in common.`);
      // If sequence is in the same location and identical its a match
      // print the percentage in common
    }
     
  }
}
// Test functions
//console.log(pAequorFactory(3, mockUpStrand()));
// Test mutate() method works
//console.log(pAequorFactory(3, mockUpStrand()).mutate())
console.log(pAequorFactory(3, ['A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A']).mutate())

// Test compareDNA function
pAequorFactory(3, ['A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A']).compareDNA(['T', 'T', 'T' , 'T', 'T','T', 'T', 'T' , 'T', 'T','T', 'T', 'T' , 'T', 'T'])






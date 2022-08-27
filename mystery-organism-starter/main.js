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
      let totalCount = this.dna.length;
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
    },
    willLikelySurvive() {
      // Likelier chance to survice if atleast 60% C's or G's.
      // return true if the objects .dna contains atleast 60% C's or G's
      // Otherwise return false
      let countCG = 0;
      totalCount = this.dna.length;
      for (const letters of this.dna) {
        if (letters === 'C' || letters === 'G') {
          countCG++;
        }
      }
      if (((countCG / totalCount) * 100) >= 60) {
        return true;
      }
      else {
        return false;
      }
    }
     
  }
}

// Create 30 instances of pAqeuor that can survive
const canSurvive = [];
let i = 0;
do {
  const createStrain = pAequorFactory(i, mockUpStrand());
  if (createStrain.willLikelySurvive() === true) {
    canSurvive.push(createStrain);
    i++;
  }
  else {
    continue
  }

}
while (canSurvive.length < 30)
console.log(canSurvive)





// Test functions
//console.log(pAequorFactory(3, mockUpStrand()));

// Test mutate() method works
//console.log(pAequorFactory(3, mockUpStrand()).mutate())
//console.log(pAequorFactory(3, ['A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A']).mutate())

// Test compareDNA function
//pAequorFactory(3, ['A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A','A', 'A', 'A' , 'A', 'A']).compareDNA(['T', 'T', 'T' , 'T', 'T','T', 'T', 'T' , 'T', 'T','T', 'T', 'T' , 'T', 'T'])

// Test willLikelySurvive function
console.log(pAequorFactory(3, ['C', 'G', 'G' , 'C', 'G','C', 'G', 'G' , 'C', 'A','A', 'A', 'A' , 'A', 'A']).willLikelySurvive())





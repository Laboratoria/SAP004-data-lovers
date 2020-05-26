import { getInfo, orderAZ, orderZA, naturalOrder, filterAll, searchName, countGender, countStatus} from '../src/data.js';
const data = [
      {
          "name": "Rick",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
        },
        {
          "name": "Morty",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
        },
        {
          "name": "Summer",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
        },
        {
          "name": "Beth",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
        },
        {
          "name": "Jerry",
          "status": "Dead",
          "species": "Human",
          "type": "",
          "gender": "Male",
        }]; 

describe('function getInfo', () => {
  it('is a function', () => {
    expect(typeof getInfo).toBe('function');
  });
  it('returns items in array when searching for items', () => {
    expect(getInfo(data, "name", "status", "species", "type", "gender")).toEqual([["Rick", undefined, "Male", "Alive", "Human",], 
    ["Morty", undefined, "Male", "Alive", "Human",], ["Summer", undefined, "Female", "Alive", "Human",],
    ["Beth", undefined, "Female", "Alive", "Human",], ["Jerry", undefined, "Male", "Dead", "Human",]]);
  });
});

describe('naturalOrder', () => {
  it('is a function', () => {
    expect(typeof naturalOrder).toBe('function');
  });
  it('returns array of characters in the sequence they are in', () => {
    expect(naturalOrder(data, "name", "status", "species", "type", "gender")).toEqual([["Rick", undefined, "Male", "Alive", "Human",], 
    ["Morty", undefined, "Male", "Alive", "Human",], ["Summer", undefined, "Female", "Alive", "Human",],
    ["Beth", undefined, "Female", "Alive", "Human",], ["Jerry", undefined, "Male", "Dead", "Human",]]);
  });
});

describe('orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns array in alphabetical order', () => {
    expect(orderAZ(data, "name")).toEqual([["Beth", undefined, "Female", "Alive", "Human",],
    ["Jerry", undefined, "Male", "Dead", "Human",], ["Morty", undefined, "Male", "Alive", "Human",],
    ["Rick", undefined, "Male", "Alive", "Human",], ["Summer", undefined, "Female", "Alive", "Human",]]);
  });
});

describe('orderZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns array from Z to A', () => {
    expect(orderZA(data, "name")).toEqual([["Summer", undefined, "Female", "Alive", "Human",], 
    ["Rick", undefined, "Male", "Alive", "Human",], ["Morty", undefined, "Male", "Alive", "Human",],
    ["Jerry", undefined, "Male", "Dead", "Human",], ["Beth", undefined, "Female", "Alive", "Human",]]);
  });
});

describe('filterAll', () => {
  it('is a function', () => {
    expect(typeof filterAll).toBe('function');
  });

  it('returns array of "Jerry" when searching for name and "Jerry"', () => {
    expect(filterAll(data, "name", "Jerry")).toEqual([["Jerry", undefined, "Male", "Dead", "Human",]]);
  });
});

describe('searchName', () => {
  it('is a function', () => {
    expect(typeof searchName).toBe('function');
  });

  it('should return an "rick" for "rick"', () => {
    expect(searchName("rick", data)).toEqual([["Rick", undefined, "Male", "Alive", "Human",]])
  });
});

describe('countGender', () => {
  it('is a function', () => {
    expect(typeof countGender).toBe('function');
  });

  it('should return the gender count', () => {
    expect(countGender(data)).toEqual([["Female", 2], ["Male", 3], ["Unknown", undefined], 
    ["Genderless", undefined]])
  });
});

describe('countStatus', () => {
  it('is a function', () => {
    expect(typeof countStatus).toBe('function');
  });

  it('should return the status count', () => {
    expect(countStatus(data)).toEqual([["Alive", 4], ["Dead", 1], ["Unknown", undefined,]])
  });
});